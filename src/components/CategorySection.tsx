import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import WidgetCard from './WidgetCard';
import AddWidgetModal from './AddWidgetModal';
import type { Category } from '../types/dashboard';

interface CategorySectionProps {
  category: Category;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {category.widgets.map((widget) => (
          <WidgetCard
            key={widget.id}
            widget={widget}
            categoryId={category.id}
          />
        ))}
        
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center justify-center bg-white border border-gray-200 rounded-lg min-h-[200px] shadow-sm hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:border-gray-400">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Add Widget</span>
          </div>
        </button>
      </div>

      {showAddModal && (
        <AddWidgetModal
          categoryId={category.id}
          categoryName={category.name}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
};

export default CategorySection;
