/*
 * HOME PAGE — Trustplane Marketing
 * Design: Dark Precision Engineering
 * Sections: Hero, SocialProof, WhyMatters, WhatTrustplaneDoes, CoreCapabilities,
 *           Architecture, HowItWorks, IdentityModel, ProviderOnboarding, UseCases,
 *           AuditEvidence, AdvancedCapabilities, FinalCTA
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import WhyMatters from "@/components/sections/WhyMatters";
import WhatTrustplaneDoes from "@/components/sections/WhatTrustplaneDoes";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import Architecture from "@/components/sections/Architecture";
import HowItWorks from "@/components/sections/HowItWorks";
import IdentityModel from "@/components/sections/IdentityModel";
import ProviderOnboarding from "@/components/sections/ProviderOnboarding";
import UseCases from "@/components/sections/UseCases";
import ComicStrip from "@/components/sections/ComicStrip";
import AuditEvidence from "@/components/sections/AuditEvidence";
import AdvancedCapabilities from "@/components/sections/AdvancedCapabilities";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
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
        <Hero />
        <SocialProof />
        <WhyMatters />
        <WhatTrustplaneDoes />
        <CoreCapabilities />
        <Architecture />
        <HowItWorks />
        <IdentityModel />
        <ProviderOnboarding />
        <UseCases />
        <ComicStrip />
        <AuditEvidence />
        <AdvancedCapabilities />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
