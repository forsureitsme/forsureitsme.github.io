// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root{--blue:#52cbeb;--cyan:#b9e3fa;--violet:#3e204e;--purple:#6c4aac;--magenta:#f1547d;--pink:#d66cc7;color:white;text-shadow:0 0 0.1rem;min-height:100vh;font-family:'Fredoka', sans-serif;overflow:hidden}body{padding:0;margin:0}.app.svelte-16fhtm8{height:100vh;overflow-y:auto}main.svelte-16fhtm8{margin:1em}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}