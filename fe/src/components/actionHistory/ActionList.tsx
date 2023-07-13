import styled from 'styled-components';
import { ActionListEmpty } from './ActionListEmpty';
import { ActionListItem } from './ActionListItem';
import React from 'react';
import { Button } from '../buttons/Button';

export const ActionList = () => {
  // const isListEmpty = data.length === 0;
  const isListEmpty = false;

  return (
    <ActionListLayout>
      {isListEmpty ? (
        <ActionListEmpty />
      ) : (
        <>
          {actionHistory.message.map((item: any, index: number) => (
            <React.Fragment key={item.title}>
              <ActionListItem
                title={item.title}
                from={item.from}
                to={item.to}
                action={item.action}
                createdTime={item.createdTime}
                userName={item.userName}
                imageUrl={item.imageUrl}
              />
              {index !== actionHistory.message.length - 1 && (
                <StyledDividingLine></StyledDividingLine>
              )}
            </React.Fragment>
          ))}
          <ButtonLayout>
            <Button variant="ghost" pattern="text-only" text="기록 전체 삭제" />
          </ButtonLayout>
        </>
      )}
    </ActionListLayout>
  );
};

const ActionListLayout = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
`;

const ButtonLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 16px;
`;

const StyledDividingLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme: { colors } }) => colors.borderDefault};
`;

const actionHistory = {
  statusCode: 200,
  message: [
    {
      title: '블로그에 포스팅할 것',
      from: '하고있는 일',
      to: '해야할 일',
      action: '이동',
      createdTime: '2023-07-10 18:00:00',
      userName: 'anonymous',
      imageUrl:
        'https://raw.githubusercontent.com/CDBchan/Typora-img/main/img/%E1%84%80%E1%85%A2%E1%84%80%E1%85%AE%E1%84%85%E1%85%B5.jpeg',
    },
    {
      title: 'GitHub 공부하기',
      from: '',
      to: '',
      action: '변경',
      createdTime: '2023-07-10 18:00:00',
      userName: 'anonymous',
      imageUrl:
        'https://raw.githubusercontent.com/CDBchan/Typora-img/main/img/%E1%84%80%E1%85%A2%E1%84%80%E1%85%AE%E1%84%85%E1%85%B5.jpeg',
    },
    {
      title: '블로그에 포스팅할 것',
      from: '하고 있는 일',
      to: '',
      action: '등록',
      createdTime: '2023-07-10 18:00:00',
      userName: 'anonymous',
      imageUrl:
        'https://raw.githubusercontent.com/CDBchan/Typora-img/main/img/%E1%84%80%E1%85%A2%E1%84%80%E1%85%AE%E1%84%85%E1%85%B5.jpeg',
    },
    {
      title: '블로그에 포스팅할 것',
      from: '하고 있는 일',
      to: '',
      action: '삭제',
      createdTime: '2023-07-10 18:00:00',
      userName: 'anonymous',
      imageUrl:
        'https://raw.githubusercontent.com/CDBchan/Typora-img/main/img/%E1%84%80%E1%85%A2%E1%84%80%E1%85%AE%E1%84%85%E1%85%B5.jpeg',
    },
  ],
};
