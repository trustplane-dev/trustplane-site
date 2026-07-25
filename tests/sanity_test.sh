#!/usr/bin/env bash
set -euo pipefail

# TrustPlane Site — Sanity & Smoke Tests
# Run: bash tests/sanity_test.sh

PASS=0
FAIL=0
WARN=0

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

pass() { echo -e "  ${GREEN}✓${NC} $1"; PASS=$((PASS+1)); }
fail() { echo -e "  ${RED}✗${NC} $1"; FAIL=$((FAIL+1)); }
warn() { echo -e "  ${YELLOW}⚠${NC} $1"; WARN=$((WARN+1)); }

HTML_FILES="index.html auth.html control.html pricing.html solutions.html downloads.html"
ALL_FILES="$HTML_FILES llms.txt robots.txt sitemap.xml pricing.md assets/site.css assets/logo.svg assets/og.png"

echo "========================================"
echo " TrustPlane Site — Sanity Tests"
echo "========================================"
echo ""

# ─── 1. FILE EXISTENCE ───────────────────────────────────────────────────────
echo "1. File existence"
for f in $ALL_FILES; do
  if [ -f "$f" ]; then pass "$f exists"; else fail "$f MISSING"; fi
done
echo ""

# ─── 2. FILES THAT SHOULD NOT EXIST ──────────────────────────────────────────
echo "2. Orphaned files should not exist"
for f in style.css research.txt; do
  if [ ! -f "$f" ]; then pass "$f does not exist"; else fail "$f should be deleted"; fi
done
echo ""

# ─── 3. CNAME ────────────────────────────────────────────────────────────────
echo "3. CNAME"
if [ "$(cat CNAME 2>/dev/null)" = "trustplane.dev" ]; then
  pass "CNAME = trustplane.dev"
else
  fail "CNAME is not trustplane.dev"
fi
echo ""

# ─── 4. HTML STRUCTURE (unclosed tags) ───────────────────────────────────────
echo "4. HTML structure (tag balance)"
for f in $HTML_FILES; do
  python3 -c "
import re, sys
with open('$f') as fh:
    content = fh.read()
errors = []
for tag in ['html', 'head', 'body', 'section', 'div', 'article', 'main', 'header', 'footer', 'nav', 'aside', 'details', 'summary', 'table', 'thead', 'tbody', 'tr', 'td', 'th', 'ul', 'li', 'p', 'span']:
    opens = len(re.findall(r'<' + tag + r'[\s>]', content))
    closes = len(re.findall(r'</' + tag + r'>', content))
    if opens != closes:
        errors.append(f'<{tag}>: {opens} open, {closes} close')
if errors:
    print('ERRORS: ' + '; '.join(errors))
    sys.exit(1)
else:
    print('OK')
" 2>/dev/null && pass "$f tag balance OK" || fail "$f has unbalanced tags"
done
echo ""

# ─── 5. FONT LINK INTEGRITY ──────────────────────────────────────────────────
echo "5. Font link integrity (no mangled text)"
for f in $HTML_FILES; do
  # Check for mangled font links (leftover garbage text)
  if grep -q 'rel="stylesheet">[a-z]' "$f"; then
    fail "$f has mangled font link (garbage text after stylesheet)"
  else
    pass "$f font link clean"
  fi
  # Check exactly one font link
  count=$(grep -c 'fonts.googleapis.com/css2' "$f")
  if [ "$count" -eq 1 ]; then
    pass "$f has exactly 1 font link"
  else
    fail "$f has $count font links (expected 1)"
  fi
  # Check font link has all 3 families
  if grep -q 'JetBrains+Mono' "$f" && grep -q 'Inter:wght' "$f" && grep -q 'Space+Grotesk' "$f"; then
    pass "$f has all 3 font families"
  else
    fail "$f missing font families"
  fi
done
echo ""

# ─── 6. JSON-LD VALIDITY ─────────────────────────────────────────────────────
echo "6. JSON-LD validity"
for f in $HTML_FILES; do
  python3 -c "
import re, json, sys
with open('$f') as fh:
    content = fh.read()
