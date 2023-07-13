import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card } from '../card/Card';
import { Modal } from '../modal/Modal';

type Task = {
  taskId: number;
  title: string;
  contents: string;
  platform: string;
};

type CardProps = {
  tasks: Array<Task>;
};

export const CardList: React.FC<CardProps> = ({ tasks }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);

  const modalHandler = (taskId: number): void => {
    setIsVisible((prevVisible) => !prevVisible);
    setCurrentTaskId(taskId);
  };

  const deleteHandler = async (taskId: number) => {
    console.log('삭제~');
    const response = await fetch(`http://52.79.68.54:8080/task/${taskId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    setIsVisible((prevVisible) => !prevVisible);
  };

  return (
    <CardListLayout>
      {tasks.map((item: Task) => (
        <Card
          mode="default"
          key={item.taskId}
          title={item.title}
          contents={item.contents}
          platform={item.platform}
          modalHandler={() => modalHandler(item.taskId)}
        />
      ))}
      {isVisible && (
        <Modal
          alertText="선택한 카드를 삭제할깝쇼?"
          onClose={() => {
            if (currentTaskId !== null) {
              modalHandler(currentTaskId);
            }
          }}
          onClick={() => {
            if (currentTaskId !== null) {
              deleteHandler(currentTaskId);
            }
          }}
        />
      )}
    </CardListLayout>
  );
};

export const CardListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
