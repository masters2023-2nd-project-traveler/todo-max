import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ColumnItem } from './ColumnItem';

type TodoItem = {
  processId: number;
  processName: string;
  tasks: Array<{
    taskId: number;
    title: string;
    contents: string;
    platform: string;
  }>;
};

export const ColumnList = () => {
  const [todoListData, setTodoListData] = useState<TodoItem[] | null>(null);

  useEffect(() => {
    fetch('http://52.79.68.54:8080/todolist')
      .then((response) => response.json())
      .then((data) => {
        setTodoListData(data.message);
        console.log(todoListData);
      });
  }, []);

  if (todoListData === null) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <ColumnLayout>
        {todoListData.map((item: TodoItem) => (
          <ColumnItem
            key={item.processId}
            title={item.processName}
            tasks={item.tasks}
            processId={item.processId}
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
