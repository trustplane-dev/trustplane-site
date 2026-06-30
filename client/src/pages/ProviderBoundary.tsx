import Navbar from "@/components/Navbar";
import ProviderOnboarding from "@/components/sections/ProviderOnboarding";
import AuditEvidence from "@/components/sections/AuditEvidence";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function ProviderBoundaryPage() {
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
        <ProviderOnboarding />
        <AuditEvidence />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
