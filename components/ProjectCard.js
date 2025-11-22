// ProjectCard.js
function ProjectCard({ title, description, tags, image, link }) {
  try {
    return (
      <div 
        className="flex-shrink-0 w-80 snap-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl 
                   overflow-hidden transition-all duration-150 hover:scale-110 hover:shadow-2xl 
                   hover:shadow-cyan-500/30 mx-4"
        data-name="project-card" 
        data-file="components/ProjectCard.js"
      >
        <div className="h-48 overflow-hidden bg-slate-700">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover cursor-pointer"
              />
            </a>
          ) : (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--text-light)] mb-3">{title}</h3>
          <p className="text-[var(--text-gray)] mb-4 text-sm line-clamp-3">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-[var(--primary-color)] bg-opacity-20 
                           text-[var(--primary-color)] rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProjectCard component error:', error);
    return null;
  }
}

// Projects.js
function Projects() {
  try {
    const projects = [
      {
        title: "CCC Website",
        description: "Website to learn and practice CCC questions.",
        tags: ["Community", "Collaboration"],
        image: "ccc.png",
        link: "https://jass-main-site.vercel.app"
      },
      {
        title: "Arcade",
        description: "Fun JavaScript canvas game.",
        tags: ["JavaScript", "Canvas", "Games"],
        image: "arcade.png",
        link: "https://jass-main-site.vercel.app"
      },
      {
        title: "School Map",
        description: "Interactive school map using React and APIs.",
        tags: ["Map", "React", "API"],
        image: "schoolmap.png",
        link: "https://jass-main-site.vercel.app"
      }
    ];

    const duplicatedProjects = [...projects, ...projects]; // optional for looping effect

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

        <div className="overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory flex px-4 py-4 w-full scrollbar-show">
          {duplicatedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}

export { Projects, ProjectCard };
