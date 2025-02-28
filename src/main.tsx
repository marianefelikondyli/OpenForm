import ReactDOM from 'react-dom/client';
import ThemeProvider from '@/theme/ThemeProvider';
import App from './App';
import { ErrorBoundary } from 'react-error-boundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary
    fallback={
      <>
        <p>Something wrong happen! 🧐</p>
      </>
    }
  >
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ErrorBoundary>,
);
