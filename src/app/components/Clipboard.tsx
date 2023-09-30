"use client";
import React, { useState } from "react";

const Clipboard = (): JSX.Element => {
  const [input, setInput] = useState<string>();

  const onClickClipboard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const contentText = e.currentTarget.textContent;

    try {
      if (contentText) {
        navigator.clipboard.writeText(contentText);
        alert(`복사 되었습니다.
복사된 문구 : ${contentText}`);
      }
    } catch (error) {
      alert("복사 실패");
      console.error("에러에러");
    }
  };

  return (
    <>
      <div onClick={onClickClipboard}>이 텍스트가 복사됩니다.</div>
    </>
  );
};

export default Clipboard;
