const form = document.getElementById('form-reporte');
const toggle = document.getElementById('toggle-anonimo');
const msg = document.getElementById('msg-anonimo');
const descripcion = document.getElementById('descripcion');
const contador = document.getElementById('contador');
const errorDesc = document.getElementById('error-descripcion');

const payload = { descripcion: '', isAnonymous: false };

function reiniciarPayload() {
  payload.descripcion = '';
  payload.isAnonymous = false;
}

toggle.addEventListener('change', () => {
  payload.isAnonymous = toggle.checked;
  msg.hidden = !toggle.checked;
});

descripcion.addEventListener('input', () => {
  contador.textContent = `${descripcion.value.length} / 500`;
  if (descripcion.value.trim()) errorDesc.hidden = true;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = descripcion.value.trim();

  if (!texto) {
    errorDesc.textContent = 'Por favor describe el incidente antes de enviar.';
    errorDesc.hidden = false;
    descripcion.focus();
    return;
  }

  payload.descripcion = texto;
  console.log('Payload:', payload);

  // Recuperación tras envío válido
  form.reset();
  contador.textContent = '0 / 500';
  msg.hidden = true;
  reiniciarPayload();
});