import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles.ts';
import { ColumnList } from './components/main/ColumnList';
import { ActionHistory } from './components/ActionHistory.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HeaderLayout>
        <ActionHistory />
      </HeaderLayout>
      <MainLayout>
        <ColumnList />
      </MainLayout>
    </ThemeProvider>
  );
}

const HeaderLayout = styled.div`
  display: flex;
  height: 64px;
  padding: 18px 80px 17px 80px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.surfaceAlt};
`;

const MainLayout = styled.div`
  padding: 32px 80px 0;
  background-color: ${(props) => props.theme.colors.surfaceAlt};
`;

// const Title = styled.h1`
//   color: ${(props) => props.theme.colors.surfaceBrand};
// `;

export default App;
