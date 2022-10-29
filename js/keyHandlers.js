const input = document.querySelector("#input");

export function handleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}
export function handleClearButton() {
  input.value = "";
  input.focus();
}
