import React from 'react';
import SkillList from './SkillList';
import checkMarkIconLight from '../assets/checkmark-light.svg'
import checkMarkIconDark from '../assets/checkmark-dark.svg'
import { useTheme } from './ThemeContext';
import Skills from './Skills'
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import linkIconLight from '../assets/link-light.svg'
import linkIconDark from '../assets/link-dark.svg'
import styles from './ProjectCardStyles.module.css';


function ProjectCard({ src, link, h3, skills, p, github, website}) {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkIcon = theme === 'light' ? linkIconLight : linkIconDark;
  return (
    <a className={styles.card} href={link} target="_blank" rel="noopener noreferrer">
      <img className="hover" src={src} alt={`${h3} logo`}/>
      <h3>{h3}</h3>
      {github && <span>
          <a href={github} target="_blank">
            <img src={githubIcon} alt="Github icon" width="40px" />
          </a>
        </span>}
      {website && <span>
          <a href={website} target="_blank">
            <img src={linkIcon} alt="link icon" width="40px" />
          </a>
        </span>}
      {skills.length>0 && <Skills skills={skills} />}
      <p>{p}</p>
      <hr></hr>
    </a>
  );
}

export default ProjectCard;