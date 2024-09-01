

import styles from './ProjectsStyle.module.css'
import threadstore from '../../assets/projectsimg/threadstore.jpeg'
import ProjectCard from '../../Common/ProjectCard'
import hotwheels from '../../assets/projectsimg/hotwheels.jpg'
import fundkeeper from '../../assets/projectsimg/funkeeper.jpg'
import servicecentre from '../../assets/projectsimg/servicecentre.jpg'

function Projects() {
  
  return (
    
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
      <ProjectCard 
      src={threadstore}
    link="https://github.com/Savadkn/threadstore"
      h3="threadstore"
      p="E-commerce-store"/>
      
<ProjectCard 
      src={hotwheels}
    link="https://github.com/Savadkn/tyre-parellel-project"
      h3="Hot Wheelz"
      p="Tyre-store"/>

<ProjectCard 
      src={fundkeeper}
    link="https://github.com/Savadkn/tyre-parellel-project"
      h3="FundKeeper"
      p="Manage expence 
      and income in our daily life"/>

<ProjectCard 
      src={servicecentre}
    link="https://github.com/Savadkn/tyre-parellel-project"
      h3="Service-Center"
      p="Multi brand cars and vehicle repair" />
     
        </div>
        </section>
  )
}

export default Projects