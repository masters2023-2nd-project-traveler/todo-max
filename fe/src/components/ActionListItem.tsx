import styled from 'styled-components';
import UserImage from '../assets/user_Image.svg';

export function ActionListItem({ userId, action, timeStamp }: any) {
  return (
    <StyledListItem>
      <img src={UserImage} alt="UserImage" />
      <StyledListItemBody>
        <StyledUserId>@멋진삼{userId}</StyledUserId>
        <StyledActionBody>
          <StyledBold>{action}블로그에 포스팅할 것</StyledBold>
          을(를) <StyledBold>{action}하고있는 일</StyledBold>에서{' '}
          <StyledBold>{action}해야할 일</StyledBold>으로{' '}
          <StyledBold>{action}이동</StyledBold>하였습니다.
        </StyledActionBody>
        <StyledTimeStamp>{timeStamp}3분전</StyledTimeStamp>
      </StyledListItemBody>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
`;

const StyledListItemBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 0 0;
  align-items: flex-start;
`;

const StyledUserId = styled.span`
  font: ${({ theme: { fonts } }) => fonts.displayM14};
  color: ${({ theme: { colors } }) => colors.textDefault};
`;

const StyledActionBody = styled.span`
  font: ${({ theme: { fonts } }) => fonts.displayM14};
  color: ${({ theme: { colors } }) => colors.textDefault};
`;

const StyledBold = styled.span`
  font: ${({ theme: { fonts } }) => fonts.displayB14};
  color: ${({ theme: { colors } }) => colors.textBold};
`;

const StyledTimeStamp = styled.span`
  font: ${({ theme: { fonts } }) => fonts.displayM12};
  color: ${({ theme: { colors } }) => colors.textWeak};
`;
