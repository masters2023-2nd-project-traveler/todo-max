import styled from 'styled-components';
import { Card } from '../card/Card';
import { AddModeCard } from './AddModeCard';

type Task = {
  taskId: number;
  title: string;
  contents: string;
  platform: string;
};

type CardProps = {
  processId: number;
  tasks: Array<Task>;
  isAddMode: boolean;
};

export const CardList: React.FC<CardProps> = ({
  tasks,
  isAddMode,
  processId,
}) => {
  console.log(tasks);

  return (
    <CardListLayout>
      {isAddMode && <AddModeCard processId={processId} />}
      {tasks.map((item: Task) => (
        <Card
          mode="default"
          key={item.taskId}
          title={item.title}
          contents={item.contents}
          platform={item.platform}
        />
      ))}
    </CardListLayout>
  );
};

export const CardListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
