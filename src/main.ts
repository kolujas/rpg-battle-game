import "./style.css";

import homeHTML from "./views/home.html?raw";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = homeHTML;
