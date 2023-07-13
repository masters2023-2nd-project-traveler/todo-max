import styled from 'styled-components';
import { Button } from '../buttons/Button';

type ColumnTitleProps = {
  title: string;
  numberOfTasks: number;
};

export const ColumnTitle: React.FC<ColumnTitleProps> = ({
  title,
  numberOfTasks,
}) => {
  return (
    <TitleLayout>
      <div className="textArea">
        <h2>{title}</h2>
        <p>{numberOfTasks}</p>
      </div>
      <div className="iconBtns">
        <Button variant="ghost" pattern="icon-only" icon="plus" />
        <Button variant="ghost" pattern="icon-only" icon="close" />
      </div>
    </TitleLayout>
  );
};

export const TitleLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 300px;

  .textArea,
  .iconBtns {
    display: flex;
    align-items: center;
  }

  .textArea {
    gap: 8px;

    & h2 {
      font: ${({ theme: { fonts } }) => fonts.displayB16};
      color: ${({ theme: { colors } }) => colors.textBold};
    }
    & p {
      font: ${({ theme: { fonts } }) => fonts.displayM12};
      color: ${({ theme: { colors } }) => colors.textWeak};
      padding: 0 4px;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${({ theme: { colors } }) => colors.borderDefault};
      border-radius: ${({ theme: { border } }) => border.radius8};
    }
  }
`;
