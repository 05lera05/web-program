const textInput = document.getElementById('textInput');
const sizeRange = document.getElementById('sizeRange');
const qrContainer = document.getElementById('qr');
const saveBtn = document.getElementById('saveBtn');

let qr;

function generateQR() {
  qrContainer.innerHTML = '';
  qr = new QRCode(qrContainer, {
    text: textInput.value,
    width: sizeRange.value,
    height: sizeRange.value
  });
}

textInput.addEventListener('input', generateQR);
sizeRange.addEventListener('input', generateQR);

saveBtn.addEventListener('click', () => {
  const img = qrContainer.querySelector('img');
  const link = document.createElement('a');
  link.href = img.src;
  link.download = 'qr-code.png';
  link.click();
});

generateQR();
