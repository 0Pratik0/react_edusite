import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quos obcaecati quo perferendis ducimus minus, ullam explicabo autem unde accusamus laudantium magnam, molestiae alias quibusdam qui nobis! Quos, voluptatem cum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi delectus deserunt eius dolorum a laborum asperiores repudiandae labore unde et, sint voluptatem sapiente corporis nobis quo sit accusantium, magni optio!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia porro ex, temporibus eum architecto facere, itaque, natus expedita excepturi molestiae similique. Atque, officiis sapiente nulla sequi quisquam iusto incidunt fugiat?</p>
        </div>
    </div>
  )
}

export default About