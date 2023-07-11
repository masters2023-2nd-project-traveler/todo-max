import React, { useState } from 'react';
import { Button } from './buttons/Button';

export function Dummy() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const isInputEmpty = inputValue.length === 0;

  return (
    <>
      <input type="text" onChange={handleInputChange} title="입력" />
      <Button
        variant="contained"
        pattern="text-only"
        text="등록"
        disabled={isInputEmpty}
      />
      <Button
        variant="contained"
        pattern="text-only"
        text="저장"
        icon="edit"
        disabled={isInputEmpty}
      />
      <Button variant="ghost" pattern="text-only" text="기록 전체 삭제" />
    </>
  );
}
