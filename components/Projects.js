function Projects() {
  try {
    const scrollContainerRef = React.useRef(null);
    const [isPaused, setIsPaused] = React.useState(false);
    const motion = window.FramerMotion?.motion;
    
    const projects = [
      {
        title: "CCC Website",
        description: "Website to learn and practice CCC questions.",
        tags: ["Community", "Collaboration"],
        image: "ccc.png",
        link: "https://codingcollectivewaterloo.netlify.app/"
      },
      {
        title: "Arcade",
        description: "",
        image: "gamehub.png",
        tags: ["JavaScript", "Canvas", "Games"],
        link: "https://jassgamehub.netlify.app/"
      },
      {
        title: "School Map",
        description: "",
        tags: ["Map", "React", "API"]
      }
    ];

    const duplicatedProjects = [...projects, ...projects, ...projects];

    React.useEffect(() => {
      const container = scrollContainerRef.current;
      if (!container || isPaused) return;

      const scrollSpeed = 1;
      let animationId;

      const autoScroll = () => {
        if (container) {
          container.scrollLeft += scrollSpeed;
          
          const maxScroll = container.scrollWidth / 3;
          if (container.scrollLeft >= maxScroll) {
            container.scrollLeft = 0;
          }
        }
        animationId = requestAnimationFrame(autoScroll);
      };

      animationId = requestAnimationFrame(autoScroll);

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }, [isPaused]);

    const scroll = (direction) => {
      if (scrollContainerRef.current) {
        setIsPaused(true);
        const scrollAmount = 400;
        const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
        scrollContainerRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
        
        setTimeout(() => setIsPaused(false), 1000);
      }
    };

    if (!motion) {
      return (
        <section 
          id="projects"
          className="py-20 bg-[var(--bg-darker)]"
          data-name="projects" 
          data-file="components/Projects.js"
        >
          <div className="container mx-auto px-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--text-light)] mb-4">
              Our Projects
            </h2>
            <p className="text-center text-[var(--text-gray)] text-lg">
              Discover what we're building together
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-slate-800 hover:bg-[var(--primary-color)] text-white flex items-center justify-center transition-colors shadow-lg"
            >
              <div className="icon-chevron-left text-xl"></div>
            </button>

            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto pb-6 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="flex gap-6 px-16">
                {duplicatedProjects.map((project, index) => (
                  <div key={index} className="flex-shrink-0 w-80">
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-slate-800 hover:bg-[var(--primary-color)] text-white flex items-center justify-center transition-colors shadow-lg"
            >
              <div className="icon-chevron-right text-xl"></div>
            </button>
          </div>
        </section>
      );
    }

    return (
      <section 
        id="projects"
        className="py-20 bg-[var(--bg-darker)]"
        data-name="projects" 
        data-file="components/Projects.js"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--text-light)] mb-4">
            Our Projects
          </h2>
          <p className="text-center text-[var(--text-gray)] text-lg">
            Discover what we're building together
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-slate-800 hover:bg-[var(--primary-color)] text-white flex items-center justify-center transition-colors shadow-lg"
          >
            <div className="icon-chevron-left text-xl"></div>
          </button>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-6 px-16">
              {duplicatedProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % projects.length) * 0.1 }}
                  className="flex-shrink-0 w-80"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-slate-800 hover:bg-[var(--primary-color)] text-white flex items-center justify-center transition-colors shadow-lg"
          >
            <div className="icon-chevron-right text-xl"></div>
          </button>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}
