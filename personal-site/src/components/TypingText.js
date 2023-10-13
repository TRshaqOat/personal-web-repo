import React from "react";
import Typed from "react-typed";

function TypingText({ text, speed }) {
  return <Typed strings={[text]} typeSpeed={speed} />;
}

export default TypingText;
