import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.1ee0d0e4f7ef408295abf1eb022526e8',
  appName: 'prototipo-visual-app',
  webDir: 'dist',
  server: {
    url: 'https://1ee0d0e4-f7ef-4082-95ab-f1eb022526e8.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1e40af',
      showSpinner: false
    }
  }
};

export default config;