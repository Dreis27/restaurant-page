function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
  }

  function createFood(src, text, price, alt) {
    const food = document.createElement('div');
    food.classList.add('food');
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
  
    const description = document.createElement('div');
    description.classList.add('description');
  
    const foodName = document.createElement('h3');
    foodName.textContent = text;
  
    const foodPrice = document.createElement('h2');
    foodPrice.textContent = price;
  
    description.appendChild(foodName);
    description.appendChild(foodPrice);
  
    food.appendChild(img);
    food.appendChild(description);
    return food;
  }

  function loadMenu() {
    const content = document.getElementById('main');
    content.classList.add('grid-lay');
    content.classList.remove('flex-lay');
  
    content.textContent = '';
    setBtnActive('menu');
  
    const foods = [
      createFood(
        '',
        'boorgir',
        '20EUR',
        'boorgir'
      ),
      createFood(
        '',
        'coffee',
        '50EUR',
        'coffee'
      ),
      createFood(
        '',
        'nut',
        '10EUR',
        'soup'
      ),
      createFood(
        '',
        'potato',
        '100EUR',
        'potato'
      ),
    ];
  
    foods.forEach((food) => {
      content.appendChild(food);
    });
  }
  
  export {loadMenu};