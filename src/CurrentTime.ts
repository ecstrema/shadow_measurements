import { TimeProvider } from "./Providers/Time";

export class CurrentTime {
  private dateInput: HTMLInputElement;

  constructor() {
    const el = document.createElement("div");
    Object.assign(el.style, {
      position: "absolute",
      top: "10px",
      width: "100%",
      textAlign: "center",
      zIndex: "100",
      display: "block",
      color: "#00e6e6",
    } as Partial<CSSStyleDeclaration>);

    this.dateInput = document.createElement("input");
    this.dateInput.type = "datetime-local";
    Object.assign(this.dateInput.style, {
      width: "200px",
      height: "30px",
      fontSize: "16px",
      textAlign: "center",
      color: "#00e6e6",
      backgroundColor: "#333",
      border: "none",
      borderRadius: "3px",
      borderBottom: "1px solid #00e6e6",
    } as Partial<CSSStyleDeclaration>);
    this.updateDateInputValue();

    this.dateInput.addEventListener("change", this.dateChanged.bind(this));
    this.dateInput.addEventListener("focusin", () => {
      TimeProvider.play = false;
    });
    this.dateInput.addEventListener("focusout", () => {
      TimeProvider.play = true;
    });
    el.appendChild(this.dateInput);

    document.body.appendChild(el);
    this.update();
  }

  private dateChanged() {
    TimeProvider.play = false;
    TimeProvider.time = this.dateInput.valueAsNumber;
  }

  private updateDateInputValue() {
    this.dateInput.value = new Date(TimeProvider.time).toISOString().slice(0, -3);
  }

  update() {
    if (!this.dateInput.matches(":focus"))
      this.updateDateInputValue();
  }
}
