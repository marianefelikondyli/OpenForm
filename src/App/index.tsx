import { useMemo, useState } from 'react';
import Header from './Header';
import Form from './Form';
import QuestionList from './QuestionList';
import questions from './QuestionList/questions.json';
import ThankYouPage from './ThankYouPage';
import type { AnswerPayload } from './QuestionList/QuestionItem';
import axios from 'axios';

const App = () => {
  const [surveyData, setSurveyData] = useState<{
    user: null | Record<string, string>;
    questions: { id: number; answer: string; time: string }[];
  }>({
    user: null,
    questions: questions.map((question) => ({ id: question.id, answer: '', time: '' })),
  });

  const currentQuestionIndex = useMemo(() => {
    return surveyData.questions.findIndex((q) => q.answer === '');
  }, [surveyData.questions]);

  const onQuestionAnswer = (data: AnswerPayload) => {
  const { id, time, answer } = data;
  setSurveyData((prev) => ({
    ...prev,
    questions: prev.questions.map((q) => (q.id === id ? { ...q, answer, time } : q)),
  }));
};

  const sendData = async () => {
  console.log(surveyData);
  try {
    await axios.post('https://form/results', surveyData);
    console.log('Data sent successfully');
  } catch (error) {
    console.error('Error sending data:', error);
  }
};

  if (currentQuestionIndex === -1) {
    sendData();
    return (
      <>
        <ThankYouPage />;
      </>
    );
  }

  return (
    <>
      <Header
        title={'Interpretable Decision Trees'}
        showCancelButton={surveyData.user != null}
        handleCancel={() =>
          setSurveyData({
            user: null,
            questions: questions.map((question) => ({ id: question.id, answer: '', time: '' })),
          })
        }
      />

      {!surveyData.user ? (
        <Form onSubmit={(data) => setSurveyData((p) => ({ ...p, user: data }))} />
      ) : (
        <QuestionList questionIndex={currentQuestionIndex} onQuestionAnswer={onQuestionAnswer} />
      )}
    </>
  );
};

export default App;
