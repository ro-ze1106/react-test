// このファイル内だけeslintで指定した機能offにする場合
/* eslint react-hooks/exhaustive-deps: off */
import { useEffect, useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage.jsx";

export const App = () => {
  console.log("first");

  // State 定義
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // ボタンを押した時に実行する関数を定義
  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    console.log("useEff");
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}> こんにちは </h1>
      <ColoredMessage color="blue"> お元気ですか？ </ColoredMessage>
      <ColoredMessage color="pink"> 元気です　</ColoredMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
    </>
  );
};
