import { create } from 'zustand';
import type { AIStatus, NavigationItem } from '../types';

interface AppState {
  isPaused: boolean;
  humanOverride: boolean;
  aiStatus: AIStatus;
  currentPage: NavigationItem;
  setPaused: (paused: boolean) => void;
  setHumanOverride: (override: boolean) => void;
  setAIStatus: (status: AIStatus) => void;
  setCurrentPage: (page: NavigationItem) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isPaused: false,
  humanOverride: false,
  aiStatus: 'connected',
  currentPage: 'dashboard',
  setPaused: (paused) => set({ isPaused: paused }),
  setHumanOverride: (override) => set({ humanOverride: override }),
  setAIStatus: (status) => set({ aiStatus: status }),
  setCurrentPage: (page) => set({ currentPage: page }),
}));
