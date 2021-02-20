import axios from 'axios';

const usersDiv = document.querySelector('#users');

const renderUsers = async (users) => {
  try {
    const usersDivUlChild = document.createElement('ul');
    users.map((user) => {
      const li = document.createElement('li');
      li.innerHTML = user.name;
      usersDivUlChild.appendChild(li);
    });
    usersDiv.appendChild(usersDivUlChild);
    //usersDiv.innerHTML = users.map

    //JSON.stringify(users);
  } catch (err) {
    console.log(err);
  }
};

const init = async () => {
  try {
    const users = (await axios.get('/api/users')).data;
    const restaurants = (await axios.get('/api/restaurants')).data;
    renderUsers(users);
  } catch (ex) {
    console.log(ex);
  }
};
init();
