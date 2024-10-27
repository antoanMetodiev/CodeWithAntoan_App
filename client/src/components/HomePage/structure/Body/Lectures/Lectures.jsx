
import style from "./Lectures.module.css";

import javaThumbnail from "../../../../../resources/images/java-1.jfif";
import background from "../../../../../resources/images/background.webp";


const Lectures = ({
    specificLectures,
    setIsWatchLectureHandler,
    setCurrentWatchingLectureHandler,
}) => {



    return (

        <article className={style['lectures-container-wrapper']}>
            <span className={style['black-shadow']}></span>
            <img className={style["background-image"]} src={background} alt="background-image" />

            <div>
                {specificLectures.length > 0 && (
                    specificLectures.map((lecture) => {
                        return (
                            <div
                                key={lecture._id}
                                onClick={() => {

                                    setCurrentWatchingLectureHandler({
                                        URL: lecture.URL,
                                        lectureName: lecture.lectureName,
                                        description: lecture.description,
                                    });
                                    setIsWatchLectureHandler(true);

                                }}
                                data-value={lecture.URL}
                                className={style['lecture-container']}
                            >
                                <img className={style['thumbnail-image']} src={javaThumbnail} alt="thumbnail" />
                                <div>
                                    <h3>{lecture.lectureName}</h3>
                                    <h4>Ниво: Базово</h4>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>



        </article>



    );
}

export default Lectures;