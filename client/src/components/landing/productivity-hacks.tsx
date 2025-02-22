import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const videos = [
  {
    id: "placeholder1",
    title: "Task Automation Basics",
    description: "Learn how to automate your daily tasks"
  },
  {
    id: "placeholder2",
    title: "Excel Automation Tips",
    description: "Boost your productivity with Excel automation"
  },
  {
    id: "placeholder3",
    title: "AI Integration Guide",
    description: "Integrate AI into your workflow"
  }
];

export default function ProductivityHacks() {
  return (
    <section id="videos" className="py-24 bg-gray-50">
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
            Free Productivity Hacks
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Learn productivity tips and tricks from our experts
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
            >
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-100 relative flex items-center justify-center">
                    <Play className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600">
                      {video.description}
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
