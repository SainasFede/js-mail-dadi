const btnDadi = document.getElementById('dado');
const boxEsito = document.getElementById('box-esito');
const esitoDadi = document.getElementById('Esito');
const esitoPlayer = document.getElementById('dado-user');
const esitoBot = document.getElementById('dado-bot');

document.getElementById('dado').addEventListener('click', function(){
  let playerDado = Math.ceil(Math.random() * 6);
  let botDado = Math.ceil(Math.random() * 6);

  esitoPlayer.innerHTML = 'Ho fatto' + ' ' + playerDado;
  esitoBot.innerHTML = 'Io invece' + ' ' + botDado;
  document.getElementById('box-esito').classList.remove('hidden');

  if (playerDado > botDado) {
    esitoDadi.innerHTML = "Impossibile!! Hai vinto, staaai barando!!"
  } else if (playerDado === botDado) {
    esitoDadi.innerHTML = "Tutta fortuna, il Campione vincerà al prossimo lancio"
  } else {
    esitoDadi.innerHTML = "Non puoi battere il Campione"
  };
});

