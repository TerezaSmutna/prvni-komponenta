import { Header } from './Header/index.js';
import { HomePage } from './HomePage/index.js';
import { LoginPage } from './LoginPage/index.js';
import { RegisterPage } from './RegisterPage/index.js';
import './style.css';

document.querySelector('#app').append(Header());

window.addEventListener('DOMContentLoaded', () => {
  const appElement = document.querySelector('#app');
  
  const { pathname } = window.location;
  console.log(pathname);
  if (pathname === '/') {
    appElement.append(HomePage());
  } else if (pathname === '/login') {
    appElement.append(LoginPage());
  } else if (pathname === '/register') {
    appElement.append(RegisterPage({}));
  }
});


