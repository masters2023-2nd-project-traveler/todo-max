import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ColumnItem } from './ColumnItem';

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

  if (todoListData === null) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <ColumnLayout>
        {todoListData.map((item: TodoItemType) => (
          <ColumnItem
            key={item.processId}
            title={item.name}
            tasks={item.tasks}
            processId={item.processId}
            onNewTask={handleNewTask}
            onTaskDelete={handleTaskDelete}
          />
        ))}
      </ColumnLayout>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  padding: 32px 80px 0;
  background-color: ${({ theme: { colors } }) => colors.surfaceAlt};
`;

const ColumnLayout = styled.div`
  width: 300px;
  display: flex;
  gap: 24px;
`;
