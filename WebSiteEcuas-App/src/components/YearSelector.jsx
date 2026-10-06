export default function YearSelector({ selectedYear, onSelectYear }) {
  const years = [2023, 2024, 2025, 2026];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">📅 Año</h2>

      <div className="flex gap-4 flex-wrap">
        {years.map(year => (
          <button
            key={year}
            onClick={() => onSelectYear(year)}
            className={`px-8 py-3 rounded-lg font-bold transition transform hover:scale-105 shadow ${
              selectedYear === year
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}
