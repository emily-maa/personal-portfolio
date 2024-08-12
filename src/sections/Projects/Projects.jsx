import styles from './ProjectsStyles.module.css';
import eatwithem from '../../assets/eat-with-em.png';
import mbewell from '../../assets/mbewell.png'
import crochet from '../../assets/crochet.png'
import expense from '../../assets/expense.png';
import ProjectCard from '../../common/ProjectCard';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import portfolio from '../../assets/portfolio.png'

function Projects() {
  const { theme, toggleTheme } = useTheme();
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={eatwithem}
          link="https://emily-maa.github.io/eat-with-em/"
          h3="Eat with Em"
          skills= {['HTML', 'CSS', 'Javascript', 'User Experience Design', 'Responsive Design']}
          p="A responsive recipes website catered towards college students with busy lifestyles. Contains a variety of easy and healthy recipes for breakfast, lunch, and dinner."
          github={"https://github.com/emily-maa/eat-with-em"}
          website={"https://emily-maa.github.io/eat-with-em/"}
        />
        
        <ProjectCard
          src={crochet}
          link="https://github.com/emily-maa/crochet-pattern-generator"
          h3="Crochet Pattern Generator"
          skills= {['Python', 'Image Processing', 'CLI', 'Visualization']}
          p="A user-friendly interface that converts an image into a crochet grid. Supports size adjustment and custom color selection."
          github={"https://github.com/emily-maa/crochet-pattern-generator"}
        />

        <ProjectCard
          src={expense}
          link="https://github.com/emily-maa/expense-tracker-frontend-graphql"
          h3="Expense Tracker"
          skills= {['React', 'CSS', 'Context API', 'Java', 'REST API', 'Springboot', 'GraphQL']}
          p="An app to track your expenses, income, and net balance with personalized access through a login system."
          github={"https://github.com/emily-maa/expense-tracker-frontend-graphql"}
        />
        <ProjectCard
          src={mbewell}
          link="https://github.com/hanapan0/M-BeWell23-24"
          h3="M-BeWell"
          skills= {['React Native', 'Javascript', 'Figma', 'Presentation', 'Teamwork']}
          p="A mental wellness app designed to track user-input and generate recommendations, with built in activities and games to improve mental well-being. Developed in a team through the club, Medlaunch at the University of Michigan and presented in annual showcase."
          github={"https://github.com/hanapan0/M-BeWell23-24"}
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/emily-maa/personal-portfolio"
          h3="Personal Portfolio"
          skills= {['React', 'Context API', 'Javascript', 'HTML','CSS', 'JSX', 'Node', 'Vite']}
          p="This portfolio page! Built with responsive design principles and a light-dark toggle mode."
          github={"https://github.com/hanapan0/M-BeWell23-24"}
        />
      </div>
    </section>
  );
}

export default Projects;