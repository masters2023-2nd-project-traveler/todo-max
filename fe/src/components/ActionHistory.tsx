import styled from 'styled-components';
import { Button } from './buttons/button';
import { ActionList } from './ActionList';

export function ActionHistory() {
  return (
    <StyledActionHistory>
      <StyledTitleArea>
        <StyledTitleText>사용자 활동 기록</StyledTitleText>
        <Button
          variant="contained"
          pattern="icon-text"
          text="닫기"
          icon="close"
        />
      </StyledTitleArea>
      <ActionList />
    </StyledActionHistory>
  );
}

const StyledActionHistory = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme: { colors } }) => colors.surfaceDefault};
  box-shadow: ${({ theme: { shadows } }) => shadows.floating};
  border-radius: ${({ theme: { border } }) => border.radius16};
  padding: 8px;
`;

const StyledTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;
  width: 350px;
  padding: 8px 8px 8px 16px;
`;

const StyledTitleText = styled.p`
  font: ${({ theme: { fonts } }) => fonts.displayB16};
  color: ${({ theme: { colors } }) => colors.textStrong};
  display: flex;
  align-items: center;
  justify-content: center;
`;
