import { Button } from './buttons/Button';

export function DummyTwo() {
  return (
    <>
      <Button variant="contained" pattern="text-only" text="취소" />
      <Button variant="contained" pattern="text-only" text="저장" />
      <Button variant="contained" pattern="text-only" text="등록" />
      <Button variant="contained" pattern="text-only" text="삭제" />

      <Button
        variant="contained"
        pattern="icon-text"
        text="닫기"
        icon="close"
      />
      <Button variant="ghost" pattern="icon-only" icon="edit" />
      <Button variant="ghost" pattern="icon-only" icon="close" />
      <Button variant="ghost" pattern="icon-only" icon="history" />
      <Button variant="ghost" pattern="icon-only" icon="plus" />
    </>
  );
}
