function ParallaxImage({ src, alt = "", start, end, className = "" }) {
  try {
    const ref = React.useRef(null);
    const motion = window.FramerMotion?.motion;
    const { useScroll, useTransform, useMotionTemplate } = window.FramerMotion || {};

    if (!motion || !useScroll || !useTransform) {
      return (
        <img 
          src={src} 
          alt={alt}
          className={className}
          ref={ref}
        />
      );
    }

    const ParallaxContent = () => {
      const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`]
      });

      const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
      const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
      const y = useTransform(scrollYProgress, [0, 1], [start, end]);
      const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

      return (
        <motion.img
          src={src}
          alt={alt}
          className={className}
          ref={ref}
          style={{ transform, opacity }}
        />
      );
    };

    return <ParallaxContent />;
  } catch (error) {
    console.error('ParallaxImage component error:', error);
    return (
      <img 
        src={src} 
        alt={alt}
        className={className}
      />
    );
  }
}