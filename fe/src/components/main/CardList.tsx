import React, { useState, useEffect, useRef } from 'react';
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
  onTaskDelete: (taskId: number) => void;
};

type AddTaskType = TaskType & { processId: number };

export const CardList: React.FC<CardProps> = ({
  tasks,
  isAddMode,
  processId,
  onCancel,
  onNewTask,
  onTaskDelete,
}) => {
  console.log('카드리스트 task', tasks);

  const [isVisible, setIsVisible] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);
  const [taskList, setTaskList] = useState<TaskType[]>(tasks);
  const verticalScrollRef = useRef(null);

  const scrollVertically = (e) => {
    // scrollHeight이 clientHeight보다 크면 스크롤 돼야함
    // 이 경우에만 세로 스크롤 고
    if (e.currentTarget.scrollHeight > e.currentTarget.clientHeight) {
      e.stopPropagation();
      e.currentTarget.scrollTop += e.deltaY;
    }
  };

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
    onTaskDelete(taskId);
  };

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  return (
    <CardListLayout onWheel={scrollVertically} ref={verticalScrollRef}>
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
  height: 100%;
  overflow-y: auto;
  overscroll-behavior: contain;
`;
