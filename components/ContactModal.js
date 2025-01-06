import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";
import { useLanguage } from "../hooks/useLanguage";

const ContactModal = ({ isOpen, onClose }) => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  const [modalPosition, setModalPosition] = useState(0);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClick = (e) => {
      setClickPosition({
        x: e.clientX,
        y: e.clientY + window.scrollY,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const currentPosition = window.scrollY;
      setModalPosition(currentPosition);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`fixed inset-0 bg-black/50 z-[9999] ${
              isMobile
                ? "block"
                : "flex items-start justify-center overflow-auto py-8"
            }`}
          >
            {isMobile ? (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 300,
                }}
                onClick={(e) => e.stopPropagation()}
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] max-h-[85vh] overflow-y-auto overscroll-contain"
              >
                <div className="sticky top-0 z-50 bg-white pt-6 px-6">
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-2"
                  >
                    <X size={24} />
                  </button>
                  <h2 className="text-2xl font-bold font-grotesk text-gray-900 pr-12 mb-8">
                    {t("contact.title")}
                  </h2>
                </div>

                <div className="px-6 pb-8">
                  <div className="grid grid-cols-1 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-grotesk font-bold text-gray-900 mb-2">
                          bientôt | coming soon {t("contact.email")}
                        </h3>
                        <a
                          href="mailto:contact@flukxstudio.fr"
                          className="text-gray-600 hover:text-gray-900 transition-colors font-inter"
                        >
                          contact@flukxstudio.fr
                        </a>
                      </div>

                      <div>
                        <h3 className="text-xl font-grotesk font-bold text-gray-900 mb-2">
                          {t("contact.location")}
                        </h3>
                        <p className="text-gray-600 font-inter">
                          {t("contact.locationValue")}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("contact.name")}
                          required
                          className="w-full px-4 py-3 bg-transparent rounded-lg border-2 border-gray-200 font-inter placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("contact.email")}
                          required
                          className="w-full px-4 py-3 bg-transparent rounded-lg border-2 border-gray-200 font-inter placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                        />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder={t("contact.subject")}
                          required
                          className="w-full px-4 py-3 bg-transparent rounded-lg border-2 border-gray-200 font-inter placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                        />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder={t("contact.message")}
                          required
                          className="w-full px-4 py-3 bg-transparent rounded-lg border-2 border-gray-200 font-inter placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors resize-none"
                        />
                        <button
                          type="submit"
                          className="w-full px-8 py-3 bg-gray-900 text-white rounded-lg font-grotesk border-2 border-transparent hover:bg-white hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
                        >
                          {t("contact.send")}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: clickPosition.y - 300 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: Math.max(clickPosition.y - 300, 20),
                }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full relative mx-4 my-4"
              >
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>

                <h2 className="text-4xl font-bold font-grotesk mb-8 text-gray-900">
                  {t("contact.title")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-grotesk font-bold text-gray-900 mb-2">
                        {t("contact.email")}
                      </h3>
                      <a
                        href="mailto:contact@flukxstudio.fr"
                        className="text-gray-600 hover:text-gray-900 transition-colors font-inter"
                      >
                        contact@flukxstudio.fr
                      </a>
                    </div>

                    <div>
                      <h3 className="text-xl font-grotesk font-bold text-gray-900 mb-2">
                        {t("contact.location")}
                      </h3>
                      <p className="text-gray-600 font-inter">
                        {t("contact.locationValue")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("contact.name")}
                        required
                        className="w-full px-4 py-3 bg-transparent rounded-lg border-2 border-gray-200 font-inter placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("contact.email")}
                        required
                        className="w-full px-4 py-3 bg-transparent rounded-lg border-2 border-gray-200 font-inter placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                      />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t("contact.subject")}
                        required
                        className="w-full px-4 py-3 bg-transparent rounded-lg border-2 border-gray-200 font-inter placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                      />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder={t("contact.message")}
                        required
                        className="w-full px-4 py-3 bg-transparent rounded-lg border-2 border-gray-200 font-inter placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full px-8 py-3 bg-gray-900 text-white rounded-lg font-grotesk border-2 border-transparent hover:bg-white hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
                      >
                        {t("contact.send")}
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
