const BASE_URL = 'https://jsonplaceholder.typicode.com';

const API = async function (param, number ) {
    let text = `${BASE_URL}${param}`;
    number && (text += `/${number}`);
    const response = await fetch(text);
    return response.json();
}
export default API;