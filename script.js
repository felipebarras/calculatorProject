//  declarando o display aqui, pois foi chamado várias vezes repetidamente
const display = document.querySelector('#resultado');

const input = (num) => {
  const numeroInputado = display.innerHTML;
  return (display.innerHTML = numeroInputado + num);
};

const clean = () => {
  return (display.innerHTML = '');
};

const erase = () => {
  const resultado = display.innerHTML;
  return (display.innerHTML = resultado.substring(0, resultado.length - 1));
};

const count = () => {
  const resultado = display.innerHTML;
  if (!resultado) return;
  return (display.innerHTML = eval(resultado));
};
