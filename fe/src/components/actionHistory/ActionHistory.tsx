import styled from 'styled-components';
import { Button } from '../buttons/Button';
import { ActionList } from './ActionList';

export const ActionHistory = () => {
  return (
    <StyledActionHistory>
      <div className="titleArea">
        <p className="titleText">사용자 활동 기록</p>
        <Button
          variant="contained"
          pattern="icon-text"
          text="닫기"
          icon="close"
        />
      </div>
      <ActionList />
    </StyledActionHistory>
  );
};

const StyledActionHistory = styled.div`
  position: absolute;
  top: 64px;
  right: 56px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme: { colors } }) => colors.surfaceDefault};
  box-shadow: ${({ theme: { shadows } }) => shadows.floating};
  border-radius: ${({ theme: { border } }) => border.radius16};
  padding: 8px;

  .titleArea {
    display: flex;
    justify-content: space-between;
    aling-items: center;
    width: 350px;
    padding: 8px 8px 8px 16px;
  }

  .titleText {
    font: ${({ theme: { fonts } }) => fonts.displayB16};
    color: ${({ theme: { colors } }) => colors.textStrong};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
