import React from 'react';

// Функция за форматиране на описанието
const formatDescription = (description) => {
    // Регулярни изрази за форматиране на описанието
    const regex = /~~~if-not:fortran\n```javascript\n([\s\S]*?)```/g; // За JavaScript примери
    const regexFortran = /~~~if:fortran\n```javascript\n([\s\S]*?)```/g; // За Fortran примери
    const formattedDescription = description
        .replace(/~~~if-not:fortran\n```javascript\n/g, '') // Премахва заглавието на блока
        .replace(/~~~\n/g, '') // Премахва крайните символи
        .replace(/```javascript\n/g, '<pre><code>') // Започва блок с код
        .replace(/```/g, '</code></pre>'); // Завършва блока с код
    
    // Заменяме примерите от регулярните изрази
    return formattedDescription
        .replace(regex, '<h4>Example JavaScript Input:</h4><pre><code>$1</code></pre>') // JavaScript примери
        .replace(regexFortran, '<h4>Example Fortran Input:</h4><pre><code>$1</code></pre>'); // Fortran примери
};

const TaskDescription = ({ description }) => {
    // Извикване на форматиращата функция
    const formattedDescription = formatDescription(description);

    return (
        <div dangerouslySetInnerHTML={{ __html: formattedDescription }} />
    );
};

export default TaskDescription;
