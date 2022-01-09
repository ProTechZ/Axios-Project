const getMethodBtn = document.getElementById('get-request-button');
const postMethodBtn = document.getElementById('post-request-button');
const putMethodBtn = document.getElementById('put-request-button');
const patchMethodBtn = document.getElementById('patch-request-button');
const deleteMethodBtn = document.getElementById('delete-request-button');
const simultaneousRequestBtn = document.getElementById(
    'simultaneous-request-button'
);
const axiosInstanceBtn = document.getElementById('axios-instance-button');
const interceptBtn = document.getElementById('intercept-request-button');

getMethodBtn.addEventListener('click', getUsers);
postMethodBtn.addEventListener('click', createUser);
putMethodBtn.addEventListener('click', overrideUser);
patchMethodBtn.addEventListener('click', updateUser);
deleteMethodBtn.addEventListener('click', deleteUser);
simultaneousRequestBtn.addEventListener('click', simultaneousRequest);
axiosInstanceBtn.addEventListener('click', useAxiosInstance);
interceptBtn.addEventListener('click', inteceptRequest);
