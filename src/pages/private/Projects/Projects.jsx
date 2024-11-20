import React from "react";
import { Link, NavLink } from "react-router-dom";

const Projects = () => {
  const ourProjects=[
    {src:"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      projectname:"Computer tech"},
    {src:"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      projectname:"Computer tech"},
    {src:"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      projectname:"Computer tech"},
    {src:"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      projectname:"Computer tech"},
    ]
  return (
    <div className="container  py-12">
      <div className="space-y-8">
        <div className="px-8">
          <h2 className="text-3xl font-semibold text-gray-900">Our Projects</h2>
          <p className="text-lg text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eum esse eius, alias, sequi fugit adipisci sint libero saepe consequatur amet optio! Illo, odit qui. Dolore nostrum sed nam accusantium?
          </p>
        </div>

        <div className="flex flex-wrap gap-y-4">
          {/* Article */}
          {
            ourProjects.map((project,index)=>{
              return(
              <NavLink key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs mx-auto">
                <img
                  alt="Boost your conversion rate"
                  src={project.src}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                <h3 className="mt-4 text-lg font-semibold text-gray-900"> {project.projectname} </h3>
                </div>
              </NavLink>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
