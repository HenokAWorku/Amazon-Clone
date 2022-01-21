import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
   // baseURL: 'http://localhost:5001/clone1-6f38e/us-central1/api',
   baseURL: 'https://us-central1-clone1-6f38e.cloudfunctions.net/api'
});

export default instance;
