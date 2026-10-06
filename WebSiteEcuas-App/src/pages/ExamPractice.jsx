import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuestionCard from '../components/QuestionCard';
import { examQuestions } from '../data/examQuestions';

export default function ExamPractice() {
  const { examId } = useParams();
  const navigate = useNavigate();
  const exam = examQuestions[examId];

  if (!exam) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              ❌ Examen no encontrado
            </h1>
            <p className="text-gray-600 mb-6">
              Lo sentimos, no pudimos encontrar ese examen.
            </p>
            <button
              onClick={() => navigate('/exams')}
              className="bg-primary text-white px-6 py-3 rounded font-bold hover:bg-primary/90 transition"
            >
              ← Volver a Exámenes
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header breadcrumb={['Inicio', 'Exámenes', exam.title]} />

      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto p-6">
          {/* Título y meta del examen */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {exam.title}
                </h1>
                <p className="text-gray-600">
                  Año {exam.year} · Semestre {exam.semester}
                </p>
              </div>
              <div className="text-4xl">📝</div>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-4 rounded mb-4">
              <p className="text-sm text-gray-700">
                ℹ️ Haz clic en "Revelar Siguiente Paso" para ver la solución de forma gradual.
                Esto te ayudará a aprender el proceso paso a paso. También puedes ver la solución completa en cualquier momento.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => navigate('/exams')}
                className="px-4 py-2 rounded font-semibold transition bg-gray-300 text-gray-800 hover:bg-gray-400"
              >
                ← Volver a Exámenes
              </button>
              <button
                className="px-4 py-2 rounded font-semibold transition bg-secondary text-white hover:bg-secondary/90"
              >
                📥 Descargar Enunciado
              </button>
              <button
                className="px-4 py-2 rounded font-semibold transition bg-green-600 text-white hover:bg-green-700"
              >
                🖨️ Imprimir
              </button>
            </div>
          </div>

          {/* Preguntas */}
          <div className="space-y-8">
            {exam.questions.map((question, index) => (
              <QuestionCard
                key={question.id}
                questionNumber={index + 1}
                question={question}
              />
            ))}
          </div>

          {/* Botón para volver al final */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => navigate('/exams')}
              className="px-8 py-3 rounded font-bold transition bg-primary text-white hover:bg-primary/90"
            >
              ← Volver a Exámenes
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
