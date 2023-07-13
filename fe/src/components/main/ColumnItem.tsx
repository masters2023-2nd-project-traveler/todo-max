import { CardList } from './CardList';
import { ColumnTitle } from './ColumnTitle';

type ColumnItemProps = {
  title: string;
  tasks: Array<{
    taskId: number;
    title: string;
    contents: string;
    platform: string;
  }>;
};

export const ColumnItem: React.FC<ColumnItemProps> = ({ title, tasks }) => {
  console.log('tasks', tasks);
  console.log('tasks', tasks.length);
  const numberOfTasks = tasks.length;

  return (
    <div>
      <ColumnTitle title={title} numberOfTasks={numberOfTasks} />
      <CardList tasks={tasks} />
    </div>
  );
};

export default ColumnItem;
