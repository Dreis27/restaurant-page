function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.textContent = text;
    btn.classList.add('tab');
    return btn;
}
function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
  }

function createHeader(id){
    const header = document.createElement('header');
    header.setAttribute('id', id);

    const nav = document.createElement('nav');

    const homeBtn = createBtn('home', 'home');
    const menuBtn = createBtn('menu', 'menu');
    const contactBtn = createBtn('contact', 'contact');
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    header.appendChild(nav);
    return header;
}

function loadPage(){
    const content = document.getElementById('content');

    const header = createHeader('header');
    content.appendChild(header);

    const main = createMain('main');
    content.appendChild(main);
}

export { loadPage };