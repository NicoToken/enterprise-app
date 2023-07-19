import { NetworkGuard } from 'components/network-guard';
import { SnackbarContainer } from 'components/snackbar';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';
import styles from './App.module.sass';
import { darkTheme } from 'lib/ui/theme/darkTheme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'lib/ui/GlobalStyle';
import { TransactionErrorProvider } from 'chain/components/TransactionErrorProvider';
import { PersonalizationProvider } from 'libs/personalization/PersonalizationProvider';
import { setupErrorMonitoring } from 'errors/errorMonitoring';
import { AppRoutes } from 'navigation/AppRoutes';
import { GlobalErrorBoundary } from 'errors/components/GlobalErrorBoundary';
import { TransactionsProvider } from 'chain/transactions';

const queryClient = new QueryClient();

const AppProviders = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <GlobalErrorBoundary>
        <main className={styles.root}>
          <QueryClientProvider client={queryClient}>
            <NetworkGuard>
              <TransactionsProvider>
                <TransactionErrorProvider>
                  <SnackbarProvider
                    autoHideDuration={null}
                    content={(key, message) => <SnackbarContainer id={key} message={message} />}
                  >
                    <PersonalizationProvider>
                      <AppRoutes />
                    </PersonalizationProvider>
                  </SnackbarProvider>
                </TransactionErrorProvider>
              </TransactionsProvider>
            </NetworkGuard>
          </QueryClientProvider>
        </main>
      </GlobalErrorBoundary>
    </ThemeProvider>
  );
};

setupErrorMonitoring();

const App = () => {
  return <AppProviders />;
};

export default App;
