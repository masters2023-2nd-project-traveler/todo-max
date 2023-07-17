import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Button } from '../buttons/Button';

type FABStyledProps = {
  mode: boolean;
};

type FloatingActionProps = {
  // title: string;
  // numberOfTasks: number;
  onAddClick?: () => void;
};

export const FloatingActionBtn: React.FC<FloatingActionProps> = (
  {
    // title,
    // numberOfTasks,
    // onAddClick,
  },
) => {
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const changeModeHandler = () => {
    setIsSelectMode((prev) => !prev);
    if (!isSelectMode) {
      setIsRendered(true);
    } else {
      setTimeout(() => setIsRendered(false), 500);
    }
  };
  // const changeModeHandler = () => {
  //   setIsSelectMode((prev) => !prev);
  // };

  return (
    <FloatingActionBtnLayout mode={isSelectMode}>
      {isRendered && (
        <div className="selectMode">
          <Button
            variant="contained"
            pattern="text-only"
            text="컬럼 추가"
            // onClick={addHandler}
          />
          <Button
            variant="contained"
            pattern="text-only"
            text="컬럼 삭제"
            // onClick={deleteHandler}
          />
        </div>
      )}
      <div className="fabBtn" onClick={changeModeHandler}>
        <Button variant="ghost" pattern="icon-only" icon="plus" />
      </div>
    </FloatingActionBtnLayout>
  );
};

const FloatingActionBtnLayout = styled.div<FABStyledProps>`
  position: fixed;
  bottom: 16px;
  right: 16px;

  display: flex;
  cursor: pointer;
  box-shadow: ${({ theme: { shadows } }) => shadows.up.boxShadow};
  backdrop-filter: ${({ theme: { shadows } }) => shadows.up.backdropFilter};

  ${(props) =>
    props.mode
      ? css`
          // flex-direction: column;
          justify-content: center;
          background-color: ${({ theme: { colors } }) => colors.surfaceDefault};
          border-radius: 16px 16px 28px 16px;
        `
      : css`
          width: 56px;
          height: 56px;
          background-color: ${({ theme: { colors } }) => colors.surfaceBrand};
          border-radius: ${({ theme: { border } }) => border.radius50};
          justify-content: center;
          align-items: center;
        `}

  .fabBtn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    bottom: 0px;
    right: 0px;

    width: 56px;
    height: 56px;
    background-color: ${({ theme: { colors } }) => colors.surfaceBrand};
    border-radius: ${({ theme: { border } }) => border.radius50};
  }

  .fabBtn svg path {
    fill: ${({ theme: { colors } }) => colors.surfaceDefault};
  }

  .selectMode {
    display: flex;
    flex-direction: column;
    animation: 0.5s ease-in-out forwards;
    animation-fill-mode: forwards;
    height: 164px;
    width: 164px;
  }

  .selectMode button {
    animation: 0.5s ease-in-out forwards;
    animation-fill-mode: forwards;
  }

  ${(props) =>
    props.mode
      ? css`
          .selectMode {
            padding: 16px;
            gap: 10px;
            animation: ${expand} 0.5s ease-in-out;
          }
          .selectMode button {
            animation: ${fadeIn} 0.5s ease-in-out;
          }
        `
      : css`
          .selectMode {
            animation: ${shrink} 0.5s ease-in-out;
          }
          .selectMode button {
            animation: ${fadeOut} 0.5s ease-in-out;
          }
        `}
`;
const expand = keyframes`
  0% {
    height: 20px;
    width: 20px;
    opacity: 0;
  }
  100% {
    height: 164px; 
    width:  164px; 
    opacity: 1;
  }
`;

const shrink = keyframes`
  0% {
    height: 164px;
    width:  164px; 
    opacity: 1;
  }
  100% {
    height: 20px;
    width: 20px;
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
