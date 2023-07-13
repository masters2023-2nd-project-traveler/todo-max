import styled from 'styled-components';
import { Card } from '../card/Card';

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
  console.log(tasks);

  return (
    <CardListLayout>
      {tasks.map((item: Task) => (
        <Card
          mode="default"
          key={item.taskId}
          title={item.title}
          contents={item.contents}
          platform={item.platform}
        ></Card>
      ))}
    </CardListLayout>
  );
};

export const CardListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
