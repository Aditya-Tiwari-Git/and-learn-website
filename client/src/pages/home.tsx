import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Tools from "@/components/landing/tools";
import ProductivityHacks from "@/components/landing/productivity-hacks";
import Blog from "@/components/landing/blog";
import Integrations from "@/components/landing/integrations";
import Contact from "@/components/landing/contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <Tools />
      <ProductivityHacks />
      <Blog />
      <Integrations />
      <Contact />
    </main>
  );
}