function AnimatedBackground() {
  try {
    const vantaRef = React.useRef(null);
    const vantaEffect = React.useRef(null);

    React.useEffect(() => {
      let timeoutId;

      const initializeVanta = () => {
        if (!vantaEffect.current && vantaRef.current) {
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x06b6d4,
            backgroundColor: 0x0f172a,
            spacing: 12.0,
            showDots: false,
            points: 10.0,
            maxDistance: 20.0,
          });
        }
      };

      // Delay initialization so the div has full size
      timeoutId = setTimeout(initializeVanta, 50);

      // Handle screen resizes
      const handleResize = () => {
        if (vantaEffect.current) {
          vantaEffect.current.resize();
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("resize", handleResize);

        if (vantaEffect.current) {
          vantaEffect.current.destroy();
          vantaEffect.current = null;
        }
      };
    }, []);

    return (
      <div
        ref={vantaRef}
        className="fixed inset-0 z-0"
        data-name="animated-background"
        data-file="components/AnimatedBackground.js"
      />
    );
  } catch (error) {
    console.error("AnimatedBackground component error:", error);
    return null;
  }
}
