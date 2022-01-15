import './Projects.css'
import Card from './Card/Card.js'
import debttrackerimg from '../../assets/debttrackerimg.jpg'
import cartoonimg from '../../assets/cartoon.jpg'
import shoetrackerimg from '../../assets/shoetracker.png'

export default function Projects() {
    return (
        <div className='Projects' id='projects'>
          <h3 className='project-title'>Projects</h3>
          <div className="projects-container">
            <Card
              link="https://github.com/hyoon98/Debt-Tracker"
              image={debttrackerimg}
            >
              Debt Tracker
            </Card>
            <Card
              link="https://github.com/alhparsa/CSSS-Hackathon"
              image={cartoonimg}
            >
              CSSS Hackathon
            </Card>
            <Card
              link="https://github.com/hyoon98/Shoe-Tracker"
              image={shoetrackerimg}
            >
              MEC Shoe Tracker
            </Card>
          </div>
        </div>
    )
}
