// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".glass.svelte-1hzt5vn{margin:5vh 5vw;width:100%;box-shadow:0 1rem 5rem 0 rgba(0, 0, 0, 0.3);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);border-radius:6px;border:1px solid rgba(255, 255, 255, 0.15)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}