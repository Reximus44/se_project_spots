export function setButtonText(
  btn,
  isLoading,
  defaultText = "Save",
  loadingText = "Saving..."
) {
  if (isLoading) {
    // set the loading text
    btn.textContent = loadingText;
  } else {
    // set not loading text
    btn.textContent = defaultText;
  }
}

export function setSubmitButtonText(button, text) {
  button.textContent = text;
}
