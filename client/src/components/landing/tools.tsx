import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, FileSpreadsheet, MessageSquare, Database } from "lucide-react";

const tools = [
  {
    icon: <Mail className="h-12 w-12 text-blue-600" />,
    title: "Email Automation",
    description: "Automate email responses and follow-ups"
  },
  {
    icon: <FileSpreadsheet className="h-12 w-12 text-green-600" />,
    title: "Data Processing",
    description: "Process and analyze data automatically"
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-purple-600" />,
    title: "Chat Automation",
    description: "Automate customer service responses"
  },
  {
    icon: <Database className="h-12 w-12 text-orange-600" />,
    title: "Database Management",
    description: "Automate database operations"
  }
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-gray-50">
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
            AI Tools for Every Need
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Our intelligent tools help you automate repetitive tasks
            and boost productivity
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="shrink-0">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600">
                      {tool.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
