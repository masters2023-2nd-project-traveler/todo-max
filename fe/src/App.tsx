import { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import { Dummy } from './components/Dummy';
import { DummyTwo } from './components/DummyTwo';

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
      <HeaderLayout>헤더영역</HeaderLayout>
      <MainLayout>메인영역</MainLayout>
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
  height: 960px;
  background-color: ${(props) => props.theme.colors.surfaceAlt};
`;

// const Title = styled.h1`
//   color: ${(props) => props.theme.colors.surfaceBrand};
// `;

export default App;
