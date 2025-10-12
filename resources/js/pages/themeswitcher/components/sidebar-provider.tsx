import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile] = useState(false); // For now, we'll keep it simple

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, isMobile }}>
      {children}
    </SidebarContext.Provider>
  );
};
