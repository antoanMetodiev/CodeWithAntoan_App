
import style from "./WatchLectures.module.css";

import backgroundImg from "../../../../../resources/images/study.webp";
import backTo from "../../../../../resources/images/back-to.png";

const WatchLectures = ({
    currentWatchingLecture,
    setIsWatchLectureHandler,
}) => {



    return (
        <article className={style['watch-lecture-container']}>

            <img onClick={() => {
                setIsWatchLectureHandler(false);
            }}
                className={style['back-button']}
                src={backTo}
                alt="back-button"
            />

            <span className={style['black-shadow']}></span>
            <img
                className={style['back-image']}
                src={backgroundImg}
                alt="backgroundImg"
            />

            <div>
                <div style={{
                    width: '800px', height: '445px', position: 'relative', top: "14em",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "1em",
                }}>
                    <iframe
                        className={style}
                        src={currentWatchingLecture.URL}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        style={{
                            position:
                                'absolute',
                            top: 0,
                            left: 0,
                            width: '800px',
                            height: '100%',
                            borderBottomLeftRadius: "1em",
                            borderBottomRightRadius: "1em",
                            // boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6)",
                        }}
                    ></iframe>
                </div>
            </div>

            <div className={style['content-container']}>
                <div>
                    <h2 className={style['theme-text']}>Тема: </h2>
                    <h2 className={style['lecture-name']}>{"- " + currentWatchingLecture.lectureName.substring(5)}</h2>
                    <h2 className={style['level']}>Технология:</h2>
                    <h2 className={style['technology-name']}>{"- " + currentWatchingLecture.lectureName.substring(0, 4)}</h2>
                </div>
                <div>
                    <h2 className={style["introduction"]}>Въведение:</h2>
                    <span className={style['desc-text']}>{"- " + currentWatchingLecture.description}</span>
                </div>
            </div>


        </article>
    );
}

export default WatchLectures;