const pxInput = document.getElementById('pxInput');
const baseInput = document.getElementById('baseInput');
const vwOutput = document.getElementById('vwOutput');

function convertPxToVw(px, baseWidth = 1920) {
  if (!px || !baseWidth || baseWidth == 0) return '0vw';
  return (px / baseWidth * 100).toFixed(4) + 'vw';
}

function updateOutput() {
  const px = parseFloat(pxInput.value);
  const base = parseFloat(baseInput.value) || 1920;
  vwOutput.textContent = convertPxToVw(px, base);
}

pxInput.addEventListener('input', updateOutput);
baseInput.addEventListener('input', updateOutput);
