import React from "react";
import style from './HelpCard.module.css'


export const HelpCard =({title,bg,img,time})=>{
    return(
        <div style={{background:bg}} className={style.helpcard}>
            <br />
            <h3 className={style.tex} >{title}</h3>
            <img src={img} className={style.photo}/>
            <h3 className={style.tex}>{time}</h3>
            <div className={style.mom}></div>
        </div>
    )
}
