import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { LiveFeed } from './pages/LiveFeed';
import { ReviewQueue } from './pages/ReviewQueue';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { useAppStore } from './store/useAppStore';

function App() {
  const currentPage = useAppStore((state) => state.currentPage);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'live-feed':
        return <LiveFeed />;
      case 'review-queue':
        return <ReviewQueue />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <MainLayout>
      {renderPage()}
    </MainLayout>
  );
}

export default App;
