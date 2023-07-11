import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

function App() {
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
