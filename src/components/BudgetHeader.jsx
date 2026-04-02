import { useEffect, useState } from 'react';

export default function BudgetHeader({ initialLimits = {}, onAllocationsUpdated }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(initialLimits);

  useEffect(() => {
    setFormData(initialLimits);
  }, [initialLimits]);

  const handleOpenModal = () => {
    setFormData(initialLimits);
    setShowModal(true);
  };

  const handleSaveAllocations = () => {
    setShowModal(false);
    if (onAllocationsUpdated) {
      onAllocationsUpdated(formData);
    }
  };

  const handleInputChange = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: Math.max(0, parseFloat(value) || 0),
    }));
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight text-primary">
            Monthly Budgets
          </h2>
          <p className="text-text-muted mt-2 text-sm font-medium">
            Fiscal year 2024 • Admin overview
          </p>
        </div>
        <button
          onClick={handleOpenModal}
          className="bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-primary/20 hover:opacity-95 transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <span className="material-symbols-outlined text-lg" data-icon="tune">
            tune
          </span>
          Adjust Allocations
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-y-0 left-64 right-0 z-[70] flex items-center justify-center bg-slate-900/45 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-8">
              <h2 className="text-2xl font-bold font-headline mb-6 text-primary">
                Adjust Budget Allocations
              </h2>

              <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
                {Object.entries(formData).map(([category, value]) => (
                  <div key={category} className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-on-surface capitalize">
                      {category}
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-text-muted">$</span>
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange(category, e.target.value)}
                        className="flex-1 px-3 py-2 border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="0"
                        min="0"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold border border-outline-variant text-on-surface hover:bg-surface-container transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveAllocations}
                  className="flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold bg-primary text-white shadow-md shadow-primary/20 hover:opacity-95 transition-all"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
