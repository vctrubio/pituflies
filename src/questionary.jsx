import { Slider, Button } from '@mui/material';
import { useState } from 'react';
import { EmailSender } from './Email';
import './App.css';


const SliderComponent = ({ title, value, onChange }) => {
    return (
        <div className='slider-comp'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>{title}</p>
                <p>{value}</p>
            </div>
            <Slider value={value} onChange={onChange} aria-label="Default value" />
        </div>
    );
};

const TopicComponent = ({ questions }) => {
    const [questionValues, setQuestionValues] = useState(questions);

    const handleSliderChange = (title) => (event, newValue) => {
        setQuestionValues(prevValues => ({
            ...prevValues,
            [title]: newValue
        }));
    };

    return (
        <div>
            <h2>Topic</h2>
            {Object.entries(questionValues).map(([title, value], index) => (
                <SliderComponent
                    key={index}
                    title={title}
                    value={value}
                    onChange={handleSliderChange(title)}
                />
            ))}
        </div>
    );
};

export const Questionary = () => {
    const emailSender = new EmailSender();

    const topicQuestion = "How many questions do you need";
    const initialQuestions = {
        'Hours a day do you open': 50,
        'Gas burners do you use': 75,
        'Seats do you have': 25
    };

    const onSubmit = () => {
        const templateParams = {
            to_email: 'vctrubio@gmail.com', // Recipient's email address
            message_html: 'Hello, this is a test2 email!', // Email content
        };
        emailSender.setParams(templateParams);
        emailSender.sendEmail();
    };

    return (
        <div className='question-me'>
            <div>
                Help Us Help You
            </div>
            <div>
                <TopicComponent questions={initialQuestions} />
            </div>
            <div>
                <Button variant='outlined' color='primary' onClick={onSubmit}>Submit</Button>
            </div>
        </div>
    );
};
