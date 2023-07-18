import { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';
import { Button } from '../buttons/Button';

type ColumnTitleProps = {
  title: string;
  numberOfTasks: number;
  onAddClick?: () => void;
  onTitleChange: (e, processId: number) => void;
  processId: number;
};

export const ColumnTitle: React.FC<ColumnTitleProps> = ({
  title,
  numberOfTasks,
  onAddClick,
  onTitleChange,
  processId,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '24px';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [newTitle, isEditing]);

  const handleEditTitle = () => {
    setIsEditing((prev) => !prev);
  };
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleBlur = (e) => {
    if (e.target.value.length === 0) return;
    handleSubmit(e, processId);
  };

  const handleSubmit = async (e, processId: number) => {
    console.log('해당 Process ID: ', processId);
    console.log('Submitted 컬럼 title: ', newTitle);

    const response = await fetch(`/process/${processId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        processName: newTitle,
      }),
    });

    const responseData = await response.json();

    console.log(responseData);
    setIsEditing((prev) => !prev);
    onTitleChange(e, processId);
  };

  return (
    <TitleLayout>
      <div className="textArea">
        {isEditing ? (
          <textarea
            ref={textAreaRef}
            placeholder="제목을 입력하세요"
            type="text"
            maxLength={50}
            value={newTitle}
            onChange={handleTitleChange}
            onBlur={handleBlur}
            rows={1}
          />
        ) : (
          <h2 onDoubleClick={handleEditTitle}>{title}</h2>
        )}
        <p>{numberOfTasks}</p>
      </div>
      <div className="iconBtns">
        <Button
          variant="ghost"
          pattern="icon-only"
          icon="plus"
          onClick={onAddClick}
        />
        <Button variant="ghost" pattern="icon-only" icon="close" />
      </div>
    </TitleLayout>
  );
};

export const TitleLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 300px;
  padding: 0px 16px;

  .textArea,
  .iconBtns {
    display: flex;
    align-items: center;
  }

  .textArea {
    gap: 8px;
    box-sizing: border-box;

    & h2 {
      font: ${({ theme: { fonts } }) => fonts.displayB16};
      color: ${({ theme: { colors } }) => colors.textBold};
      width: 150px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & textarea {
      font: ${({ theme: { fonts } }) => fonts.displayM14};
      color: ${({ theme: { colors } }) => colors.textBold};
      display: flex;
      box-sizing: border-box;
      height: 24px;
      padding: 0px 8px;
      align-items: center;
      width: 150px;
      gap: 8px;
      border: 1px solid ${({ theme: { colors } }) => colors.borderDefault};
      border-radius: ${({ theme: { border } }) => border.radius8};
      background-color: ${({ theme: { colors } }) => colors.surfaceDefault};
      border: none;
      resize: none;
      white-space: pre-wrap;
    }

    & p {
      font: ${({ theme: { fonts } }) => fonts.displayM12};
      color: ${({ theme: { colors } }) => colors.textWeak};
      gap: 4px;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${({ theme: { colors } }) => colors.borderDefault};
      border-radius: ${({ theme: { border } }) => border.radius8};
    }
  }
`;
