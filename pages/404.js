import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-gray-900 font-grotesk">404</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-2xl text-gray-600 font-inter mb-2">
            La page que vous cherchez est introuvable.
          </p>
          <p className="text-gray-500 font-inter">
            Elle a peut-être été déplacée ou supprimée.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300 font-grotesk"
          >
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>
        </motion.div>

        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute right-[10%] top-[20%] w-[40vw] h-[40vh] bg-indigo-600 rounded-full blur-[120px]" />
          <div className="absolute left-[5%] bottom-[10%] w-[35vw] h-[35vh] bg-blue-600 rounded-full blur-[100px]" />
        </motion.div>
      </div>
    </div>
  );
}
