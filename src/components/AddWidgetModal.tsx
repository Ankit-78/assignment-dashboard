/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';
import { availableWidgets } from '../data/dashboardData';

interface AddWidgetModalProps {
  categoryId: string;
  categoryName: string;
  onClose: () => void;
}

const AddWidgetModal: React.FC<AddWidgetModalProps> = ({ categoryId, onClose }) => {
  const { addWidget } = useDashboard();
  const [selectedWidgets, setSelectedWidgets] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'CSPM' | 'CWPP' | 'Image' | 'Ticket'>('CSPM');

  const [customWidget, setCustomWidget] = useState({
    name: '',
    text: '',
    type: 'list',
  });

  const handleWidgetToggle = (widgetId: string) => {
    const newSelected = new Set(selectedWidgets);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    newSelected.has(widgetId) ? newSelected.delete(widgetId) : newSelected.add(widgetId);
    setSelectedWidgets(newSelected);
  };

  const handleConfirm = () => {
    selectedWidgets.forEach(widgetId => {
      const widget = availableWidgets.find(w => w.id === widgetId);
      if (widget) {
        addWidget(categoryId, {
          name: widget.name,
          text: widget.text,
          type: widget.type,
        });
      }
    });

    if (customWidget.name.trim()) {
      addWidget(categoryId, {
        name: customWidget.name,
        text: customWidget.text,
        type: customWidget.type as any,
      });
    }

    setCustomWidget({ name: '', text: '', type: 'list' });
    setSelectedWidgets(new Set());
    onClose();
  };

  const filteredWidgets = availableWidgets.filter(widget => widget.category === activeTab);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col">
        <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Add Widget</h2>
          <button onClick={onClose} className="hover:text-gray-200 transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <p className="text-gray-600 text-base mb-6">
            Personalize your dashboard by adding widgets below or creating a custom one.
          </p>

          <div className="flex space-x-6 mb-6 border-b">
            {['CSPM', 'CWPP', 'Image', 'Ticket'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`pb-2 font-medium transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-3 mb-8">
            {filteredWidgets.length > 0 ? (
              filteredWidgets.map(widget => (
                <label
                  key={widget.id}
                  className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition"
                >
                  <input
                    type="checkbox"
                    checked={selectedWidgets.has(widget.id)}
                    onChange={() => handleWidgetToggle(widget.id)}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{widget.name}</div>
                    <div className="text-sm text-gray-500 leading-snug">{widget.text}</div>
                  </div>
                </label>
              ))
            ) : (
              <div className="text-center text-gray-400 text-sm py-4">
                No widgets available in this category.
              </div>
            )}
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-700 text-lg mb-3">
              Create Custom Widget
            </h3>

            <input
              type="text"
              placeholder="Widget Name"
              value={customWidget.name}
              onChange={e => setCustomWidget({ ...customWidget, name: e.target.value })}
              className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Widget Text"
              value={customWidget.text}
              onChange={e => setCustomWidget({ ...customWidget, text: e.target.value })}
              className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />

            <select
              value={customWidget.type}
              onChange={e => setCustomWidget({ ...customWidget, type: e.target.value })}
              className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="list">List</option>
              <option value="chart">Chart</option>
              <option value="progress">Progress</option>
              <option value="metric">Metric</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-4 p-4 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-5 py-2 text-gray-600 hover:text-gray-800 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
