export default function SemesterSelector({ selectedSemester, onSelectSemester }) {
  const semesters = [
    { id: 'I', label: 'Semestre I', emoji: '🔵' },
    { id: 'II', label: 'Semestre II', emoji: '🟣' },
    { id: 'Verano', label: 'Verano', emoji: '☀️' },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Semestre</h2>

      <div className="flex gap-4 flex-wrap">
        {semesters.map(sem => (
          <button
            key={sem.id}
            onClick={() => onSelectSemester(sem.id)}
            className={`px-8 py-3 rounded-lg font-bold transition transform hover:scale-105 shadow ${
              selectedSemester === sem.id
                ? 'bg-secondary text-white shadow-lg'
                : 'bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white'
            }`}
          >
            {sem.emoji} {sem.label}
          </button>
        ))}
      </div>
    </div>
  );
}
