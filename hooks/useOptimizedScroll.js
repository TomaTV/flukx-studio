import { useScroll } from "framer-motion";
import { useIsMobile } from "./useIsMobile";

export const useOptimizedScroll = (ref, options = {}) => {
  const isMobile = useIsMobile();

  // Optimisation des options de scroll pour mobile
  const optimizedOptions = {
    ...options,
    offset: isMobile 
      ? ["start end", "end start"] 
      : options.offset || ["start end", "end start"],
    layoutEffect: isMobile ? false : options.layoutEffect,
    smooth: isMobile ? false : options.smooth,
  };

  return useScroll(ref, optimizedOptions);
};