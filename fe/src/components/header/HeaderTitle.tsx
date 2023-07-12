import styled from 'styled-components';

export function HeaderTitle() {
  return <StyledHeaderTitle>TODO List</StyledHeaderTitle>;
}

const StyledHeaderTitle = styled.h1`
  font: ${({ theme: { fonts } }) => fonts.displayB24};
  color: ${({ theme: { colors } }) => colors.textStrong};
`;
