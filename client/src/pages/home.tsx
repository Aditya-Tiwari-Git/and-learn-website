import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Tools from "@/components/landing/tools";
import Integrations from "@/components/landing/integrations";
import Contact from "@/components/landing/contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <Tools />
      <Integrations />
      <Contact />
    </main>
  );
}
