

import styles from './HeroStyle.module.css';
import heroImg from '../../assets/images/savad.png'
import sun from'../../assets/images/sun.svg'
import moon from'../../assets/images/moon.svg'
import twitterLight from '../../assets/images/twitter-light.svg'
import twitterDark from '../../assets/images/twitter-dark.svg'
import githubLight from '../../assets/images/github-light.svg'
import githubDark from '../../assets/images/github-dark.svg'
import linkidenlight from '../../assets/images/linkedin-light.svg'
import linkedindark from '../../assets/images/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../Common/Themecontext';

function Hero() {

    const {theme, toggleTheme} = useTheme();

    const themeIcon =theme === 'light' ? sun : moon;
    const twitterIcon =theme === 'light' ? twitterLight : twitterDark;
    const githubicon =theme === 'light' ? githubLight : githubDark;
    const linkedinicon =theme === 'light' ? linkidenlight : linkedindark;
  return (
    <section id='hero' className={styles.container}>
        
      <div className={styles.colorModeContainer}>
        <img style={{resizeMode: 'cover',
            height: 250,
            width: 250,
            borderRadius:150,
            
        }}
        className={styles.hero} src={heroImg} alt="Profile picture of savad"  />
        <img className={styles.colorMode}
         src={themeIcon} alt="Color mode icon"
         onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1>Savad
                <br />
                Kn
            </h1>
            <h2>
                Frontend Developer
            </h2>
            <span>
                <a href="http://twitter.com/" target='_blank'>
                <img src={twitterIcon} alt="twittericon" />
                </a>
                <a href="http://github.com/" target='_blank'>
                <img src={githubicon} alt="github icon" />
                </a>
                <a href="http://linkedin.com/" target='_blank'>
                <img src={linkedinicon} alt="linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>
        
                With a passion for developing 
                modern react web apps for commercal 
                business.
            </p>
            <a href={CV} download>
                <button className='hover' >Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero