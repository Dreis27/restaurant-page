function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
  }

  function createAboutSection() {
    const about = document.createElement('section');
    about.classList.add('section');
  
    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'Welcome to Our Restaurant';
  
    about.appendChild(title);
  
    const para = document.createElement('p');
    para.classList.add('section-description');
    para.textContent = 'Come and enjoy our delicious dishes, crafted with passion and love.';
  
    about.appendChild(para);
    return about;
  }

  function loadHome() {
    const content = document.getElementById('main');
    content.classList.add('flex-lay');
    content.classList.remove('grid-lay');
  
    content.textContent = '';
  
    const aboutSection = createAboutSection();
  
    setBtnActive('home');
  
    content.appendChild(aboutSection);
  }