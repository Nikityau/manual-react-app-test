import "./Hello.scss";

import hello from "./Hello.module.scss";

//Pizdec

export const Hello = (who) => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");

  div.classList.add("hello");
  h1.classList.add(hello.H1);

  div.innerHTML = `Hello, ${who}!!!`;

  return div;
};
