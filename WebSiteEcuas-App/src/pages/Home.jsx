import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
        <div className="text-center text-white px-6 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            WebSiteEcuas
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-gray-100">
            Practica Ecuaciones Diferenciales Ordinarias
          </p>

          <p className="text-lg mb-12 text-gray-200">
            Instituto Tecnológico de Costa Rica · Semestre II 2026
          </p>

          <button
            onClick={() => navigate('/exams')}
            className="bg-white text-primary px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 hover:scale-105 transition transform shadow-lg"
          >
            📝 Comenzar a Practicar →
          </button>

          <p className="text-sm text-gray-300 mt-8 max-w-2xl mx-auto">
            Accede a exámenes de semestres anteriores con soluciones paso a paso.
            Practica gradualmente y aprende a tu ritmo.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
