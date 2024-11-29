import { useRef, useState } from "react";
import style from "./Gemini_API.module.css";
import sendImage from "../../../../../../resources/images/send.png";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';

const genAI = new GoogleGenerativeAI("AIzaSyAFpo3V97vz2cYXa6LrEZbmDwv8s2CPn_I");

const Gemini_API = () => {
    const [conversation, setConversation] = useState([]);
    const inputRef = useRef(null);

    async function run(event) {
        event.preventDefault();

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        let questionText = inputRef.current.value;
        inputRef.current.value = "";

        try {
            let responseText = await model.generateContent([questionText]);
            responseText = responseText.response.text();

            console.log(responseText);

            // Форматираме само кода
            const markdownResponse = formatCodeResponse(responseText);
            setConversation([...conversation, { questionText, responseText: markdownResponse }]);
        } catch (error) {
            console.error("Error generating content:", error);
            setConversation([...conversation, { questionText, responseText: "Грешка при генериране на съдържание." }]);
        }
    }


    // Функция за форматиране на отговора с Markdown:
    const formatCodeResponse = (response) => {
        return `
                \`\`\`java
                ${response}
                \`\`\`
                        `;
    };

    return (
        <div className={style['conversation-container-wrapper']}>
            <div className={style['conversations-text-container']}>
                {conversation.length > 0 && (
                    conversation.map((convers, index) => (
                        <section className={style['one-conversation']} key={index}>
                            <span className={style['my-question']}>{convers.questionText}</span>
                            <div className={style['ai-response']}>
                                <ReactMarkdown>{convers.responseText}</ReactMarkdown>
                            </div>
                        </section>
                    ))
                )}
            </div>

            <form className={style['question-form']} onSubmit={run}>
                <input ref={inputRef} className={style['question-input']} name="question_text" type="text" />
                <img onClick={run} className={style['send-image']} src={sendImage} alt="sendImage" />
                <button hidden>Изпрати..</button>
            </form>
        </div>
    );
}

export default Gemini_API;
