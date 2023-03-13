let elCartBtn = document.querySelector('.hero__cart-btn');

const addClassName = () => {
  if (elCartBtn.classList[1] == 'add') {
    elCartBtn.classList.remove('loading');
  } else {
    elCartBtn.classList.add('loading');
  }

  setTimeout(() => {
    elCartBtn.classList.remove('loading');
    elCartBtn.classList.add('add');
  }, 1000);
};

let count = 1;
let countNumber = document.querySelector('.hero__count-content');
let countBox = document.querySelector('.hero__count-box');
countNumber.setAttribute('data-content', count);
const ErrMessage = document.createElement('p');

const PlusCount = () => {
  countNumber.innerHTML = count += 1;
  countNumber.setAttribute('data-content', (count += 0));
  
  if (count >= 2) {
    countBox.removeChild(ErrMessage ? ErrMessage : '');
  }
};

const MinusCount = () => {
  if (count != 1) {
    countNumber.innerHTML = count -= 1;
    countNumber.setAttribute('data-content', (count -= 0));
  } else {
    countBox.appendChild(ErrMessage);
    ErrMessage.innerHTML = 'Minimum Product Number 1';
    ErrMessage.classList.add('hero__err-message');
  }
};
