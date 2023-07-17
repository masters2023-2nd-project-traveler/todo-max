import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../buttons/Button';

type Mode = 'default' | 'addEdit' | 'drag' | 'place';

type Task = {
  title: string;
  contents: string;
  platform?: string;
  modalHandler?: () => void;
};

type CardStyledProps = {
  mode: Mode;
};

type CardProps = Task & {
  mode: Mode;
  onSubmit?: (title: string, body: string) => void;
  onCancel?: () => void;
};

export const Card: React.FC<CardProps> = ({
  mode,
  title,
  contents,
  platform,
  modalHandler,
  onSubmit,
  onCancel,
}) => {
  const [titleInputValue, setTitleInputValue] = useState('');
  const [bodyInputValue, setBodyInputValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [bodyInputValue]);

  const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInputValue(e.target.value);
  };

  const handleBodyInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBodyInputValue(e.target.value);
  };

  const isInputEmpty =
    titleInputValue.length === 0 || bodyInputValue.length === 0;

  const handleButtonClick = () => {
    if (onSubmit && !isInputEmpty) {
      onSubmit(titleInputValue, bodyInputValue);
    }
  };

  return (
    <CardLayout mode={mode} className="card">
      {mode === 'addEdit' ? (
        <>
          <input
            placeholder={title}
            className="title"
            type="text"
            onChange={handleTitleInputChange}
            title="제목"
          />
          <textarea
            ref={textAreaRef}
            placeholder={contents}
            className="body"
            onChange={handleBodyInputChange}
            maxLength={500}
            title="내용"
            rows={1}
          />
          <div className="btns">
            <Button
              variant="contained"
              pattern="text-only"
              text="취소"
              onClick={onCancel}
            />
            <Button
              variant="contained"
              pattern="text-only"
              text="등록"
              disabled={isInputEmpty}
              onClick={handleButtonClick}
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
            <Button
              variant="ghost"
              pattern="icon-only"
              icon="close"
              onClick={modalHandler}
            />
            <Button variant="ghost" pattern="icon-only" icon="edit" />
          </div>
        </>
      )}
    </CardLayout>
  );
};

const CardLayout = styled.div<CardStyledProps>`
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
    resize: none;
    white-space: pre-wrap;
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
      textarea,
      input {
        width: 240px;
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
