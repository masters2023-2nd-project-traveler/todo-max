import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

import GlobalStyles from './styles/GlobalStyles.ts';
import { ColumnList } from './components/main/ColumnList';
import { Header } from './components/header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <MainLayout>
        <ColumnList />
      </MainLayout>
    </ThemeProvider>
  );
}

const MainLayout = styled.div`
  padding: 32px 80px 0;
  background-color: ${(props) => props.theme.colors.surfaceAlt};
`;

// const Title = styled.h1`
//   color: ${(props) => props.theme.colors.surfaceBrand};
// `;

export default App;
