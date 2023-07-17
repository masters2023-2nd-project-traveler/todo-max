import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card } from '../card/Card';
import { Modal } from '../modal/Modal';
import { AddModeCard } from './AddModeCard';

type TaskType = {
  taskId: number;
  title: string;
  contents: string;
  platform: string;
};

type CardProps = {
  processId: number;
  tasks: TaskType[];
  isAddMode: boolean;
  onCancel: () => void;
  onNewTask: (newTask: AddTaskType) => void;
};

type AddTaskType = TaskType & { processId: number };

export const CardList: React.FC<CardProps> = ({
  tasks,
  isAddMode,
  processId,
  onCancel,
  onNewTask,
}) => {
  console.log('카드리스트 task', tasks);

  const [isVisible, setIsVisible] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);
  const [taskList, setTaskList] = useState<TaskType[]>(tasks);

  const modalHandler = (taskId: number): void => {
    setIsVisible((prevVisible) => !prevVisible);
    setCurrentTaskId(taskId);
  };

  const deleteHandler = async (taskId: number) => {
    console.log('삭제~');
    const response = await fetch(`/task/${taskId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);

    setIsVisible((prevVisible) => !prevVisible);
    setTaskList(taskList.filter((task) => task.taskId !== taskId));
  };

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  return (
    <CardListLayout>
      {isAddMode && (
        <AddModeCard
          processId={processId}
          onCancel={onCancel}
          onNewTask={onNewTask}
        />
      )}
      {taskList.map((item: TaskType) => (
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
