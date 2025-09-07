import React, { useState } from 'react';
import { Search, MoreHorizontal, RotateCcw, Clock, ChevronDown, Plus} from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';
import CategorySection from './CategorySection';
import SearchResults from './SearchResults';
import AddWidgetModal from './AddWidgetModal';

const Dashboard: React.FC = () => {
  const { dashboardData, searchQuery, setSearchQuery } = useDashboard();

  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold text-blue-900">Dashboard v2</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">

         <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100">
             <span>Add Widget</span>
             <Plus className="w-4 h-4" />   
            </button>

              <button className="p-2 text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <RotateCcw className="w-4 h-4" />
              </button>

              
<button className="flex items-center px-3 py-2 border rounded-md text-sm font-medium text-blue-900 border-blue-900 hover:bg-blue-50">
  <Clock className="w-4 h-4 text-blue-900" />
  <span className="mx-2 border-l border-blue-900 h-4"></span>
  <span className="text-blue-900">Last 2 days</span>
  <ChevronDown className="w-4 h-4 ml-2 text-blue-900" />
</button>
            </div>
          </div>
        </div>
      </header>

      <main className="p-6">
        {searchQuery ? (
          <SearchResults />
        ) : (
          <div className="space-y-6">
            {dashboardData.categories.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </div>
        )}
      </main>

      {showAddModal && (
        <AddWidgetModal
          categoryId={dashboardData.categories[0]?.id} 
          categoryName={dashboardData.categories[0]?.name || "Default"}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
