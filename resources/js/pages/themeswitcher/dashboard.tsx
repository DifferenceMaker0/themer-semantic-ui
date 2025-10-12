import { useState } from 'react';
import './widget/tswitch.css';
import { SidebarProvider } from './components/sidebar-provider';
import { SettingsProvider } from './components/settings-provider';
import { AppSidebar } from './components/app-sidebar';
import { MainContent } from './components/main-content';
import { Head } from '@inertiajs/react';

export const ThemerDashboard = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const handleNavigate = (view: string) => {
    setActiveView(view);
  };

  return (
    <>
      <Head title="Themer Dashboard" />
      <SettingsProvider>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar activeView={activeView} onNavigate={handleNavigate} />
            <MainContent activeView={activeView} />
          </div>
        </SidebarProvider>
      </SettingsProvider>
    </>
  );
};

export default ThemerDashboard;
