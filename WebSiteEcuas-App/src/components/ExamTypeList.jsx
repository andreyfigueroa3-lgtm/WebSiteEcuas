import { useNavigate } from 'react-router-dom';

export default function ExamTypeList({ year, semester }) {
  const navigate = useNavigate();

  // Datos mock - luego vendrán de una API
  const examTypes = [
    { id: 1, name: 'Primer Parcial', variant: 'Ordinario', emoji: '📋' },
    { id: 2, name: 'Primer Parcial', variant: 'Extraordinario', emoji: '⭐' },
    { id: 3, name: 'Segundo Parcial', variant: 'Ordinario', emoji: '📋' },
    { id: 4, name: 'Segundo Parcial', variant: 'Extraordinario', emoji: '⭐' },
    { id: 5, name: 'Tercer Parcial', variant: 'Ordinario', emoji: '📋' },
    { id: 6, name: 'Tercer Parcial', variant: 'Extraordinario', emoji: '⭐' },
    { id: 7, name: 'Examen de Reposición', variant: '', emoji: '🔄' },
  ];

  const handlePractice = (examId) => {
    navigate(`/exam/${year}_${semester}_${examId}`);
  };

  // Mensaje especial para semestre actual
  const isCurrent = year === 2026 && semester === 'II';

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Exámenes - Semestre {semester} {year}
        </h2>
        {isCurrent && (
          <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
            📍 Semestre Actual
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examTypes.map(exam => (
          <div
            key={exam.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 border-l-4 border-primary cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  {exam.emoji} {exam.name}
                </h3>
                {exam.variant && (
                  <p className="text-sm text-gray-600 mt-1">{exam.variant}</p>
                )}
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-4">
              {exam.variant ? '📄 Examen ordinario/extraordinario' : '🔄 Examen de reposición'}
            </p>

            <button
              onClick={() => handlePractice(exam.id)}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded font-bold hover:from-secondary hover:to-primary transition"
            >
              Practicar →
            </button>
          </div>
        ))}
      </div>

      {/* Mensaje informativo */}
      <div className="mt-12 bg-blue-50 border-l-4 border-primary p-6 rounded">
        <h3 className="font-bold text-primary mb-2">💡 Cómo usar la plataforma:</h3>
        <ul className="text-gray-700 space-y-1 text-sm">
          <li>✅ Selecciona un examen para practicar</li>
          <li>✅ Lee el enunciado de cada pregunta</li>
          <li>✅ Haz clic en "Revelar siguiente paso" para ver la solución gradualmente</li>
          <li>✅ Aprende paso a paso sin ver todo de una vez</li>
          <li>✅ Descarga el enunciado o ve la solución completa cuando lo necesites</li>
        </ul>
      </div>
    </div>
  );
}
