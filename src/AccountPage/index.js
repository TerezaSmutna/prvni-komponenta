export const AccountPage = (props) => {
  let { session } = props;
  if (session === 'no-session') {
    window.location.href = '/login';
    return null;
  }

  const element = document.createElement('div');
  element.classList.add('odhlaseni');

  let userContent2 = `<div class="user2"></div>`;

  if (session !== undefined && session !== 'no-session') {
    userContent2 = `<div class="user2">${session.user}</div>`;
  }

  element.innerHTML = `
    <div class="container">
      <h1>Účet</h1>
      ${userContent2}<br>
      <button class="tlacitko">odhlásit</button>
    </div>
    `;


      element.querySelector('.tlacitko').addEventListener('click', () => {
      let authToken = window.localStorage.getItem('authToken');       
      fetch('https://apps.kodim.cz/daweb/shoplist/api/me/logout', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      }).then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status === 'success') {
            session = 'no-session';
            localStorage.removeItem("authToken");
            console.log('odlaseno');
            window.location.href = '/login';
          }
          element.replaceWith(App({ session: session }));
        });
        })
   
  return element;
};
