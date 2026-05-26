import {skills} from "../data/portfolioData";

function Skills(){

return(

<section id="skills">

<h2>Skills</h2>

{

Object.entries(skills).map(([category,items])=>(

<div key={category}>

<h3>{category}</h3>

<div className="skills-container">

{

items.map((skill,index)=>(

<span className="skill" key={index}>
{skill}
</span>

))

}

</div>

</div>

))

}

</section>

)

}

export default Skills;