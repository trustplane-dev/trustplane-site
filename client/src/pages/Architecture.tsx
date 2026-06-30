import Navbar from "@/components/Navbar";
import ArchitectureSection from "@/components/sections/Architecture";
import HowItWorks from "@/components/sections/HowItWorks";
import IdentityModel from "@/components/sections/IdentityModel";
import AuditEvidence from "@/components/sections/AuditEvidence";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function ArchitecturePage() {
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
        <ArchitectureSection />
        <HowItWorks />
        <IdentityModel />
        <AuditEvidence />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
