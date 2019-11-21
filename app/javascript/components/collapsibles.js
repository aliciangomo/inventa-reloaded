const toggleCollapsible = () => {

  const ideaButton = document.querySelector('.btn-idea');
  const busButton = document.querySelector('.btn-bus');
  const desButton = document.querySelector('.btn-des');
  const proButton = document.querySelector('.btn-pro');
  const groButton = document.querySelector('.btn-gro');

  const idea = document.querySelector('.idea-content');
  const bus = document.querySelector('.bus-content');
  const des = document.querySelector('.des-content');
  const pro = document.querySelector('.pro-content');
  const gro = document.querySelector('.gro-content');

  ideaButton.addEventListener("click", (event) => {
      gro.classList.add('d-none');
      bus.classList.add('d-none');
      des.classList.add('d-none');
      pro.classList.add('d-none');
      idea.classList.remove('d-none');
  });

  busButton.addEventListener("click", (event) => {
      gro.classList.add('d-none');
      bus.classList.remove('d-none');
      des.classList.add('d-none');
      pro.classList.add('d-none');
      idea.classList.add('d-none');
  });

  desButton.addEventListener("click", (event) => {
      gro.classList.add('d-none');
      bus.classList.add('d-none');
      des.classList.remove('d-none');
      pro.classList.add('d-none');
      idea.classList.add('d-none');

  proButton.addEventListener("click", (event) => {
      gro.classList.add('d-none');
      bus.classList.add('d-none');
      des.classList.add('d-none');
      pro.classList.remove('d-none');
      idea.classList.add('d-none');
  });

  groButton.addEventListener("click", (event) => {
      gro.classList.remove('d-none');
      bus.classList.add('d-none');
      des.classList.add('d-none');
      pro.classList.add('d-none');
      idea.classList.add('d-none');
  });

};

export {toggleCollapsible};
