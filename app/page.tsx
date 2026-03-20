import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatIsSection from "./components/WhatIsSection";
import BenefitsSection from "./components/BenefitsSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";
import ClientsSection from "./components/ClientsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIsSection />
        <BenefitsSection />
        <ProductsSection />
        <AboutSection />
        <ProcessSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
