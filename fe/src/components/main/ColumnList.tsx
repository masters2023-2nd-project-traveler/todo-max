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
  processName: string;
  tasks: TaskType[];
};

type AddTaskType = TaskType & { processId: number };

export const ColumnList = () => {
  const [todoListData, setTodoListData] = useState<TodoItemType[] | null>(null);

  useEffect(() => {
    fetch('http://52.79.68.54:8080/todolist')
      .then((response) => response.json())
      .then((data) => {
        setTodoListData(data.message);
        console.log(todoListData);
      });
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

  if (todoListData === null) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <ColumnLayout>
        {todoListData.map((item: TodoItemType) => (
          <ColumnItem
            key={item.processId}
            title={item.processName}
            tasks={item.tasks}
            processId={item.processId}
            onNewTask={handleNewTask}
          />
        ))}
      </ColumnLayout>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  padding: 32px 80px 0;
  background-color: ${(props) => props.theme.colors.surfaceAlt};
`;

const ColumnLayout = styled.div`
  width: 300px;
  display: flex;
  gap: 24px;
`;
