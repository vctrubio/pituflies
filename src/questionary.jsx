import { Slider, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useState } from 'react';
import { EmailSender } from './Email';
import './App.css';

function ThankYouMessage({ show }) {
    if (!show)
        return null

    return (
        <div className="thank-you-message">
            <p>Thank you for subscribing!</p>
        </div>
    )
}

const SliderComponent = ({ title, value, onChange }) => {
    return (
        <div className='slider-comp'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>{title}</p>
                <p>{value}</p>
            </div>
            <Slider value={value} onChange={onChange} aria-label="Default value" />
        </div>
    )
};

const TopicComponent = ({ questions }) => {
    const [questionValues, setQuestionValues] = useState(questions);

    const handleSliderChange = (title) => (event, newValue) => {
        setQuestionValues(prevValues => ({
            ...prevValues,
            [title]: newValue
        }))
    }

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
    const [isOpen, setIsOpen] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [email, setEmail] = useState('');
    const emailSender = new EmailSender();

    const initialQuestions = {
        'Hours a day do you open': 50,
        'Gas burners do you use': 75,
        'Seats do you have': 25
    };

    const setReset = () => {
        setEmail('');
        setIsOpen(false);
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 2000);
        emailSender.setParams()
    }

    const onSubmit = () => {
        const questionEntries = Object.entries(initialQuestions).map(([key, value]) => `${key}: ${value}`).join('\n')
        const templateParams = {
            param_email: email,
            param_data: questionEntries
        }

        emailSender.setParams(templateParams)
        emailSender.sendEmail()
        setReset();
    };

    return (
        <div className='question-me'>
            <ThankYouMessage show={showThankYou} />
            <div>
                Help Us Help You
            </div>
            <div>
                <TopicComponent questions={initialQuestions} />
            </div>
            <div>
                <Button variant='outlined' color='primary' onClick={() => setIsOpen(true)}>Sign Up</Button>
                <Dialog open={isOpen} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Early Bird Gets The Worm</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setIsOpen(false)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={onSubmit} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};
