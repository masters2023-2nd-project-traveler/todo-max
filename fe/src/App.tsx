import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles.ts';
import { Header } from './components/header/Header';
import { ColumnList } from './components/main/ColumnList';
import { DataProvider } from './contexts/DataContext.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DataProvider>
        <Header />
        <ColumnList />
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
