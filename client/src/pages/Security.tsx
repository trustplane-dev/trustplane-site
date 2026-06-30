import Navbar from "@/components/Navbar";
import WhyMatters from "@/components/sections/WhyMatters";
import WhatTrustplaneDoes from "@/components/sections/WhatTrustplaneDoes";
import AuditEvidence from "@/components/sections/AuditEvidence";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function SecurityPage() {
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
        <WhyMatters />
        <WhatTrustplaneDoes />
        <AuditEvidence />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
