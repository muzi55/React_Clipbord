"use client";
import React, { useState } from "react";

const Clipboard = (): JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [contentText, setContentText] = useState<string>("이 텍스트가 복사됩니다.");

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContentText(input);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div onClick={onClickClipboard}>{contentText}</div>

      <form onSubmit={onSubmit}>
        <input type="text" className="border border-black" onChange={onChange} value={input} placeholder="복사할 문구를 써주세요" />
        <button className="border border-black">갱신</button>
      </form>
    </>
  );
};

export default Clipboard;