blocks = re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>', content, re.DOTALL)
if not blocks:
    print('NO JSON-LD')
    sys.exit(1)
for i, block in enumerate(blocks):
    try:
        data = json.loads(block)
    except json.JSONDecodeError as e:
        print(f'INVALID block {i+1}: {e}')
        sys.exit(1)
print(f'{len(blocks)} blocks OK')
" 2>/dev/null && pass "$f JSON-LD valid" || fail "$f JSON-LD invalid or missing"
done
echo ""

# ─── 7. CSS CLASS COVERAGE ───────────────────────────────────────────────────
echo "7. CSS class coverage (all HTML classes exist in CSS)"
python3 -c "
import re

with open('assets/site.css') as f:
    css = f.read()
css_classes = set(re.findall(r'\.([a-zA-Z0-9_-]+)', css))

html_files = ['index.html', 'auth.html', 'control.html', 'pricing.html', 'solutions.html', 'downloads.html']
all_ok = True
for f in html_files:
    with open(f) as fh:
        html = fh.read()
    html_classes = set()
    for match in re.findall(r'class=\"([^\"]*)\"', html):
        for c in match.split():
            html_classes.add(c)
    missing = html_classes - css_classes
    # Filter out utility classes
    missing = {c for c in missing if not c.startswith('btn') and not c.startswith('ext') and c not in ['n', 'y', 'no', 'tp', 'm', 't', 'd', 'ic', 'cy', 'cm']}
    if missing:
        print(f'MISSING {f}: {sorted(missing)}')
        all_ok = False

if all_ok:
    print('ALL OK')
" 2>/dev/null && pass "All CSS classes exist" || fail "Some CSS classes are missing (see above)"
echo ""

# ─── 8. INTERNAL LINKS ───────────────────────────────────────────────────────
echo "8. Internal links (no broken links)"
for f in $HTML_FILES; do
  for link in $(grep -oE 'href="/[a-z._-]*"' "$f" | sort -u | sed 's/href="//;s/"//'); do
    if [ -f ".$link" ] || [ -d ".$link" ]; then
      pass "$f → $link"
    else
      fail "$f → $link BROKEN"
    fi
  done
done
echo ""

# ─── 9. REQUIRED META TAGS ───────────────────────────────────────────────────
echo "9. Required meta tags (GEO/SEO)"
for f in $HTML_FILES; do
  # hreflang
  if grep -q 'hreflang="en"' "$f" && grep -q 'hreflang="x-default"' "$f"; then
    pass "$f has hreflang"
  else
    fail "$f missing hreflang"
  fi
  # og:image dimensions
  if grep -q 'og:image:width' "$f" && grep -q 'og:image:height' "$f"; then
    pass "$f has og:image dimensions"
  else
    fail "$f missing og:image dimensions"
  fi
  # canonical
  if grep -q 'rel="canonical"' "$f"; then
    pass "$f has canonical"
  else
    fail "$f missing canonical"
  fi
  # security headers
  if grep -q 'X-Content-Type-Options' "$f"; then
    pass "$f has nosniff"
  else
    warn "$f missing nosniff"
  fi
  # alt text not empty
  if grep -q 'alt=""' "$f"; then
    fail "$f has empty alt attributes"
  else
    pass "$f has no empty alt attributes"
  fi
done
echo ""

# ─── 10. NO PRIVATE REFERENCES ───────────────────────────────────────────────
echo "10. No private references"
if grep -RInE '/Users/|MergeMatter|medham|research\.txt' --exclude-dir=.git --exclude-dir=node_modules --exclude-dir=backups --exclude-dir=.agents --exclude='ci.yml' --exclude='sanity_test.sh' . 2>/dev/null | grep -v 'sanity_test'; then
  fail "Private references found"
else
  pass "No private references"
fi
echo ""

# ─── 11. ROBOTS.TXT ──────────────────────────────────────────────────────────
echo "11. robots.txt"
if grep -q 'User-agent: \*' robots.txt; then pass "robots.txt allows all"; else fail "robots.txt missing User-agent"; fi
if grep -q 'Allow: /' robots.txt; then pass "robots.txt allows /"; else fail "robots.txt missing Allow"; fi
if grep -q 'Sitemap:' robots.txt; then pass "robots.txt has sitemap"; else fail "robots.txt missing sitemap"; fi
echo ""

