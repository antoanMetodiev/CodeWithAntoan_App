import React, { useState } from 'react';
import axios from 'axios';
import Editor from '@monaco-editor/react';

import style from "./CodeEditor.module.css"

const CodeEditor = () => {
    const [sourceCode, setSourceCode] = useState(``);
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);

        const payload = {
            source_code: sourceCode,
            language_id: 63,  // Идентификатор за JavaScript (Node.js)
        };

        try {
            const response = await axios.post(
                "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
                        "X-RapidAPI-Key": "3924182b79mshcc7dff28a6f8a65p1328cajsn1e2ffa871183",
                    },
                }
            );

            setOutput(response.data.stdout || response.data.stderr); // Показва stdout или stderr
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className={style['editor-wrapper-container']}>
                <Editor
                    height="42vh"
                    defaultLanguage="javascript"
                    value={sourceCode}
                    onChange={(value) => setSourceCode(value)}
                    theme="vs-dark"
                    options={{
                        automaticLayout: true,
                        tabSize: 4,
                        minimap: { enabled: false },
                        wordWrap: 'on',
                        autoClosingBrackets: 'always',
                        suggestOnTriggerCharacters: true,
                        quickSuggestions: { other: true, comments: false, strings: true },
                        parameterHints: { enabled: true },
                        formatOnType: true,
                        acceptSuggestionOnEnter: "on",
                        snippetSuggestions: "top",
                        folding: true,
                        showFoldingControls: 'always',
                        autoIndent: "full",
                        mouseWheelZoom: true,  // Добавяне на zoom с колелцето на мишката
                    }}
                />
            </div>
            <button className={style['run-code-button']} onClick={handleSubmit} disabled={loading}>
                {loading ? "Running..." : "Run Code"}
            </button>
            <h3>Output:</h3>
            <pre>{output}</pre>
        </div>
    );
};

export default CodeEditor;
