import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../buttons/Button';
import { ActionHistory } from '../actionHistory/ActionHistory';
import { HeaderTitle } from './HeaderTitle';

export const Header = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const onMove = () => {
    setIsAnimating(true);
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const onAnimationEnd = () => {
    if (!isVisible) {
      setIsAnimating(false);
    }
  };

  // const handleHistoryClick = (newDirection) => {
  //   setDirection(newDirection);
  //   setIsVisible((prevState) => !prevState);
  //   // setIsVisible(!isVisible);
  // };

  return (
    <HeaderLayout>
      <HeaderTitle />
      <Button
        variant="ghost"
        pattern="icon-only"
        icon="history"
        onClick={onMove}
      />
      {/* {isVisible && (
        <ActionHistory
          isVisible={isVisible}
          onClose={onMove}
          onAnimationEnd={onAnimationEnd}
        />
      )} */}
      {isAnimating && (
        <ActionHistory
          isVisible={isVisible}
          onClose={onMove}
          onAnimationEnd={onAnimationEnd}
        />
      )}
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  display: flex;
  height: 64px;
  padding: 18px 80px 17px 80px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.surfaceAlt};
`;
