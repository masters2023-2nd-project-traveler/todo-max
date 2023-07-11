import React from 'react';
import styled, { css } from 'styled-components';
import IconClose from '../../assets/icon_closed.svg';
import IconEdit from '../../assets/icon_edit.svg';
import IconHistory from '../../assets/icon_history.svg';
import IconPlus from '../../assets/icon_plus.svg';

const Button: React.FC<ButtonProps> = ({
  variant,
  pattern,
  text,
  icon,
  disabled,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case 'close':
        return <img src={IconClose} alt="Close" />;
      case 'edit':
        return <img src={IconEdit} alt="Edit" />;
      case 'history':
        return <img src={IconHistory} alt="History" />;
      case 'plus':
        return <img src={IconPlus} alt="Plus" />;
      default:
        return null;
    }
  };

  return (
    <StyledButton
      variant={variant}
      pattern={pattern}
      text={text}
      icon={icon}
      disabled={disabled}
    >
      {(pattern === 'icon-text' || pattern === 'icon-only') && renderIcon()}
      {pattern !== 'icon-only' && text}
    </StyledButton>
  );
};

export default Button;

interface ButtonProps {
  variant: 'contained' | 'ghost';
  pattern: 'icon-only' | 'text-only' | 'icon-text';
  text?: string;
  icon?: 'close' | 'edit' | 'history' | 'plus';
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme: { border } }) => border.radius8};
  font: ${({ theme: { fonts } }) => fonts.displayB14};
  color: ${({ text, theme: { colors } }) =>
    text === '기록 전체 삭제'
      ? colors.textDanger
      : text === '취소' || text === '닫기'
      ? colors.textDefault
      : colors.textWhiteDefault};

  background-color: ${({ variant, text, theme: { colors } }) =>
    variant === 'contained'
      ? text === '취소'
        ? colors.surfaceAlt
        : text === '저장' || text === '등록'
        ? colors.surfaceBrand
        : text === '삭제'
        ? colors.surfaceDanger
        : colors.surfaceDefault
      : 'transparent'};

  width: ${({ variant, pattern }) =>
    variant === 'contained' && pattern === 'text-only' ? '132px' : 'auto'};

  height: ${({ pattern }) => (pattern !== 'icon-only' ? '32px' : 'auto')};

  img {
    width: ${({ pattern }) => (pattern === 'icon-text' ? '16px' : 'auto')};
    margin-right: ${({ pattern }) => (pattern === 'icon-text' ? '4px' : '0px')};
  }

  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};

  ${({ variant, disabled }) =>
    variant === 'contained' &&
    !disabled &&
    `
    &:hover {
      opacity: 0.8;
    }
  `}

  ${({ pattern, icon, theme: { colors } }) =>
    pattern === 'icon-only' &&
    icon === 'close' &&
    css`
      &:hover {
        svg path {
          fill: ${colors.surfaceDanger};
        }
      }
    `}
`;
