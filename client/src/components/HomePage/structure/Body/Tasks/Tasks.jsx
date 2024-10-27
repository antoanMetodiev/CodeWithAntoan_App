import { useState } from "react";
import style from "./Tasks.module.css";

import CodeEditor from "./structure/CodeEditor/CodeEditor";
import CodeWars from "./structure/CodeWars/CodeWars";

const Tasks = () => {
    // const [description, setDescription] = useState("");

    // Functions:
    // let setDescriptionHandler = (deskText) => { setDescription(deskText) };

    return (
        <article className={style['tasks-container']}>

            {/* <CodeEditor /> */}
            <CodeWars />


        </article>
    );
}

export default Tasks;