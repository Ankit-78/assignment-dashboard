import { DashboardProvider } from './context/DashboardContext';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <DashboardProvider>
      <div className="min-h-screen bg-gray-50">
        <Dashboard />
      </div>
    </DashboardProvider>
  );
}

export default App;