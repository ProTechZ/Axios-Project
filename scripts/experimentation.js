const div = document.querySelector('#myTextarea');

const getUsers = () => {
    /* axios({
        baseURL: 'https://reqres.in/',
        url: 'api/users?page=2',
        timeout: 1000
    }) */

    axios
        .get('https://reqres.in/api/users?page=2', {
            timeout: 1
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
};

const createUser = () => {
    // axios({
    //     method: 'PUT',
    //     url: 'https://reqres.in/api/users/',
    //     data: {
    //         name: 'Zion',
    //         job: 'co-CEO/co-founder',
    //     },
    // });
    axios
        .post('https://reqres.in/api/users', {
            name: 'Zion',
            job: 'co-CEO/co-founder',
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
};

const overrideUser = () => {
    // axios({
    //     method: 'PUT',
    //     url: 'https://reqres.in/api/users/2',
    //     data: {
    //         "name": "morpheus",
    //         "job": "zion resident"
    //     }
    // })
    axios
        .put('https://reqres.in/api/users/2', {
            name: 'Zion',
            job: 'co-CEO/co-founder',
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
};

const updateUser = () => {
    axios
        .patch('https://reqres.in/api/users/2', {
            name: 'Zion',
            job: 'co-CEO/co-founder',
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
};

const deleteUser = () => {
    axios
        .delete('https://reqres.in/api/users/2')
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
};

const simultaneousRequest = () => {
    Promise.all([
        axios.get('https://reqres.in/api/users?page=2'),
        axios.get('https://reqres.in/api/users?page=2'),
    ])
        .then((responseArray) => {
            for (const getResponse of responseArray) {
                console.log(getResponse.data);
            }
        })
        .catch((error) => console.error(error));
};

const useAxiosInstance = () => {
    const axiosInstance = axios.create({
        baseURL: 'https://reqres.in/api/',
    });

    axiosInstance.default.url = '/users'

    axiosInstance
        .post( {
            name: 'Zion',
            job: 'co-CEO/co-founder',
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
};

const inteceptRequest = () => {
    axios.interceptors.request.use((response) => {
        console.log('intercepted');

        return response;
    });
};
