import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/exams', label: 'Exámenes' },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary to-secondary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => {
              navigate('/');
              setIsOpen(false);
            }}
            className="cursor-pointer flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="text-2xl">📚</div>
            <div>
              <h1 className="text-xl font-bold text-white">WebSiteEcuas</h1>
              <p className="text-xs text-gray-100">EDO - TEC</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map(item => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  isActive(item.path)
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            {navItems.map(item => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition ${
                  isActive(item.path)
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
