function Projects() {
  try {
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

    const duplicatedProjects = [...projects, ...projects];

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

        <div className="overflow-hidden">
          <div className="flex scroll-container">
            {duplicatedProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}
