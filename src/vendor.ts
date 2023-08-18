import {
  getUsers,
  createUser,
  overrideUser,
  updateUser,
  deleteUser,
  simultaneousRequest,
} from './index.js';

const getMethodBtn = <HTMLButtonElement>document.getElementById('get-btn');
const postMethodBtn = <HTMLButtonElement>document.getElementById('post-btn');
const putMethodBtn = <HTMLButtonElement>document.getElementById('put-btn');
const patchMethodBtn = <HTMLButtonElement>document.getElementById('patch-btn');
const deleteMethodBtn = <HTMLButtonElement>(
  document.getElementById('delete-btn')
);
const simultaneousRequestBtn = <HTMLButtonElement>(
  document.getElementById('simultaneous-btn')
);

getMethodBtn.addEventListener('click', getUsers);
postMethodBtn.addEventListener('click', createUser);
putMethodBtn.addEventListener('click', overrideUser);
patchMethodBtn.addEventListener('click', updateUser);
deleteMethodBtn.addEventListener('click', deleteUser);
simultaneousRequestBtn.addEventListener('click', simultaneousRequest);

const usersDisplayArea = <HTMLDivElement>(
  document.getElementById('display-users-area')
);
const titleElement = <HTMLHeadingElement>document.getElementById('title');
const statusElement = <HTMLHeadingElement>document.getElementById('status');

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

function createUserElement(user: User, index: number) {
  const { email, first_name, last_name, avatar } = user;

  const userDisplay = document.createElement('div');
  userDisplay.className = 'user-item';
  userDisplay.style.gridArea = `user-${index}`;

  const name = document.createElement('h4');
  name.textContent = `${index}) ${first_name} ${last_name}`;

  const emailElement = document.createElement('p');
  emailElement.textContent = email;
  emailElement.className = 'user-email';

  const img = document.createElement('img');
  img.className = 'user-avatar';
  img.src = avatar;

  userDisplay.append(name, emailElement, img);
  usersDisplayArea.appendChild(userDisplay);
}

function changeHeading(titleText: string, status: number) {
  titleElement.textContent = titleText;
  let statusColor = 'green'; // 2xx codes
  let statusExtra = '';

  if (status == 200) {
    statusExtra = 'OK';
  } else if (status == 201) {
    statusExtra = 'Created';
  } else if (status == 204) {
    statusExtra = 'No Returned Content';
  } else if (status >= 400 && status < 500) {
    statusColor = 'red'; // client error
    statusExtra = 'Client Error';
  } else if (status >= 500) {
    statusColor = 'red'; // server error
    statusExtra = 'Server Error';
  }

  statusElement.textContent = `Status ${status} (${statusExtra})`;
  statusElement.style.color = statusColor;
}

export function displayGETData(data: { data: User[] }, status: number) {
  const { data: userList } = data;
  usersDisplayArea.innerHTML = ''; // clear any other data
  changeHeading('Retrieved All the Users (GET)', status);

  userList.forEach((user, index, _) => createUserElement(user, index + 1));
}

export function displayPOSTData(data: User, status: number) {
  usersDisplayArea.innerHTML = ''; // clear any other data
  console.log('hi');
  changeHeading('Created A User (POST)', status);

  createUserElement(data, 2);
}

function userDesription(text: string, index: number) {
  const desc = document.createElement('p');
  desc.textContent = text;
  desc.style.gridArea = `user-${index}`;
  desc.style.verticalAlign = 'center';
  desc.style.marginTop = '40%';
  desc.style.textDecoration = 'underline';
  usersDisplayArea.appendChild(desc);
}

export function displayPUTData(originalUser: User, data: User, status: number) {
  usersDisplayArea.innerHTML = ''; // clear any other data
  changeHeading('Override A User (PUT)', status);

  userDesription('Original User', 1);
  createUserElement(originalUser, 2);

  userDesription('Overidden User', 4);
  createUserElement(data, 5);
}

export function displayPATCHData(
  originalUser: User,
  data: User,
  status: number
) {
  usersDisplayArea.innerHTML = ''; // clear any other data
  changeHeading('Updated A User (PUT)', status);

  userDesription('Original User', 1);
  createUserElement(originalUser, 2);

  data.avatar = originalUser.avatar;
  userDesription('Updated User', 4);
  createUserElement(data, 5);
}

export function displayDELETEData(status: number) {
  usersDisplayArea.innerHTML = ''; // clear any other data
  changeHeading('Sucessfully deleted user 2', status);
}

export function displaySimultaneousGETData(
  data1:  User[],
  data2:  User[],
  status:number,
) {
  usersDisplayArea.innerHTML = ''; // clear any other data
  changeHeading('Retrieved All the Users (GET)', status);
  
  data1.forEach((user, index, _) => createUserElement(user, index + 1));
  data2.forEach((user, index, _) => createUserElement(user, index + 7));
}
