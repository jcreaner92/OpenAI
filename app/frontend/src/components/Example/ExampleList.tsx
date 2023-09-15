import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Create me a study plan how to learn C#?",
        value: "Create me a study plan how to learn C#?"
    },
    { text: "I want to learn about Bicep?", value: "I want to learn about Bicep?" },
    { text: "I am a beginner, where should I start learning about .NET?", value: "I am a beginner, where should I start learning about .NET?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
