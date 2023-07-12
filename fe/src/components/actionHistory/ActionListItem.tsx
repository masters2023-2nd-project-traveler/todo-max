import styled from 'styled-components';
import UserImage from '../../assets/user_Image.svg';

type ActionListItemProps = {
  title: string;
  from: string;
  to: string;
  action: string;
  createdTime: string;
  userName: string;
  imageUrl: string;
};

export function ActionListItem({
  title,
  from,
  to,
  action,
  createdTime,
  userName,
  imageUrl,
}: ActionListItemProps) {
  return (
    <StyledListItem>
      <img src={UserImage} alt="UserImage" />
      <StyledListItemBody>
        <StyledUserId>@{userName}</StyledUserId>
        <StyledActionBody>
          <StyledBold>{title}</StyledBold>
          을(를) <StyledBold>{from}</StyledBold>에서{' '}
          <StyledBold>{to}</StyledBold>으로 <StyledBold>{action}</StyledBold>
          하였습니다.
        </StyledActionBody>
        <StyledTimeStamp>{createdTime}3분전</StyledTimeStamp>
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
