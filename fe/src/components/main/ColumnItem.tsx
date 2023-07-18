import React, { useState } from 'react';
import { CardList } from './CardList';
import { ColumnTitle } from './ColumnTitle';

type TaskType = {
  taskId: number;
  title: string;
  contents: string;
  platform: string;
};

type ColumnItemProps = {
  processId: number;
  title: string;
  tasks: TaskType[];
  onNewTask: (newTask: AddTaskType) => void;
  onTaskDelete: (taskId: number) => void;
  onTitleChange: (e, processId: number) => void;
  onColumnDelete: (processId: number) => void;
};

type AddTaskType = TaskType & { processId: number };

export const ColumnItem: React.FC<ColumnItemProps> = ({
  processId,
  title,
  tasks,
  onNewTask,
  onTaskDelete,
  onTitleChange,
  onColumnDelete,
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
        onTitleChange={onTitleChange} //
        processId={processId} //
        onColumnDelete={onColumnDelete}
      />

      <CardList
        processId={processId}
        tasks={tasks}
        isAddMode={isAddMode}
        onCancel={handleAddModeClick}
        onNewTask={onNewTask}
        onTaskDelete={onTaskDelete}
      />
    </div>
  );
};

export default ColumnItem;