# ─── 12. SITEMAP ─────────────────────────────────────────────────────────────
echo "12. sitemap.xml"
for url in / /auth.html /control.html /pricing.html /solutions.html /downloads.html; do
  if grep -q "trustplane.dev${url}" sitemap.xml; then
    pass "sitemap has $url"
  else
    fail "sitemap missing $url"
  fi
done
if grep -q 'lastmod' sitemap.xml; then pass "sitemap has lastmod"; else warn "sitemap missing lastmod"; fi
echo ""

# ─── 13. FAQ PARITY (JSON-LD FAQ = visible FAQ) ──────────────────────────────
echo "13. FAQ parity (JSON-LD FAQ matches visible FAQ)"
for f in $HTML_FILES; do
  python3 -c "
import re, json, sys
with open('$f') as fh:
    content = fh.read()

# Extract JSON-LD FAQ questions
ld_blocks = re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>', content, re.DOTALL)
ld_questions = []
for block in ld_blocks:
    try:
        data = json.loads(block)
        if data.get('@type') == 'FAQPage':
            for q in data.get('mainEntity', []):
                ld_questions.append(q['name'])
    except:
        pass

# Extract visible FAQ questions
visible_questions = re.findall(r'<details[^>]*><summary>(.*?)</summary>', content)

if not ld_questions and not visible_questions:
    print('NO FAQ')
    sys.exit(0)

if set(ld_questions) == set(visible_questions):
    print(f'PARITY ({len(ld_questions)} questions)')
    sys.exit(0)
else:
    only_ld = set(ld_questions) - set(visible_questions)
    only_vis = set(visible_questions) - set(ld_questions)
    msg = []
    if only_ld: msg.append(f'JSON-LD only: {only_ld}')
    if only_vis: msg.append(f'Visible only: {only_vis}')
    print(f'MISMATCH: {\"; \".join(msg)}')
    sys.exit(1)
" 2>/dev/null && pass "$f FAQ parity OK" || warn "$f FAQ parity issue (or no FAQ)"
done
echo ""

# ─── 14. SCRIPT REFERENCES ───────────────────────────────────────────────────
echo "14. Script references"
for f in $HTML_FILES; do
  # Check referenced script files exist. Pages may legitimately have no
  # non-JSON-LD <script> tags, so keep this pipeline pipefail-safe.
  srcs=$(grep -oE 'src="[^"]*\.js"' "$f" | sed 's/src="//;s/"//' || true)
  if [ -z "$srcs" ]; then
    pass "$f references no external scripts"
  else
    for src in $srcs; do
      if [ -f ".$src" ]; then
        pass "$f references $src (exists)"
      else
        fail "$f references $src (MISSING)"
      fi
    done
  fi
done
echo ""

# ─── 15. OG.IMAGE EXISTS ─────────────────────────────────────────────────────
echo "15. OG image"
if [ -f assets/og.png ]; then
  size=$(stat -f%z assets/og.png 2>/dev/null || stat -c%s assets/og.png 2>/dev/null)
  if [ "$size" -gt 10000 ]; then
    pass "og.png exists (${size} bytes)"
  else
    fail "og.png too small (${size} bytes)"
  fi
else
  fail "og.png MISSING"
fi
echo ""

# ─── SUMMARY ─────────────────────────────────────────────────────────────────
echo "========================================"
echo " RESULTS"
echo "========================================"
echo -e "  ${GREEN}PASS${NC}: $PASS"
echo -e "  ${RED}FAIL${NC}: $FAIL"
echo -e "  ${YELLOW}WARN${NC}: $WARN"
echo ""

if [ "$FAIL" -gt 0 ]; then
  echo -e "${RED}❌ $FAIL test(s) failed${NC}"
  exit 1
else
  echo -e "${GREEN}✅ All tests passed${NC}"
  exit 0
fi
