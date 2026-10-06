import { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import YearSelector from '../components/YearSelector';
import SemesterSelector from '../components/SemesterSelector';
import ExamTypeList from '../components/ExamTypeList';

export default function BrowseExams() {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedSemester, setSelectedSemester] = useState('II');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header breadcrumb={['Inicio', 'Exámenes']} />

      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Selecciona un Examen
            </h1>
            <p className="text-gray-600">
              Elige el año y semestre para ver los exámenes disponibles
            </p>
          </div>

          {/* Paso 1: Seleccionar año */}
          <YearSelector
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
          />

          {/* Paso 2: Seleccionar semestre */}
          <SemesterSelector
            selectedSemester={selectedSemester}
            onSelectSemester={setSelectedSemester}
          />

          {/* Paso 3: Mostrar lista de exámenes */}
          <ExamTypeList
            year={selectedYear}
            semester={selectedSemester}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
