import styled from 'styled-components';

export function ActionListEmpty() {
  return <StyledListEmpty>사용자 활동 기록이 없습니다.</StyledListEmpty>;
}

const StyledListEmpty = styled.li`
  font: ${({ theme: { fonts } }) => fonts.displayM14};
  color: ${({ theme: { colors } }) => colors.textWeak};
  padding: 16px;
  text-align: center;
`;
