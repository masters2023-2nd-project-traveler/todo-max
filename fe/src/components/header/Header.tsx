import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../buttons/Button';
import { ActionHistory } from '../actionHistory/ActionHistory';
import { HeaderTitle } from './HeaderTitle';

export const Header = () => {
  const [isActionHistoryVisible, setActionHistoryVisible] = useState(false);

  const handleHistoryClick = () => {
    setActionHistoryVisible(!isActionHistoryVisible);
  };

  return (
    <HeaderLayout>
      <HeaderTitle />
      <Button
        variant="ghost"
        pattern="icon-only"
        icon="history"
        onClick={handleHistoryClick}
      />
      {isActionHistoryVisible && <ActionHistory onClose={handleHistoryClick} />}
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
