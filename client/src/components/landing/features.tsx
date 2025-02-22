import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, GitBranch, Settings, Zap } from "lucide-react";

const features = [
  {
    icon: <Bot className="h-8 w-8 text-purple-600" />,
    title: "Pre-built AI Bots",
    description: "Access a library of ready-to-use AI bots for common tasks"
  },
  {
    icon: <GitBranch className="h-8 w-8 text-blue-600" />,
    title: "Custom Workflows",
    description: "Create personalized automation workflows without coding"
  },
  {
    icon: <Settings className="h-8 w-8 text-orange-600" />,
    title: "Easy Integration",
    description: "Connect with Excel, Power Automate, and popular APIs"
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-600" />,
    title: "Instant Results",
    description: "See immediate productivity gains with automated tasks"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600"
          >
            Everything you need to automate your workflow
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}