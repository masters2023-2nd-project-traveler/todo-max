import './App.css';
import { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

function App() {
  useEffect(() => {
    fetch(`http://52.79.68.54:8080/categories`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Title>test</Title>
    </ThemeProvider>
  );
}

const Title = styled.h1`
  color: ${(props) => props.theme.colors.surfaceBrand};
`;

export default App;
