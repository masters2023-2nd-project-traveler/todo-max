import { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import { Header } from './components/header/Header';

function App() {
  useEffect(() => {
    fetch('http://52.79.68.54:8080/categories')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainLayout></MainLayout>
    </ThemeProvider>
  );
}

const MainLayout = styled.div`
  padding: 32px 80px 0;
  height: 960px;
  background-color: ${(props) => props.theme.colors.surfaceAlt};
`;

// const Title = styled.h1`
//   color: ${(props) => props.theme.colors.surfaceBrand};
// `;

export default App;
