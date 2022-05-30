import "./style.css";
import { App } from "./components/App/App";

import { Logger } from "./components/index.check";

const render = (el) => {
  Logger.Success("render component");
  const root = document.getElementById("root");
  root.classList.add("container");
  root.appendChild(el);
};

render(App());
