import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useLanguage } from "../../hooks/useLanguage";
import Image from "next/image";

const Profile = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);

  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageHeight = useTransform(
    scrollYProgress,
    [0, 0.8],
    isMobile ? ["40vh", "60vh"] : ["30vh", "80vh"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.8],
    isMobile ? [1.05, 1] : [1.1, 1]
  );

  const nameY = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    isMobile ? [100, 0] : [200, 0]
  );

  const nameOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.5, 0.7], [200, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <section ref={sectionRef} className="relative bg-white">
      <motion.div
        style={{ height: imageHeight }}
        className="relative w-full overflow-hidden"
      >
        <motion.div
          style={{ scale: imageScale }}
          className="relative w-full h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src="/img/bgparallax.avif"
              alt="Thomas Devulder - Développeur & Designer"
              fill
              priority
              quality={90}
              sizes="100vw"
              style={{
                objectFit: "cover",
                transform: "translateZ(0)",
                willChange: "transform",
              }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDARAVFhkYGR8ZGR8eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="absolute bottom-32 sm:bottom-48 left-0 w-full px-4 sm:px-8 text-center text-white pointer-events-none">
          <motion.div
            style={{ y: nameY, opacity: nameOpacity }}
            className="overflow-hidden mb-4 sm:mb-8"
          >
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold font-grotesk">
              Thomas Devulder
            </h2>
          </motion.div>

          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-base sm:text-lg md:text-xl font-inter text-white/90">
              {t("profile.description")}
            </p>

            <div className="pointer-events-auto">
              <motion.a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={isMobile ? {} : { scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 hover:border-white border hover:bg-transparent hover:text-white font-grotesk rounded-full transition-colors"
              >
                <span className="text-sm sm:text-base">
                  {t("profile.btncv")}
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
