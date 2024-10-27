import style from "./AI_Models.module.css";
import backgroundImg from "../../../../../resources/images/gadjets.webp";

import Gemini_API from "./Gemini_API/Gemini_API";

const AI_Models = () => {


    return (
        <aside className={style['AI-Models-container']}>
            <span className={style['black-shadow']}></span>
            <img className={style['back-image']} src={backgroundImg} alt="backgroundImg" />

            <Gemini_API />
        </aside>
    )
}

export default AI_Models;