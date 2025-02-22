import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { FileSpreadsheet, Cloud, Share2, MessageSquare } from "lucide-react";

const integrations = [
  {
    icon: <FileSpreadsheet className="h-12 w-12 text-green-600" />,
    title: "Microsoft Excel",
    description: "Automate Excel workflows and data processing"
  },
  {
    icon: <Cloud className="h-12 w-12 text-blue-600" />,
    title: "Power Automate",
    description: "Connect with Microsoft Power Automate"
  },
  {
    icon: <Share2 className="h-12 w-12 text-orange-600" />,
    title: "Zapier",
    description: "Integrate with thousands of apps via Zapier"
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-purple-600" />,
    title: "Slack",
    description: "Automate Slack notifications and workflows"
  }
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-white">
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
            Seamless Integrations
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Connect AND Learn with your favorite tools and platforms
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
            >
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {integration.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {integration.title}
                  </h3>
                  <p className="text-gray-600">
                    {integration.description}
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