export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sección 1: Profesor */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-3">Profesor</h3>
            <p className="font-semibold">MSc. Norberto Gerardo Oviedo Ugalde</p>
            <p className="text-sm text-gray-400">2026</p>
            <a
              href="mailto:noviedo@itcr.ac.cr"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              noviedo@itcr.ac.cr
            </a>
          </div>

          {/* Sección 2: Institución y Curso */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-3">Curso</h3>
            <p className="font-semibold">Instituto Tecnológico de Costa Rica</p>
            <p className="text-sm">Ecuaciones Diferenciales Ordinarias</p>
            <p className="text-sm text-gray-400">Año 2026</p>
          </div>

          {/* Sección 3: Información */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold text-white mb-3">Sobre este sitio</h3>
            <p className="text-sm">
              Plataforma interactiva de práctica para estudiantes de EDO
            </p>
            <p className="text-sm text-gray-400 mt-2">v1.0 - 2026</p>
          </div>
        </div>

        {/* Línea divisora */}
        <hr className="border-gray-700 mb-6" />

        {/* Derechos de autor */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400 mb-2">
            © 2026 Instituto Tecnológico de Costa Rica
          </p>
          <p className="text-xs text-gray-500">
            Reserva de Derechos. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            WebSiteEcuas es una plataforma educativa desarrollada para fines académicos.
          </p>
        </div>
      </div>
    </footer>
  );
}
