import style from "./Body.module.css";
import { useState } from "react";

import AI_Models from "./AI_Models/AI_Models";
import Lectures from "./Lectures/Lectures";
import WatchLectures from "./WatchLecture/WatchLecture";
import Tasks from "./Tasks/Tasks";

const Body = ({
    specificLectures,
    showTasks,
}) => {
    const [currentWatchingLecture, setCurrentWatchingLecture] = useState({});
    const [isWatchLecture, setIsWatchLecture] = useState(false);



    // This is for just a test (branch, pullRequest, merge) and will be deleted after one moment!!!
    const [forDelete, setForDelete] = useState({random: "randomName"});



    // Functions:
    const setIsWatchLectureHandler = (value) => { setIsWatchLecture(value) }
    const setCurrentWatchingLectureHandler = (currentLecture) => { setCurrentWatchingLecture(currentLecture) }

    return (
        <article className={style['site-body-container']}>

            {!isWatchLecture ? (
                <>
                    <AI_Models />

                    {!showTasks ? (
                        <Lectures
                            specificLectures={specificLectures}
                            setIsWatchLectureHandler={setIsWatchLectureHandler}
                            setCurrentWatchingLectureHandler={setCurrentWatchingLectureHandler}
                        />
                    ) : (
                        <Tasks />
                    )}
                </>
            ) : (
                <WatchLectures
                    currentWatchingLecture={currentWatchingLecture}
                    setIsWatchLectureHandler={setIsWatchLectureHandler}
                />
            )}
        </article>
    )
}

export default Body;