import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDescription">I am a skilled and a passionate web designer with experience in crafting visually  appealing and user-friendly websites. I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Abode Photoshop and illustrator.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Modern UI/UX design for modern websites.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Depp understanding of modern web technologies.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>App design for the customers</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
