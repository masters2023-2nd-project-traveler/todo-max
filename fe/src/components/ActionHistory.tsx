import styled from 'styled-components';

export function ActionHistory() {
  return (
    <StyledActionHistory>
      <StyledTitleArea></StyledTitleArea>
    </StyledActionHistory>
  );
}

const StyledActionHistory = styled.div`
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.surfaceDefault};
  box-shadow: ${({ theme: { shadows } }) => shadows.floating};
`;

const StyledTitleArea = styled.div`
  font: ${({ theme: { fonts } }) => fonts.displayB24};
  color: ${({ theme: { colors } }) => colors.textStrong};
`;
