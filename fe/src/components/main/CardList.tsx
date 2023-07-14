import styled from 'styled-components';
import { Card } from '../card/Card';
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
  console.log(tasks);

  return (
    <CardListLayout>
      {isAddMode && (
        <AddModeCard
          processId={processId}
          onCancel={onCancel}
          onNewTask={onNewTask}
        />
      )}
      {tasks.map((item: TaskType) => (
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
