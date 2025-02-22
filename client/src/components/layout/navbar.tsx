import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/">
            <motion.div 
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/logo.svg" alt="AND Learn" className="h-8 w-auto" />
            </motion.div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="#features">
              <a className="text-gray-700 hover:text-black">Features</a>
            </Link>
            <Link href="#tools">
              <a className="text-gray-700 hover:text-black">AI Tools</a>
            </Link>
            <Link href="#integrations">
              <a className="text-gray-700 hover:text-black">Integrations</a>
            </Link>
            <Link href="#contact">
              <a className="text-gray-700 hover:text-black">Contact</a>
            </Link>
          </div>

          <div className="hidden md:flex">
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link href="#features">
              <a className="block px-3 py-2 text-gray-700 hover:text-black">Features</a>
            </Link>
            <Link href="#tools">
              <a className="block px-3 py-2 text-gray-700 hover:text-black">AI Tools</a>
            </Link>
            <Link href="#integrations">
              <a className="block px-3 py-2 text-gray-700 hover:text-black">Integrations</a>
            </Link>
            <Link href="#contact">
              <a className="block px-3 py-2 text-gray-700 hover:text-black">Contact</a>
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
