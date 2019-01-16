import axios from 'axios';

const request = axios.create({
    baseURL: '',
    timeout: 0,
    headers: {
        'X-Authorization': localStorage.getItem('OCToken') ? localStorage.getItem('OCToken') : '',
    },
});

function checkTokenTime() {
    const getData = async function () {
        try {
            const time = localStorage.getItem('OCTokenTime');
            if (time && (Date.now() + 1000 * 60 * 60) > Number(time)) {
                const data = await request.post('/api/auth/refresh');
                if (typeof data !== 'object') {
                    return false;
                }
                localStorage.setItem('OCToken', data.token);
                localStorage.setItem('OCTokenTime', data.expiration);
            }
        } catch (err) {
            window.notice(err.message);
        }
    };
    getData();
}

request.interceptors.response.use((response) => {
    checkTokenTime();
    const { data } = response;
    return data;
}, (error) => {
    checkTokenTime();
    let { data } = error.response;
    data = data || {};
    let is4 = false;
    let txt = data.msg || '';
    switch (+error.response.status) {
        case 404:
            is4 = true;
            txt = '404';
            break;
        case 403:
            is4 = true;
            break;
        case 401:
            localStorage.removeItem('OCToken');
            localStorage.removeItem('OCTokenTime');
            txt = '';
            window.VUE.$router.push('/login');
            is4 = true;
            break;
        case 400:
        case 412:
            is4 = true;
            break;
    }
    if (is4) {
        window.notice(txt);
    }
    return Promise.reject(new Error(is4 ? '' : txt));
});

export default request;
