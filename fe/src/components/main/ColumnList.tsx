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
        // console.log(data);
        console.log(todoListData);
      });
  }, []);

  if (todoListData === null) {
    return <div>Loading...</div>; // 데이터를 로딩하는 동안 표시될 메시지입니다.
  }

  return (
    <ColumnLayout>
      {todoListData.map((item: TodoItem) => (
        <ColumnItem
          key={item.processId}
          title={item.processName}
          tasks={item.tasks}
        />
      ))}
    </ColumnLayout>
  );
};

export const ColumnLayout = styled.div`
  width: 300px;
  display: flex;
  gap: 24px;
`;
