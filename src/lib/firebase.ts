import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  AppCheck,
  getToken,
} from 'firebase/app-check';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp;
let appCheck: AppCheck | null = null;

export function getFirebaseApp(): FirebaseApp {
  if (!app) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  }
  return app;
}

export function initializeFirebaseAppCheck(): AppCheck | null {
  if (typeof window === 'undefined') {
    return null;
  }

  if (appCheck) {
    return appCheck;
  }

  const app = getFirebaseApp();
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!recaptchaSiteKey) {
    console.error('Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY');
    return null;
  }

  // if (process.env.NODE_ENV === 'development') {
  //   const debugToken = process.env.NEXT_PUBLIC_APPCHECK_DEBUG_TOKEN;
  //   if (debugToken) {
  //     (self as unknown as { FIREBASE_APPCHECK_DEBUG_TOKEN: string }).FIREBASE_APPCHECK_DEBUG_TOKEN = debugToken;
  //   }
  // }

  try {
    appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(recaptchaSiteKey),
      isTokenAutoRefreshEnabled: true,
    });
  } catch (error) {
    console.error('Failed to initialize App Check:', error);
    return null;
  }

  return appCheck;
}

export async function getAppCheckToken(): Promise<string | null> {
  try {
    const appCheckInstance = initializeFirebaseAppCheck();
    if (!appCheckInstance) {
      console.warn('App Check not initialized');
      return null;
    }

    const tokenResult = await getToken(appCheckInstance, false);
    return tokenResult.token;
  } catch (error) {
    console.error('Failed to get App Check token:', error);
    return null;
  }
}
