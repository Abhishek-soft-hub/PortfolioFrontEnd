import {projects} from "../data/portfolioData";

function Projects(){

return(

<section id="projects">

<h2>Projects</h2>

<div className="project-container">

{

projects.map((project,index)=>(

<div className="project-card" key={index}>

<h3>{project.title}</h3>

<p>{project.description}</p>

<div>

{

project.tech.map((tech,index)=>(

<span
className="skill"
key={index}
>

{tech}

</span>

))

}

</div>

</div>

))

}

</div>

</section>

)

}

export default Projects;