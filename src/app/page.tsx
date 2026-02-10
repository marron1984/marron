import MouseBackground from "@/components/MouseBackground";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Timeline from "@/components/Timeline";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0F]">
      <MouseBackground />
      <main className="relative z-10">
        <Hero />
        <BentoGrid />
        <Timeline />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
