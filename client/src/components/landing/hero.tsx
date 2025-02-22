import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8"
          >
            Make AI Simple &<br />
            <span className="text-orange-500">Boost Productivity</span>
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            className="max-w-2xl mx-auto text-xl text-gray-600 mb-12"
          >
            Automate your daily tasks with intelligent bots. No coding required.
            Save time and focus on what matters most.
          </motion.p>

          <motion.div 
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-16"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Platform preview"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
