import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { DashboardData, Widget } from '../types/dashboard';
import { initialDashboardData } from '../data/dashboardData';

interface DashboardContextType {
  dashboardData: DashboardData;
  addWidget: (categoryId: string, widget: Omit<Widget, 'id'>) => void;
  removeWidget: (categoryId: string, widgetId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredWidgets: Widget[];
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [dashboardData, setDashboardData] = useState<DashboardData>(initialDashboardData);
  const [searchQuery, setSearchQuery] = useState('');

  const addWidget = (categoryId: string, widget: Omit<Widget, 'id'>) => {
    const newWidget: Widget = {
      ...widget,
      id: `widget-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };

    setDashboardData(prevData => ({
      ...prevData,
      categories: prevData.categories.map(category =>
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, newWidget] }
          : category
      )
    }));
  };

  const removeWidget = (categoryId: string, widgetId: string) => {
    setDashboardData(prevData => ({
      ...prevData,
      categories: prevData.categories.map(category =>
        category.id === categoryId
          ? { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) }
          : category
      )
    }));
  };

  const filteredWidgets = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const allWidgets = dashboardData.categories.flatMap(category => category.widgets);
    return allWidgets.filter(widget =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      widget.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [dashboardData, searchQuery]);

  const value: DashboardContextType = {
    dashboardData,
    addWidget,
    removeWidget,
    searchQuery,
    setSearchQuery,
    filteredWidgets
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};