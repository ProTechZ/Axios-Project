import axios from 'axios';
import {
  displayDELETEData,
  displayGETData,
  displayPATCHData,
  displayPOSTData,
  displayPUTData,
  displaySimultaneousGETData,
} from './vendor.js';

const baseURL = 'https://reqres.in/api/users';

export async function getUsers() {
  const { data, status } = await axios.get(baseURL);
  console.log(status);
  displayGETData(data, status);
}

export async function createUser() {
  const { data, status } = await axios.post(baseURL, {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@gmail.com',
    avatar: '../src/person.jpg',
  });
  console.log(status);

  data.id = parseInt(data.id);
  displayPOSTData(data, status);
}

export async function overrideUser() {
  const originalUser = await axios.get(`${baseURL}/2`);
  const { data, status } = await axios.put(`${baseURL}/2`, {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@gmail.com',
    avatar: '../src/person.jpg',
  });
  console.log(status);

  displayPUTData(originalUser.data.data, data, status);
}

export async function updateUser() {
  const originalUser = await axios.get(`${baseURL}/2`);
  const { data, status } = await axios.patch(`${baseURL}/2`, {
    first_name: 'Janet',
    last_name: 'Doe',
    email: 'janet.doe@reqres.in',
  });
  displayPATCHData(originalUser.data.data, data, status);
}

export async function deleteUser() {
  const { data, status } = await axios.delete(`${baseURL}/2`);
  displayDELETEData(status);
}

export async function simultaneousRequest() {
  const [request1, request2] = await Promise.all([
    axios.get(baseURL),
    axios.get(`${baseURL}?page=2`),
  ]);

  displaySimultaneousGETData(
    request1.data.data,
    request2.data.data,
    request1.status
  );
}
