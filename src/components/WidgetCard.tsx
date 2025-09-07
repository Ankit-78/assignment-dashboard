import React from 'react';
import { X } from 'lucide-react';
import type { Widget } from '../types/dashboard';
import { useDashboard } from '../context/DashboardContext';

interface WidgetCardProps {
  widget: Widget;
  categoryId: string;
}

const WidgetCard: React.FC<WidgetCardProps> = ({ widget, categoryId }) => {
  const { removeWidget } = useDashboard();

  const renderWidgetContent = () => {
    switch (widget.type) {
      case 'chart':
        if (widget.name === 'Cloud Accounts') {
          return (
            <div className="flex items-center justify-center h-32">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray="50, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">2</div>
                    <div className="text-xs text-gray-500">Total</div>
                  </div>
                </div>
              </div>
              <div className="ml-4 space-y-1">
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Connected (2)</span>
                </div>
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                  <span>Not Connected (2)</span>
                </div>
              </div>
            </div>
          );
        } else if (widget.name === 'Cloud Account Risk Assessment') {
          return (
            <div className="flex items-center justify-center h-32">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3"
                    strokeDasharray="17, 100"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="3"
                    strokeDasharray="7, 100"
                    strokeDashoffset="-17"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeDasharray="76, 100"
                    strokeDashoffset="-24"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">9659</div>
                    <div className="text-xs text-gray-500">Total</div>
                  </div>
                </div>
              </div>
              <div className="ml-4 space-y-1">
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span>Failed (1689)</span>
                </div>
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>Warning (681)</span>
                </div>
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  <span>Not available (36)</span>
                </div>
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Passed (7253)</span>
                </div>
              </div>
            </div>
          );
        }
        break;
      case 'progress':
        if (widget.name === 'Image Risk Assessment') {
          return (
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">1470</div>
                <div className="text-xs text-gray-500">Total Vulnerabilities</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Critical (2)</span>
                  <span>High (150)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          );
        } else if (widget.name === 'Image Security Issues') {
          return (
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">2</div>
                <div className="text-xs text-gray-500">Total Images</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Critical (2)</span>
                  <span>High (2)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          );
        }
        break;
      case 'list':
        return (
          <div className="flex items-center justify-center h-32">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
              <p className="text-sm">{widget.text}</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center h-32 bg-gray-50 rounded">
            <span className="text-gray-500 text-sm">Widget Content</span>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 relative group hover:shadow-md transition-shadow">
      <button
        onClick={() => removeWidget(categoryId, widget.id)}
        className="absolute top-2 right-2 p-1 rounded-full bg-red-100 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-200"
        title="Remove widget"
      >
        <X className="w-4 h-4" />
      </button>
      
      <h3 className="font-medium text-gray-900 mb-4 pr-8">{widget.name}</h3>
      
      {renderWidgetContent()}
    </div>
  );
};

export default WidgetCard;