import Router from './router/Navigation';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';

/**
 * Configuración principal para polaris y uso del router
 */

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Router />
    </AppProvider>
  )
}


export default App;
