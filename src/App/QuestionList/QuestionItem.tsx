import sc from 'styled-components';
import React, { FC, useState, useEffect } from 'react';
import { SubmitBtn } from '@/components/form';

const StyledQuestionItem = sc.div`
  padding: 16px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .question {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 8px;
  }

  .textarea {
    width: 100%;
    padding: 8px;
    margin-top: 8px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .options {
    margin-top: 8px;
    list-style-type: none;
    padding: 0;
  }

  .option {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 4px;
    cursor: pointer;
  }
  
  .option.selected {
    background-color: ${(props) => props.theme.colors.primaryLight};
    border-color: #a0c4ff;
  }

  .description {
    margin-top: 8px;
    font-size: 1em;
  }

  .photo {
    margin-top: 8px;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;

export interface AnswerPayload {
  id: number;
  answer: string;
  time: string;
}

interface BaseQuestionProps {
  id: number;
  question: string;
  description?: string; // Optional description field
  handleAnswer: (_payload: AnswerPayload) => void;
}

interface TextQuestionProps extends BaseQuestionProps {
  type: 'text';
}

interface MultipleChoiceQuestionProps extends BaseQuestionProps {
  type: 'multiple-choice';
  options: string[];
}

interface DescriptionQuestionProps extends BaseQuestionProps {
  type: 'description';
  photoUrl?: string;
}

type QuestionItemProps = TextQuestionProps | MultipleChoiceQuestionProps | DescriptionQuestionProps;

const QuestionItem: FC<QuestionItemProps> = (props) => {
  const [answer, setAnswer] = useState<string>('');
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    // Set start time when the component mounts
    setStartTime(Date.now());
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement> | React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    if (props.type === 'text') {
      setAnswer((event.target as HTMLTextAreaElement).value);
    } else if (props.type === 'multiple-choice') {
      setAnswer((event.target as HTMLLIElement).textContent || '');
    }
  };

  const handleSubmit = () => {
    const currentTime = Date.now();
    const timeTaken = ((currentTime - startTime) / 1000).toFixed(2);

    // For description type, we might not have an 'answer', so ensure it's handled appropriately
    const answerPayload: AnswerPayload = {
      id: props.id,
      answer: props.type === 'description' ? 'Description viewed' : answer,
      time: timeTaken,
    };

    props.handleAnswer(answerPayload);
  };

  return (
    <StyledQuestionItem>
      <div className="question">{props.question}</div>
      {props.description && (
        <div className="description" dangerouslySetInnerHTML={{ __html: props.description }} />
      )}
      {props.type === 'text' ? (
        <textarea className="textarea" rows={4} value={answer} onChange={handleChange} />
      ) : props.type === 'multiple-choice' ? (
        <ul className="options">
          {props.options.map((option, index) => (
            <li
              key={index}
              className={`option ${answer === option ? 'selected' : ''}`}
              onClick={handleChange}
            >
              {option}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          {props.photoUrl && <img src={props.photoUrl} alt="description" className="photo" />}
        </div>
      )}
      <SubmitBtn type="button" onClick={handleSubmit}>
        {props.type === 'description' ? 'Next' : 'Submit Answer'}
      </SubmitBtn>
    </StyledQuestionItem>
  );
};

export default QuestionItem;
