
import Header from "./structure/Header/Header";
import Body from "./structure/Body/Body";
import { useState } from "react";


const HomePage = () => {
    const [showTasks, setShowTasks] = useState(false);
    const [specificLectures, setSpecificLectures] = useState([]);

    // Functions:
    let setSpecificLecturesHandler = (newSpecificLectures) => { setSpecificLectures(newSpecificLectures) }
    let setSetShowTasksHandler = (value) => { setShowTasks(value) }


    return (
        <article>
            <Header 
                setSpecificLecturesHandler={setSpecificLecturesHandler}
                setSetShowTasksHandler={setSetShowTasksHandler}
            />
            <Body 
                specificLectures={specificLectures}
                showTasks={showTasks}
             />
        </article>
    )
}

export default HomePage;