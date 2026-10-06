import StepReveal from './StepReveal';

export default function QuestionCard({ questionNumber, question }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          📌 Problema {questionNumber}
        </h3>

        <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-300 mb-6">
          <p className="text-gray-800 whitespace-pre-line font-mono text-sm">
            {question.statement}
          </p>
        </div>
      </div>

      <StepReveal
        steps={question.steps}
        fullSolution={question.fullSolution}
      />
    </div>
  );
}
