import './style.css';

export const LoginPage = ({ session }) => {
  if (session !== undefined && session !== 'no-session') {
    window.location.href = '/';
    return null;
  }
  
  const element = document.createElement('div');
  element.classList.add('page');
  element.innerHTML = `
    <div class="container">
      <h1>Přihlásit</h1>
      <form>
        <label class="form-field">E-mail: <input type="email" /></label>
        <label class="form-field">Heslo: <input type="password" /></label>
        <button type="submit">Přihlásit</button>
      </form>
    </div>
  `;

  element.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = element.querySelector('.email-input').value;
    const password = element.querySelector('.email-input').value;

    fetch('https://apps.kodim.cz/daweb/shoplist/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          window.location.href = '/';
        } else {
          element.replaceWith(RegisterPage({ error: data.errors[0]}));
        }
      });
  });

  return element;
};
