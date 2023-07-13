import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../buttons/Button';

type Mode = 'default' | 'addEdit' | 'drag' | 'place';

interface Task {
  title: string;
  contents: string;
  platform: string;
}

interface CardStyledProps {
  mode: Mode;
}

interface CardProps extends Task {
  mode: Mode;
}

export const Card: React.FC<CardProps> = ({
  mode,
  title,
  contents,
  platform,
}) => {
  const [bodyinputValue, setBodyInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBodyInputValue(e.target.value);
  };

  const isInputEmpty = bodyinputValue.length === 0;

  return (
    <CardLayout mode={mode} className="card">
      {mode === 'addEdit' ? (
        <>
          <input
            placeholder={title}
            className="title"
            type="text"
            title="제목"
          />
          <input
            placeholder={contents}
            className="body"
            type="text"
            onChange={handleInputChange}
            title="내용"
          />
          <div className="btns">
            <Button variant="contained" pattern="text-only" text="취소" />
            <Button
              variant="contained"
              pattern="text-only"
              text="등록"
              disabled={isInputEmpty}
            />
          </div>
        </>
      ) : (
        <>
          <div className="textArea">
            <h2 className="title">{title}</h2>
            <p className="body">{contents}</p>
            <p className="caption">author by {platform}</p>
          </div>
          <div className="iconBtns">
            <Button variant="ghost" pattern="icon-only" icon="close" />
            <Button variant="ghost" pattern="icon-only" icon="edit" />
          </div>
        </>
      )}
    </CardLayout>
  );
};

export const CardLayout = styled.div<CardStyledProps>`
  width: 300px;
  padding: 16px;
  cursor: pointer;
  background-color: ${({ theme: { colors } }) => colors.surfaceDefault};
  border-radius: ${({ theme: { border } }) => border.radius8};
  box-shadow: ${({ theme: { shadows } }) => shadows.nomal};

  .title {
    border: none;
    font: ${({ theme: { fonts } }) => fonts.displayB14};
    color: ${({ theme: { colors } }) => colors.textStrong};
  }

  .body {
    border: none;
    margin-top: 8px;
    margin-bottom: 16px;
    font: ${({ theme: { fonts } }) => fonts.displayM14};
    color: ${({ theme: { colors } }) => colors.textDefault};
  }

  .caption {
    font: ${({ theme: { fonts } }) => fonts.displayM12};
    color: ${({ theme: { colors } }) => colors.textWeak};
  }

  .iconBtns {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  ${(props) =>
    props.mode === 'default' &&
    css`
      display: flex;
      justify-content: space-between;
      gap: 16px;
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
      gap: 16px;
      box-shadow: ${({ theme: { shadows } }) => shadows.floating};
    `}

  ${(props) =>
    props.mode === 'place' &&
    css`
      display: flex;
      justify-content: space-between;
      gap: 16px;
      opacity: 0.3;
    `}
`;
