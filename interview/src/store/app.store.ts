import { create } from 'zustand';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  theme: 'light' | 'dark'; 
  login: () => void;
  logout: () => Promise<void>;
  toggleTheme: () => void; 
}

const useAppStore = create<AuthState>((set) => {
  const persistedUser = localStorage.getItem('user');
  const persistedIsAuthenticated = persistedUser ? true : false;
  const persistedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';

  set({
    user: persistedUser ? JSON.parse(persistedUser) : null,
    isAuthenticated: persistedIsAuthenticated,
    loading: true,
    theme: persistedTheme, 
  });

  document.body.classList.add(persistedTheme);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); 
      set({ user, isAuthenticated: true, loading: false });
    } else {
      localStorage.removeItem('user');
      set({ user: null, isAuthenticated: false, loading: false });
    }
  });

  return {
    user: null,
    isAuthenticated: persistedIsAuthenticated,
    loading: true,
    theme: persistedTheme,
    login: () => set({ isAuthenticated: true }),  
    logout: async () => {
      await signOut(auth);
      localStorage.removeItem('user');
      set({ user: null, isAuthenticated: false });
    },
    toggleTheme: () => {
      set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme); 
        document.body.classList.remove(state.theme);
        document.body.classList.add(newTheme); 
        return { theme: newTheme };
      });
    },
  };
});

export default useAppStore;