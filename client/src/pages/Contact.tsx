import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_API =
  (import.meta.env.VITE_CONTACT_API as string | undefined) ||
  "https://vvw638lxc7.execute-api.us-east-1.amazonaws.com/contact";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    requestType: "Architecture review",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!CONTACT_API) {
      setError("Contact endpoint is not configured.");
      return;
    }
    if (!form.name || !form.email || !form.message) {
      setError("Please complete name, work email, and message.");
      return;
    }

    setStatus("sending");
    try {
      const resp = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(text || "Request failed");
      }
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        company: "",
        requestType: "Architecture review",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send message");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <Navbar />
      <main>
        <section style={{ padding: "7rem 0 5rem" }}>
          <div className="container">
            <div style={{ maxWidth: "760px", marginBottom: "3rem" }}>
              <div className="tp-label" style={{ marginBottom: "1rem" }}>Contact Trustplane</div>
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "oklch(0.96 0.006 240)",
                  marginBottom: "1.25rem",
                }}
              >
                Discuss your deployment, integration, or architecture requirements
              </h1>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "oklch(0.58 0.01 240)",
                  maxWidth: "620px",
                }}
              >
                Tell us about your environment, provider boundary model, and integration
                goals. Trustplane will respond with the right next step for evaluation,
                deployment, or architecture review.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.45fr) minmax(280px, 0.85fr)",
                gap: "1.5rem",
                alignItems: "start",
              }}
              className="contact-grid"
            >
              <form onSubmit={onSubmit} className="tp-card" style={{ padding: "2rem" }}>
                <div style={{ display: "grid", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1rem" }} className="contact-form-grid">
                    <div>
                      <label className="tp-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                        Name
                      </label>
                      <Input value={form.name} onChange={update("name")} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="tp-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                        Work email
                      </label>
                      <Input type="email" value={form.email} onChange={update("email")} placeholder="name@company.com" />
                    </div>
                  </div>

                  <div>
                    <label className="tp-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                      Company
                    </label>
                    <Input value={form.company} onChange={update("company")} placeholder="Company" />
                  </div>

                  <div>
                    <label className="tp-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                      Request type
                    </label>
                    <Select
                      value={form.requestType}
                      onValueChange={(value) => setForm((prev) => ({ ...prev, requestType: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select request type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Architecture review">Architecture review</SelectItem>
                        <SelectItem value="Enterprise deployment">Enterprise deployment</SelectItem>
                        <SelectItem value="Provider integration">Provider integration</SelectItem>
                        <SelectItem value="Economy extension">Economy extension</SelectItem>
                        <SelectItem value="General inquiry">General inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="tp-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                      Message
                    </label>
                    <Textarea
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Describe your environment, use case, and the systems you want to authorize."
                      rows={7}
                    />
                  </div>

                  {error && (
                    <p style={{ color: "#f87171", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}>
                      {error}
                    </p>
                  )}
                  {status === "sent" && (
                    <p style={{ color: "#4ade80", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}>
                      Message sent. Trustplane will follow up shortly.
                    </p>
                  )}

                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                    <Button type="submit" className="tp-btn-primary" disabled={status === "sending"}>
                      {status === "sending" ? "Sending..." : "Send message"}
                    </Button>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                        lineHeight: 1.6,
                        color: "oklch(0.48 0.01 240)",
                        maxWidth: "420px",
                      }}
                    >
                      Your request is delivered to the Trustplane team for direct follow-up.
                    </p>
                  </div>
                </div>
              </form>

              <div className="tp-card" style={{ padding: "2rem" }}>
                <div className="tp-label" style={{ marginBottom: "1rem" }}>What to include</div>
                <div style={{ display: "grid", gap: "1rem" }}>
                  {[
                    "Your deployment model: Trustplane SaaS, customer-owned environment, or hybrid.",
                    "Whether you are authorizing AI agents, service-to-service calls, provider-managed APIs, or priced actions.",
                    "Whether you need the provider boundary model, the Economy extension, or both.",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "999px",
                          background: "#00d4ff",
                          marginTop: "0.45rem",
                          flexShrink: 0,
                        }}
                      />
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.875rem",
                          lineHeight: 1.7,
                          color: "oklch(0.76 0.006 240)",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
