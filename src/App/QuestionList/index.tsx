import Tooltip from '@/components/ui/ToolTip';
import QuestionItem from './QuestionItem';
import questions from './questions.json';
import type { AnswerPayload } from './QuestionItem';
import ImageViewer from '@/App/QuestionList/ImageViewer';

interface QuestionListProps {
  questionIndex: number;
  onQuestionAnswer: (_data: AnswerPayload) => void;
}

const QuestionList = ({ questionIndex, onQuestionAnswer }: QuestionListProps) => {
  const question = questions[questionIndex];

  return (
    <>
      <Tooltip value={`${questionIndex + 1}/${questions.length}`} label={'questions'} />
      {question.image_src && question.type !== 'description' && (
        <ImageViewer src={question.image_src} key={question.id + 'image'} />
      )}
      <QuestionItem
        key={question.id}
        id={question.id}
        type={question.type as 'text' | 'multiple-choice' | 'description'}
        options={question.options ?? []}
        question={question.question}
        description={question.description ?? ''} // Provide a fallback value
        handleAnswer={onQuestionAnswer}
      />
    </>
  );
};

export default QuestionList;

