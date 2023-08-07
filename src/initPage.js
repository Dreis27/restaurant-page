function initPage() {
    const content = document.getElementById('content');

    // Create header element
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const listItems = ['Home', 'Menu', 'Contact'];
    listItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = "#";
        a.textContent = item;
        li.appendChild(a);
        ul.appendChild(li);
    });
    nav.appendChild(ul);
    header.appendChild(nav);
    content.appendChild(header);

    // Create main content container
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content');

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const h1 = document.createElement('h1');
    h1.textContent = "Welcome to Our Restaurant";
    mainContent.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = "Come and enjoy our delicious dishes, crafted with passion and love.";
    mainContent.appendChild(p);

    const btn = document.createElement('a');
    btn.href = "#";
    btn.classList.add('btn');
    btn.textContent = "View Menu";
    mainContent.appendChild(btn);

    contentContainer.appendChild(mainContent);
    content.appendChild(contentContainer);
}

export { initPage };
