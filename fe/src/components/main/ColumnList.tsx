import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ColumnItem } from './ColumnItem';
import { FloatingActionBtn } from './FloatingAction';

type TaskType = {
  taskId: number;
  title: string;
  contents: string;
  platform: string;
};

type TodoItemType = {
  processId: number;
  name: string;
  tasks: TaskType[];
};

type AddTaskType = TaskType & { processId: number };

export const ColumnList = () => {
  const [todoListData, setTodoListData] = useState<TodoItemType[] | null>(null);
  const horizontalScrollRef = useRef(null);

  useEffect(() => {
    const fetchTodoList = async () => {
      const response = await fetch('/todolist');
      const todoData = await response.json();
      setTodoListData(todoData.message);
    };
    fetchTodoList();
  }, []);

  const handleNewTask = (newTask: AddTaskType) => {
    setTodoListData((prevData) => {
      if (!prevData) return null;

      return prevData.map((item) =>
        item.processId === newTask.processId
          ? { ...item, tasks: [newTask, ...item.tasks] }
          : item,
      );
    });
  };

  const handleTaskDelete = (taskId: number) => {
    setTodoListData((prevData) => {
      if (!prevData) return null;

      return prevData.map((item) =>
        item.tasks.some((task) => task.taskId === taskId)
          ? {
              ...item,
              tasks: item.tasks.filter((task) => task.taskId !== taskId),
            }
          : item,
      );
    });
  };

  const handleTitleChange = (e, processId) => {
    const newName = e.target.value;
    setTodoListData(
      (prevData) =>
        prevData &&
        prevData.map((item) =>
          item.processId === processId ? { ...item, name: newName } : item,
        ),
    );
  };

  const handleNewColumn = () => {
    setTodoListData((prevData) => {
      if (!prevData) return null;

      const newProcessId =
        Math.max(...prevData.map((item) => item.processId)) + 1;

      return [
        ...prevData,
        {
          processId: newProcessId,
          name: '새 리스트',
          tasks: [],
        },
      ];
    });
  };

  const handleColumnDelete = (processId: number) => {
    setTodoListData((prevData) => {
      if (!prevData) return null;

      return prevData.filter((item) => item.processId !== processId);
    });
  };

  const scrollHorizontally = (e) => {
    if (horizontalScrollRef.current) {
      horizontalScrollRef.current.scrollLeft += e.deltaY;
    }
  };

  if (todoListData === null) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <ColumnLayout onWheel={scrollHorizontally} ref={horizontalScrollRef}>
        {todoListData.map((item: TodoItemType) => (
          <ColumnItem
            key={item.processId}
            title={item.name}
            tasks={item.tasks}
            processId={item.processId}
            onNewTask={handleNewTask}
            onTaskDelete={handleTaskDelete}
            onTitleChange={handleTitleChange}
            onColumnDelete={handleColumnDelete}
          />
        ))}
      </ColumnLayout>
      <FloatingActionBtn onNewColumn={handleNewColumn} />
    </MainLayout>
  );
};

const MainLayout = styled.div`
  padding: 32px 80px;
  height: 85vh;

  background-color: ${({ theme: { colors } }) => colors.surfaceAlt};
`;

const ColumnLayout = styled.div`
  width: auto;
  display: flex;
  gap: 24px;
  height: 100%;
  overflow: hidden;
  overflow-x: auto;
`;
