import React, { useState } from 'react';
import { Card } from '../card/Card';
import { CardList } from './CardList';
import { ColumnTitle } from './ColumnTitle';

type ColumnItemProps = {
  processId: number;
  title: string;
  tasks: Array<{
    taskId: number;
    title: string;
    contents: string;
    platform: string;
  }>;
};

export const ColumnItem: React.FC<ColumnItemProps> = ({
  processId,
  title,
  tasks,
}) => {
  console.log('tasks', tasks);
  console.log('tasks', tasks.length);

  const numberOfTasks = tasks.length;
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAddModeClick = () => {
    setIsAddMode(!isAddMode);
  };

  return (
    <div>
      <ColumnTitle
        title={title}
        numberOfTasks={numberOfTasks}
        onAddClick={handleAddModeClick}
      />

      <CardList processId={processId} tasks={tasks} isAddMode={isAddMode} />
    </div>
  );
};

export default ColumnItem;
