import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name is Motohiro Takagi", "I am Frontend Engineer"],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
