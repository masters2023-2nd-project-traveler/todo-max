import { useState, useEffect } from 'react';
import { Card } from '../card/Card';

type AddModeCardProps = {
  processId: number;
};

export const AddModeCard: React.FC<AddModeCardProps> = ({ processId }) => {
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
  };

  return (
    <Card
      mode="addEdit"
      title="제목을 입력하세요"
      contents="내용을 입력하세요"
      onSubmit={handleSubmit}
    />
  );
};
