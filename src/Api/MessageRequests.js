import axios from 'axios'


const API = axios.create({ baseURL: 'https://social-media-server-sw98.onrender.com/api' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);