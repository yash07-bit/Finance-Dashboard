import { useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import { Upload } from 'lucide-react';
import { useAppData } from '../context/useAppData';

export default function ExcelUpload({ variant = 'button' }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  const { uploadExcelData, canEdit } = useAppData();

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls') && !file.name.endsWith('.csv')) {
      setError('Please upload an Excel file (.xlsx, .xls) or CSV file');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setLoading(true);
    setError('');

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        
        const parsedData = {};

        // Parse all sheets
        workbook.SheetNames.forEach((sheetName) => {
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          const key = sheetName.toLowerCase();
          if (jsonData.length > 0) {
            parsedData[key] = jsonData;
          }
        });

        // Update context with all data
        uploadExcelData(parsedData);

        setError('');
        setLoading(false);
      } catch (err) {
        setError(`Error reading file: ${err.message}`);
        setLoading(false);
      }
    };

    reader.onerror = () => {
      setError('Error reading file');
      setLoading(false);
    };

    reader.readAsBinaryString(file);
    
    // Reset input
    event.target.value = '';
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  if (variant === 'sidebar') {
    return (
      <>
        <button
          onClick={handleClick}
          disabled={loading || !canEdit}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 font-medium text-sm bg-primary-accent/20 text-white border border-primary-accent/40 shadow-sm hover:bg-primary-accent/30 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Upload className="w-4 h-4" />
          <span className="truncate">{!canEdit ? 'Viewer mode' : loading ? 'Uploading...' : 'Import Excel'}</span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileUpload}
          className="hidden"
          aria-label="Upload Excel file"
        />
        {!canEdit ? (
          <div className="text-xs text-slate-300 mt-2 px-3 py-2 bg-slate-500/10 rounded-lg">
            Uploading is disabled in viewer mode.
          </div>
        ) : null}
        {error && canEdit && (
          <div className="text-xs text-red-400 mt-2 px-3 py-2 bg-red-500/10 rounded-lg">
            {error}
          </div>
        )}
      </>
    );
  }

  // Default card variant
  return (
    <div className="bg-surface-container-low rounded-2xl p-6 md:p-7">
      <div className="mb-6">
        <h4 className="text-lg font-headline font-bold text-primary">Import Data from Excel</h4>
        <p className="text-on-surface-variant text-sm mt-1">Upload an Excel or CSV file to import data</p>
      </div>

      <div className="space-y-4">
        <button
          onClick={handleClick}
          disabled={loading || !canEdit}
          className="w-full flex flex-col items-center justify-center px-4 py-8 border-2 border-dashed border-primary rounded-xl cursor-pointer hover:bg-surface-container-highest transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Upload className="w-8 h-8 text-primary mb-2" />
          <span className="text-sm font-semibold text-primary">{canEdit ? 'Click to upload' : 'Viewer mode'}</span>
          <span className="text-xs text-on-surface-variant mt-1">{canEdit ? 'or drag and drop' : 'Read-only access enabled'}</span>
          <span className="text-xs text-on-surface-variant mt-2">Excel (.xlsx, .xls) or CSV files</span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileUpload}
          className="hidden"
          aria-label="Upload file"
        />

        {!canEdit ? null : error && (
          <div className="bg-error/10 border border-error rounded-lg p-3">
            <p className="text-sm text-error">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
