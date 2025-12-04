'use client';

import { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import { initializeFirebaseAppCheck } from '@/lib/firebase';

interface FirebaseContextType {
  isAppCheckReady: boolean;
}

const FirebaseContext = createContext<FirebaseContextType>({
  isAppCheckReady: false,
});

export function useFirebase() {
  return useContext(FirebaseContext);
}

interface FirebaseProviderProps {
  children: ReactNode;
}

export function FirebaseProvider({ children }: FirebaseProviderProps) {
  const [isAppCheckReady, setIsAppCheckReady] = useState(false);

  useEffect(() => {
    const appCheck = initializeFirebaseAppCheck();
    if (appCheck) {
      setIsAppCheckReady(true);
    }
  }, []);

  return (
    <FirebaseContext.Provider value={{ isAppCheckReady }}>
      {children}
    </FirebaseContext.Provider>
  );
}
