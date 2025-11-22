function SmoothScroll({ children }) {
  try {
    const lenisRef = React.useRef(null);

    React.useEffect(() => {
      if (window.Lenis) {
        const lenis = new window.Lenis({
          lerp: 0.05,
          smooth: true,
          direction: 'vertical',
        });

        lenisRef.current = lenis;

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
          lenis.destroy();
        };
      }
    }, []);

    return children;
  } catch (error) {
    console.error('SmoothScroll component error:', error);
    return children;
  }
}