import { TimeProvider } from "./Providers/Time";

export class CurrentTime {
  private dateInput: HTMLInputElement;

  private stoppedByFocus = false;

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
      backgroundColor: "#8e8e8e",
      border: "none",
      borderRadius: "3px",
      borderBottom: "1px solid #00e6e6",
      padding: "0 5px",
    } as Partial<CSSStyleDeclaration>);
    this.updateDateInputValue();

    this.dateInput.addEventListener("change", this.dateChanged.bind(this));
    this.dateInput.addEventListener("focusin", () => {
      this.stoppedByFocus = TimeProvider.play;
      TimeProvider.play = false;
    });
    this.dateInput.addEventListener("focusout", () => {
      TimeProvider.play = this.stoppedByFocus;
      this.stoppedByFocus = false;
    });
    el.appendChild(this.dateInput);

    document.body.appendChild(el);
    this.update();
  }

  private dateChanged() {
    this.stoppedByFocus = false;
    TimeProvider.play = false;
    TimeProvider.setLocalTime(this.dateInput.valueAsNumber);
  }

  private updateDateInputValue() {
    this.dateInput.value = TimeProvider.localDate().toISOString().slice(0, -3);
  }

  update() {
    if (!this.dateInput.matches(":focus"))
      this.updateDateInputValue();
  }
}
