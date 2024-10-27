import style from "./Header.module.css";

import MeImage from "../../../../resources/images/me.webp";

import SearchEngine from "./structure/SearchEngine/SearchEngine";

const Header = ({
    setSpecificLecturesHandler,
    setSetShowTasksHandler,
}) => {


    return (
        <article className={style['header-container']}>

            <div className={style['logo-title-container']}>
                <img className={style['me-image']} src={MeImage} alt="MeImage" />
                <div>
                    <h2 className={style['site-title']}>CodeWithAntoan</h2>
                    <h5>Създай нещо велико!</h5>
                </div>
            </div>

            <SearchEngine setSpecificLecturesHandler={setSpecificLecturesHandler} />

            <h2
                className={style['lecures_Or_tasks-container']}        
                onClick={(event) => {
                    debugger;
                    if (event.target.textContent === 'Задачи') {
                        event.target.textContent = 'Лекции';
                        setSetShowTasksHandler(true);
                    } else if (event.target.textContent === 'Лекции') {
                        event.target.textContent = 'Задачи';
                        setSetShowTasksHandler(false);
                    }
                }}
            >Задачи</h2>
        </article>
    );
}

export default Header;