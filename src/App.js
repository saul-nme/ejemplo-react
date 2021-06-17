import Router from './router/Navigation';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, Card, Button } from '@shopify/polaris';



function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Router />
    </AppProvider>
  )
}


export default App;
