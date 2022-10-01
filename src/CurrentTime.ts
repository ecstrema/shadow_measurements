import { TimeProvider } from "./Providers/Time";

export class CurrentTime {
  private el: HTMLDivElement;
  constructor() {
    this.el = document.createElement("div");
    Object.assign(this.el.style, {
      position: "absolute",
      top: "10px",
      width: "100%",
      textAlign: "center",
      zIndex: "100",
      display: "block",
      color: "#00e6e6",
    } as Partial<CSSStyleDeclaration>);

    document.body.appendChild(this.el);
    this.update();
  }

  update() {
    this.el.innerText = new Date(TimeProvider.time + 7_200_000).toUTCString();
  }
}
