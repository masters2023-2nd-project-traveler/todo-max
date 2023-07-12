import styled from 'styled-components';
import UserImage from '../../assets/user_Image.svg';

interface ActionListItemProps {
  title: string;
  from: string;
  to: string;
  action: string;
  createdTime: string;
  userName: string;
  imageUrl: string;
}

export const ActionListItem: React.FC<ActionListItemProps> = ({
  title,
  from,
  to,
  action,
  createdTime,
  userName,
  imageUrl,
}) => {
  return (
    <StyledListItem>
      <img src={UserImage} alt="UserImage" />
      <div className="itemBody">
        <span className="userName">@{userName}</span>
        <span className="actionBody">
          <span className="bold">{title}</span>
          을(를) <span className="bold">{from}</span>에서{' '}
          <span className="bold">{to}</span>으로{' '}
          <span className="bold">{action}</span>
          하였습니다.
        </span>
        <span className="createdTime">{createdTime}3분전</span>
      </div>
    </StyledListItem>
  );
};

const StyledListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;

  .itemBody {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1 0 0;
    align-items: flex-start;
  }

  .userName {
    font: ${({ theme: { fonts } }) => fonts.displayM14};
    color: ${({ theme: { colors } }) => colors.textDefault};
  }

  .actionBody {
    font: ${({ theme: { fonts } }) => fonts.displayM14};
    color: ${({ theme: { colors } }) => colors.textDefault};
  }

  .bold {
    font: ${({ theme: { fonts } }) => fonts.displayB14};
    color: ${({ theme: { colors } }) => colors.textBold};
  }

  .createdTime {
    font: ${({ theme: { fonts } }) => fonts.displayM12};
    color: ${({ theme: { colors } }) => colors.textWeak};
  }
`;
