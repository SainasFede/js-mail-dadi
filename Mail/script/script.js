const listaMail = ['manu@mail', 'marco@mail', 'gigi@mail', 'pipposempre@mail'];
const outputMail = document.querySelector('h4')

console.log(listaMail);
let convalid = false;
let index;
console.log(convalid);
const mailUser = document.getElementById('mail-user');

document.getElementById('accedi').addEventListener('click', function(){
  for( i = 0; i < listaMail.length; i++){
    if (listaMail[i] == mailUser.value){
      convalid = true;
    };
  };

  
  if(convalid) {
    outputMail.innerHTML = 'Accedi';
  }else{
    outputMail.innerHTML = 'Utente non trovato';
  };
  
  document.getElementById('check').classList.remove('hide');
});

document.getElementById('reset').addEventListener('click', function () {
  document.getElementById('check').classList.add('hide');
  convalid = false;
});