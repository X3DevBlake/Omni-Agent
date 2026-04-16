import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Installation from "@/components/Installation";
import Platforms from "@/components/Platforms";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Installation />
        <Platforms />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
