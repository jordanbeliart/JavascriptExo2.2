var entry = document.getElementById('txtEntry');
// 'keyup' déclenche une action dès que je relache la pression d'une touche
entry.addEventListener('keyup', press);
function press(){
  alert(entry.value);
}
