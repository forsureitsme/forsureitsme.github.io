// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root{background-color:black}:root::before,:root::after{content:'';position:fixed;inset:0;z-index:-1}:root::before{background-image:linear-gradient(\n      to right,\n      var(--violet) 0%,\n      var(--purple) 50%,\n      var(--violet) 100%\n    );-webkit-mask:linear-gradient(to top, white 0%, transparent 100%);mask:linear-gradient(to top, white 0%, transparent 100%)}:root::after{background-image:linear-gradient(\n      to right,\n      var(--magenta) 0%,\n      var(--pink) 50%,\n      var(--magenta) 100%\n    );-webkit-mask:linear-gradient(to top, transparent 0%, white 100%);mask:linear-gradient(to top, transparent 0%, white 100%)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}