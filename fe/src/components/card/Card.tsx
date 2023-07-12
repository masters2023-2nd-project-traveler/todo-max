import styled, { css } from 'styled-components';
import { Button } from '../buttons/Button';

type Mode = 'default' | 'addEdit' | 'drag' | 'place';

interface CardData {
  title: string;
  body: string;
  author: string;
}

interface CardStyledProps {
  mode: Mode;
}

interface CardProps {
  mode: Mode;
  data: CardData;
}

export const CardComponent: React.FC<CardProps> = ({ mode, data }) => {
  return (
    <Card mode={mode} className="card">
      {mode === 'addEdit' ? (
        <>
          <h2 className="title">{data.title}</h2>
          <p className="body">{data.body}</p>
          <div className="btns">
            <Button variant="contained" pattern="text-only" text="취소" />
            <Button variant="contained" pattern="text-only" text="등록" />
          </div>
        </>
      ) : (
        <>
          <div className="textArea">
            <h2 className="title">{data.title}</h2>
            <p className="body">{data.body}</p>
            <p className="caption">{data.author}</p>
          </div>
          <div className="iconBtns">
            <Button variant="ghost" pattern="icon-only" icon="close" />
            <Button variant="ghost" pattern="icon-only" icon="edit" />
          </div>
        </>
      )}
    </Card>
  );
};

export const Card = styled.div<CardStyledProps>`
  width: 300px;
  padding: 16px;
  cursor: pointer;
  background-color: ${({ theme: { colors } }) => colors.surfaceDefault};
  border-radius: ${({ theme: { border } }) => border.radius8};
  box-shadow: ${({ theme: { shadows } }) => shadows.nomal};

  .title {
    font: ${({ theme: { fonts } }) => fonts.displayB14};
    color: ${({ theme: { colors } }) => colors.textStrong};
  }
  .body {
    margin-top: 8px;
    margin-bottom: 16px;
    font: ${({ theme: { fonts } }) => fonts.displayM14};
    color: ${({ theme: { colors } }) => colors.textDefault};
  }
  .caption {
    font: ${({ theme: { fonts } }) => fonts.displayM12};
    color: ${({ theme: { colors } }) => colors.textWeak};
  }

  ${(props) =>
    props.mode === 'default' &&
    css`
      display: flex;
      justify-content: space-between;
    `}

  ${(props) =>
    props.mode === 'addEdit' &&
    css`
      .btns {
        display: flex;
        gap: 8px;
      }
    `}

  ${(props) =>
    props.mode === 'drag' &&
    css`
      display: flex;
      justify-content: space-between;
      box-shadow: ${({ theme: { shadows } }) => shadows.floating};
    `}

  ${(props) =>
    props.mode === 'place' &&
    css`
      display: flex;
      justify-content: space-between;
      opacity: 0.3;
    `}
`;
