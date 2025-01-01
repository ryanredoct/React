import React from "react";

function Projects() {
  const projects = [
    { name: "Weather App", description: "A React app to display weather forecasts.", link: "#" },
    { name: "To-Do List", description: "A simple to-do list app using React.", link: "#" },
    // Add more projects here
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
