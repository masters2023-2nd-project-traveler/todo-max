import { useState, useEffect } from 'react';
import { Card } from '../card/Card';

type TaskType = {
  taskId: number;
  title: string;
  contents: string;
  platform: string;
};

type AddModeCardProps = {
  processId: number;
  onCancel: () => void;
  onNewTask: (newTask: AddTaskType) => void;
};

type AddTaskType = TaskType & { processId: number };

export const AddModeCard: React.FC<AddModeCardProps> = ({
  processId,
  onCancel,
  onNewTask,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    setIsMobile(mobile);
  }, []);

  const handleSubmit = (title: string, body: string) => {
    console.log('Process ID: ', processId);
    console.log('Submitted title: ', title);
    console.log('Submitted body: ', body);
    console.log('User environment: ', isMobile ? 'Mobile' : 'Web');

    fetch('/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        processId: processId,
        title: title,
        contents: body,
        platform: isMobile ? 'Mobile' : 'Web',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        onNewTask(data.message);
        onCancel();
      });
  };

  return (
    <Card
      mode="addEdit"
      title="제목을 입력하세요"
      contents="내용을 입력하세요"
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};
