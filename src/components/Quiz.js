import React from 'react';
import quizPageStyle from '../QuizPageStyle';

import my_state from './my_state';
import my_questions from '../model/basic_questions.json';
import scoreController from '../controllers/scoreController';


class Quiz extends React.Component {

    state = {
        count: 0
    };

    handleAnswer = (isCorrect) => {
        scoreController.recordAnswer(Boolean(isCorrect));
        this.setState({ count: this.state.count + 1 });
        if (isCorrect) {
            alert('You are correct!');
        } else {
            alert('Sorry - not correct');
        }
    };

    handleSubmit = () => {
        const s = scoreController.getScore();
        my_state.my_score = s.score;
        my_state.my_count = s.count;
        alert('Total score: ' + s.score + '/' + s.count);
        if (this.props.onFinish) this.props.onFinish();
    }
    
    render() {
        return(
           <div style={quizPageStyle}>
            <h1>My Questions</h1>
                {my_questions.map((quest) => (
                <div key={quest.id}> 
                    <h2>{quest.question}</h2>
                        {quest.answers.map((ans, idx) => (
                            <div key={idx}>
                                <label>
                                <input  
                                        type = "radio"
                                        name = { quest.id }
                                        onClick = { () => this.handleAnswer(ans.isCorrect) }
                                        value = { ans.isCorrect } /> 
                                    { ans.answer }
                                </label> 
                                <br />
                            </div>
                        ))}
                    
                </div>
                ))}
                 <br />
                <button onClick={this.handleSubmit} >Done</button>
        </div>
        );
    }
}

export default Quiz;