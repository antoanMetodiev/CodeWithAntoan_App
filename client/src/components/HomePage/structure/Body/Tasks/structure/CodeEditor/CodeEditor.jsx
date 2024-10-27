import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Editor from '@monaco-editor/react';


const CodeEditor = () => {
    const [sourceCode, setSourceCode] = useState(``);
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);
    const [testCases, setTestCases] = useState([]);

    // useEffect(() => {
    //     // Извличане на тестови случаи от description-а
    //     const extractTestCases = () => {
    //         const regex = /str\s*=\s*"(.+?)",\s*a\s*=\s*(\d+),\s*b\s*=\s*(\d+)\s*-->\s*"(.+?)"/g;
    //         const cases = [];
    //         let match;
    //         while ((match = regex.exec(description)) !== null) {
    //             cases.push({
    //                 input: `str = "${match[1]}", a = ${match[2]}, b = ${match[3]}`,
    //                 stdin: `${match[1]} ${match[2]} ${match[3]}`,
    //                 expectedOutput: match[4],
    //             });
    //         }
    //         setTestCases(cases);
    //     };
    //     extractTestCases();
    // }, [description]);

    const handleSubmit = async () => {
        setLoading(true);
        const results = [];

        for (const testCase of testCases) {
            const payload = {
                source_code: sourceCode,
                language_id: 62,  // Java или друг език, който си избрал
                stdin: testCase.stdin,
            };

            try {
                const response = await axios.post(
                    "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
                    payload,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
                            "X-RapidAPI-Key": "3924182b79mshcc7dff28a6f8a65p1328cajsn1e2ffa871183",  // Замени с твоя ключ
                        },
                    }
                );

                const isCorrect = response.data.stdout.trim() === testCase.expectedOutput;
                results.push({
                    input: testCase.input,
                    isCorrect,
                    output: response.data.stdout,
                    expectedOutput: testCase.expectedOutput,
                });
            } catch (error) {
                results.push({
                    input: testCase.input,
                    isCorrect: false,
                    output: `Error: ${error.message}`,
                    expectedOutput: testCase.expectedOutput,
                });
            }
        }

        setOutput(results.map((result, index) =>
            `Test Case ${index + 1}: ${result.isCorrect ? "Passed" : "Failed"}
             Input: ${result.input}
             Output: ${result.output}
             Expected: ${result.expectedOutput}\n`
        ).join("\n"));
        setLoading(false);
    };

    return (
        <div>
            <Editor
                height="42vh"
                defaultLanguage="java"
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
                }}
            />
            <br />
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? "Running..." : "Run Code"}
            </button>
            <h3>Output:</h3>
            <pre>{output}</pre>
        </div>
    );
};

export default CodeEditor;
