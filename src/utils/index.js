import axios from 'axios';
import CryptoJS from "crypto-js";
import { useNavigate } from 'react-router-dom'

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },

});


let islogin = window.location.pathname
// instance.interceptors.request.use(

//   (config) => {

//     const token = JSON.parse(localStorage.getItem('token'));
//     console.log("token =", token);
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;


//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

instance.interceptors.request.use(
  (config) => {
    const rawToken = localStorage.getItem('token');

    console.log('rawToken ----> 39', rawToken)

    let token = null;

    if (rawToken && rawToken !== "undefined" && rawToken !== "null") {
      try {
        token = JSON.parse(rawToken);
        console.log('token -----> 46', token)
      } catch (e) {
        console.warn("Invalid token in localStorage, clearing it");
        localStorage.removeItem('token');
      }
    }

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401 && islogin !== "/signin" && islogin !== "/") {
      localStorage.clear();
      window.location.reload('');
    }

    return Promise.reject(error);
  }
);

const get = async (url, headers = {}) => {
  try {
    const response = await instance.get(url, {
      headers: {
        ...headers,
      },
    });
    return response.data;
  } catch (error) {
    handleAPIError(error);
    throw error;
  }
};

const post = async (url, data = {}, headers = {}) => {
  try {
    const response = await instance.post(url, data, {
      headers: {
        ...headers,
      },
    });
    return response.data;
  } catch (error) {
    handleAPIError(error);
    throw error;
  }
};

const put = async (url, data = {}, headers = {}) => {
  try {
    const response = await instance.put(url, data, {
      headers: {
        ...headers,
      },
    });
    return response.data;
  } catch (error) {
    handleAPIError(error);
    throw error;
  }
};

const deleteReq = async (url, headers) => {
  try {
    const response = await instance.delete(url, {
      headers: {
        ...headers,
      },
    });
    return response.data;
  } catch (error) {
    handleAPIError(error);
    throw error;
  }
};

const handleAPIError = (error) => {
};

const decryptResponse = (res) => {
  var bytes = CryptoJS.AES.decrypt(res, 'secret key 123');
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
}

const encryptResponse = (res) => {
  var encryptResponse = CryptoJS.AES.encrypt(JSON.stringify(res), 'secret key 123').toString();
  return encryptResponse
}

let key = CryptoJS.enc.Utf8.parse('4352678453967926');
let iv = CryptoJS.enc.Utf8.parse('4352678453967926');

const encryptUsingAES256 = (data) => {
  var encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(data),
    key,
    {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  return encrypted.toString();
}

const decryptUsingAES256 = (decString) => {
  const keys = crypto.getRandomValues(new Uint8Array(16));
  const secureKey = Array.from(keys, (byte) => ('00' + byte.toString(16)).slice(-2)).join('');

  var decrypted = CryptoJS.AES.decrypt(decString, key, {
    keySize: 128 / 8,
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8)

}



export { get, post, put, deleteReq, decryptUsingAES256, encryptUsingAES256 };