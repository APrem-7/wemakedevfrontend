import React from 'react';
import {
  LayoutDashboard,
  Radio,
  ClipboardList,
  BarChart3,
  Settings,
} from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import type { NavigationItem } from '../../types';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  page: NavigationItem;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-150
        ${
          isActive
            ? 'bg-sky-100 text-sky-700 font-medium'
            : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
        }
      `}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export const Sidebar: React.FC = () => {
  const { currentPage, setCurrentPage } = useAppStore();

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', page: 'dashboard' as NavigationItem },
    { icon: <Radio size={20} />, label: 'Live Feed', page: 'live-feed' as NavigationItem },
    { icon: <ClipboardList size={20} />, label: 'Review Queue', page: 'review-queue' as NavigationItem },
    { icon: <BarChart3 size={20} />, label: 'Reports', page: 'reports' as NavigationItem },
    { icon: <Settings size={20} />, label: 'Settings', page: 'settings' as NavigationItem },
  ];

  return (
    <div className="w-60 bg-white border-r border-neutral-200 h-screen flex flex-col">
      <div className="p-6 border-b border-neutral-200">
        <h1 className="text-xl font-bold text-neutral-900">WhatsApp AI Clerk</h1>
        <p className="text-xs text-neutral-500 mt-1">Business Control Center</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.page}
            icon={item.icon}
            label={item.label}
            page={item.page}
            isActive={currentPage === item.page}
            onClick={() => setCurrentPage(item.page)}
          />
        ))}
      </nav>

      <div className="p-4 border-t border-neutral-200">
        <div className="text-xs text-neutral-500">
          <p className="font-medium text-neutral-700 mb-1">Version 1.0.0</p>
          <p>© 2026 AI Clerk</p>
        </div>
      </div>
    </div>
  );
};
