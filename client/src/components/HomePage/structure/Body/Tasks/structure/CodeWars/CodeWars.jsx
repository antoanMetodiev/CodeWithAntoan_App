import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import TaskDescription from './structure/TaskDescription';

import CodeEditor from '../CodeEditor/CodeEditor';

import style from "./CodeWars.module.css";

const Codewars = () => {
    const [specificTask, setSpecificTask] = useState({});
    const [openSpecificTask, setOpenSpecificTask] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    const taskIds = ["5a8d1c82373c2e099d0000ac"]; // Задай ID-тата на задачите за масиви

    useEffect(() => {
        // const fetchTasks = async () => {
        //     try {
        //         const requests = taskIds.map(id =>
        //             axios.get(`https://www.codewars.com/api/v1/code-challenges/${id}`)
        //         );
        //         const responses = await Promise.all(requests);

        //         responses.forEach(response => {
        //             console.log(response.data)
        //             // console.log(response.data.name);
        //             // console.log(response.data.description);
        //             console.log("-----------------------------------------");
        //             setDescriptionHandler(response.data.description);
        //         });

        //         setTasks(responses.map(response => response.data));
        //     } catch (err) {
        //         setError("An error occurred while fetching tasks.");
        //         console.error(err);
        //     }
        // };

        // fetchTasks();

        async function getTasksFromDatabase(params) {
            const response = await axios.get("http://localhost:3333/all-tasks");
            console.log(response.data.allTasks);
            setTasks(response.data.allTasks);
        };

        getTasksFromDatabase();
    }, []);

    // Functions:
    let openSpecificTaskHandler = (value) => { setOpenSpecificTask(value) };
    let setSpecificTaskHandler = (value) => { setSpecificTask(value) };


    return (
        <div>
            {/* <h2>CodeWithAntoan Tasks:</h2> */}

            {!openSpecificTask ? (
                <section className={style['all-tasks-container']}>
                    <div className={style['tasks-titles-info']}>
                        <h4>Name</h4>
                        <h4 className={style['title-info_category']}>Category</h4>
                        <h4>Total Attempts</h4>
                        <h4>Total Completed</h4>
                        <h4>Publish Date</h4>
                    </div>
                    {tasks.length > 0 && (
                        tasks.map(task => {
                            return (
                                <div
                                    onClick={() => {
                                        const specTask = tasks.filter(currentTask => currentTask._id === task._id)[0];

                                        setSpecificTaskHandler(specTask);
                                        openSpecificTaskHandler(true);
                                    }}
                                    datatype={task._id} className={style['task-container']}
                                >
                                    <h3 className={style['task-name']}>{task.name}</h3>
                                    <h4 className={style['task-category']}>{task.category}</h4>
                                    <h4 className={style['totalAttempts']}>{task.totalAttempts}</h4>
                                    <h4 className={style['totalCompleted']}>{task.totalCompleted}</h4>
                                    <h4 className={style['publish-date']}>{task.publish_date}</h4>
                                </div>
                            )
                        })
                    )}
                </section>
            ) : (
                <div
                    className={style['specific-task-container']}
                    key={specificTask._id}
                >
                    {/* <h3 className={style['task-title']}>{specificTask.name}</h3> */}
                    <span className={style['task-description-text']}>{"- " + specificTask.desc_BG}</span>
                    <section className={style['task-tests-container']}>
                        {specificTask.tests.map(test => {
                            return (
                                <p>
                                    {test}
                                </p>
                            )
                        })}
                    </section>
                    <CodeEditor />
                </div>
            )}




        </div>
    );
};

export default Codewars;
