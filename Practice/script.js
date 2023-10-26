// JavaScript code for live preview
function changeColor() {
  debugger;
  // Get the CSS code from the textarea
  const cssCode = document.getElementById("css-editor").value;

  // Get the preview element
  const preview = document.getElementById("preview");

  // Apply the CSS code to the preview element's style
  preview.style.cssText = cssCode;
}
