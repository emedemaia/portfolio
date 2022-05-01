import React from 'react'
import css from '../images/css.png'
import html5 from '../images/html5.png'
import js from '../images/js.png'
import nodejs from '../images/nodejs.png'
import reactjs from '../images/reactjs.png'
import mongodb from '../images/mongodb.png'
import mysql from '../images/mysql.png'


export const Skills = () => {
    return (
        <div className='container col-lg-8 d-flex align-items-center justify-content-evenly'>
            <img srcSet={`${css}  320w`}
            sizes='(max-width: 768px) 50px,
                    80px' src={css} alt="css logo"/>

            <img  srcSet={`${html5}  320w`}
            sizes='(max-width: 768px) 50px,
                    80px' src={html5}  alt="html5 logo"/>

            <img  srcSet={`${js}  320w`}
            sizes='(max-width: 768px) 50px,
                    80px' src={js} alt="js logo"/>

            <img  srcSet={`${nodejs}  320w`}
            sizes='(max-width: 768px) 50px,
                    80px' src={nodejs} alt="nodejs logo"/>

            <img  srcSet={`${reactjs}  320w`}
            sizes='(max-width: 768px) 50px,
                    80px' src={reactjs} alt="reactjs logo"/>

            <img  srcSet={`${mongodb}  320w`}
            sizes='(max-width: 768px) 50px,
                    80px' src={mongodb} alt="mongodb logo"/>

            <img  srcSet={`${mysql}  320w`}
            sizes='(max-width: 768px) 50px,
                    80px' src={mysql} alt="mysql logo"/>
        </div>
    )
}
