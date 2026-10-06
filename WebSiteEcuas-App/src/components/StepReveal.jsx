import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StepReveal({ steps, fullSolution }) {
  const [revealedSteps, setRevealedSteps] = useState(0);
  const [showFullSolution, setShowFullSolution] = useState(false);

  const handleRevealNext = () => {
    if (revealedSteps < steps.length) {
      setRevealedSteps(revealedSteps + 1);
    }
  };

  const handleRevealAll = () => {
    setRevealedSteps(steps.length);
  };

  const toggleFullSolution = () => {
    setShowFullSolution(!showFullSolution);
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={handleRevealNext}
          disabled={revealedSteps >= steps.length}
          className={`px-4 py-2 rounded font-semibold transition ${
            revealedSteps >= steps.length
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          Revelar Siguiente Paso
        </button>

        <button
          onClick={handleRevealAll}
          disabled={revealedSteps >= steps.length}
          className={`px-4 py-2 rounded font-semibold transition ${
            revealedSteps >= steps.length
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-secondary text-white hover:bg-secondary/90'
          }`}
        >
          Revelar Todo
        </button>

        <button
          onClick={toggleFullSolution}
          className="px-4 py-2 rounded font-semibold transition bg-green-600 text-white hover:bg-green-700"
        >
          {showFullSolution ? 'Ocultar' : 'Ver'} Solución Completa
        </button>
      </div>

      {/* Solución Completa */}
      <AnimatePresence>
        {showFullSolution && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-green-50 border-l-4 border-green-500 p-4 rounded"
          >
            <h4 className="font-bold text-green-900 mb-2">📋 Solución Completa:</h4>
            <p className="text-gray-700 whitespace-pre-line text-sm">{fullSolution}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pasos Revelados */}
      <div className="space-y-3">
        <AnimatePresence>
          {steps.slice(0, revealedSteps).map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-50 border-l-4 border-primary p-4 rounded"
            >
              <p className="text-sm font-semibold text-primary mb-1">Paso {index + 1}:</p>
              <p className="text-gray-700 text-sm">{step}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {revealedSteps === 0 && (
        <div className="text-center text-gray-500 text-sm italic py-4">
          Haz clic en "Revelar Siguiente Paso" para ver la solución paso a paso
        </div>
      )}

      {revealedSteps > 0 && revealedSteps < steps.length && (
        <div className="text-right text-gray-500 text-xs">
          {revealedSteps} de {steps.length} pasos revelados
        </div>
      )}
    </div>
  );
}
