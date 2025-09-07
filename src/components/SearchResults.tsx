import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import WidgetCard from './WidgetCard';

const SearchResults: React.FC = () => {
  const { searchQuery, filteredWidgets, dashboardData } = useDashboard();

  if (!searchQuery || filteredWidgets.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No widgets found matching "{searchQuery}"</p>
      </div>
    );
  }

  const getWidgetCategory = (widgetId: string) => {
    for (const category of dashboardData.categories) {
      if (category.widgets.some(w => w.id === widgetId)) {
        return category;
      }
    }
    return null;
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Search Results for "{searchQuery}"
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredWidgets.map((widget) => {
          const category = getWidgetCategory(widget.id);
          return category ? (
            <WidgetCard
              key={widget.id}
              widget={widget}
              categoryId={category.id}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default SearchResults;