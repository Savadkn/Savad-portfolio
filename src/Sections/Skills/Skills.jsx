import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/images/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/images/checkmark-light.svg'
import SkillList from '../../Common/SkillList'
import { useTheme } from '../../Common/Themecontext'

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
     <SkillList src={checkMarkIcon} skill='HTML'/>
     <SkillList src={checkMarkIcon} skill='CSS'/>
     <SkillList src={checkMarkIcon} skill='Javascript'/>
     <SkillList src={checkMarkIcon} skill='Typescript'/>
     <SkillList src={checkMarkIcon} skill='Node'/>
      </div>
      <hr />
      <div className={styles.skillList}>
     <SkillList src={checkMarkIcon} skill='React'/>
     <SkillList src={checkMarkIcon} skill='Angular'/>
     <SkillList src={checkMarkIcon} skill='Vue'/>
     <SkillList src={checkMarkIcon} skill='Tailwind CSS'/>
     
      </div>
      <hr />
      <div className={styles.skillList}>
     <SkillList src={checkMarkIcon} skill='redux'/>
     <SkillList src={checkMarkIcon} skill='Webpack'/>
     <SkillList src={checkMarkIcon} skill='Git'/>
     <SkillList src={checkMarkIcon} skill='Drf'/>
     <SkillList src={checkMarkIcon} skill='Bootstrap'/>

     
      </div>
    </section>
  )
}

export default Skills