# 리액트 클립보드

![Alt text](%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C.gif)

리액트에서 클립보드 사용예시입니다.

```tsx
    try {
      navigator.clipboard.writeText(복사할 내용);
      alert(`복사 되었습니다.`);
    } catch (error) {
      alert("복사 실패");
      console.error("에러에러");
    }
```

사용할때 트라이 캐치문으로 에러핸들링 해줘야합니다.
