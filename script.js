const pxInput = document.getElementById('pxInput');
const baseInput = document.getElementById('baseInput');
const vwOutput = document.getElementById('vwOutput');
const displayPx = document.getElementById('displayPx');
const displayBase = document.getElementById('displayBase');

function convertPxToVw(px, baseWidth) {
  if (!px || !baseWidth || baseWidth == 0) return '0vw';
  return (px / baseWidth * 100) + 'vw';
}

function updateOutput() {
  const px = parseFloat(pxInput.value);
  const base = parseFloat(baseInput.value) || 1920;

  if (isNaN(px)) {
    vwOutput.textContent = '0vw';
    displayPx.textContent = '–';
    displayBase.textContent = base;
    return;
  }

  const result = convertPxToVw(px, base);

  vwOutput.textContent = result;
  displayPx.textContent = px;
  displayBase.textContent = base;
}

pxInput.addEventListener('input', updateOutput);
baseInput.addEventListener('input', updateOutput);
