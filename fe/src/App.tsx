import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles.ts';
import { Header } from './components/header/Header';
import { ColumnList } from './components/main/ColumnList';
import { FloatingActionBtn } from './components/main/FloatingAction.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <ColumnList />
    </ThemeProvider>
  );
}

export default App;
