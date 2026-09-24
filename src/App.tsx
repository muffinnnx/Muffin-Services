import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import PricingComparison from "./sections/PricingComparison";
import PerformanceImprovements from "./sections/PerformanceImprovements";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — Services */}
        <Services />

        {/* 03 — Pricing */}
        <Pricing />

        {/* 04 — Pricing Comparison */}
        <PricingComparison />

        {/* 05 — Performance Improvements */}
        <PerformanceImprovements />

        {/* 06 — Results & Testimonials */}
        <Testimonials />

        {/* 07 — FAQ */}
        <FAQ />

        {/* 08 — Contact */}
        <Contact />
      </main>
    </>
  );
}

export default App;