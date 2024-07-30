import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../assets/checkmark-dark.svg';
import checkMarkIconLight from '../assets/checkmark-light.svg';
import SkillList from './SkillList';
import { useTheme } from './ThemeContext';

function Skills({skills}) {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  console.log(skills)

  return (
    <section id="skills" className={styles.container}>
      <div className={styles.skillList}>
        {skills.map((skill) => (
          <SkillList src={checkMarkIcon} skill={skill} />
        ))}
      </div>
      
    </section>
  );
}

export default Skills;