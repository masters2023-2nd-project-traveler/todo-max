import styled from 'styled-components';
import { ActionListEmpty } from './ActionListEmpty';
import { ActionListItem } from './ActionListItem';
import { Button } from './buttons/button';

export function ActionList() {
  // const isListEmpty = data.length === 0;
  const isListEmpty = false;

  return (
    <StyledActionList>
      {isListEmpty ? (
        <ActionListEmpty />
      ) : (
        <>
          <ActionListItem />
          <ActionListItem />
          <StyledButtonContainer>
            <Button variant="ghost" pattern="text-only" text="기록 전체 삭제" />
          </StyledButtonContainer>
        </>
      )}
    </StyledActionList>
  );
}

const StyledActionList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  width: 350px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 16px;
`;
