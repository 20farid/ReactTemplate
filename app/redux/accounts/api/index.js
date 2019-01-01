const URL = 'http://localhost:8080';

const postSignup = user => {
  const requestOptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(user)
  };

  return fetch(`${URL}/signup`, requestOptions).then(res => {
    if(res.status == 405){
      return 'Account with that email address already exists.';
    }
    if (res.status >= 200 && res.status < 300) {
      return 'Account successfully created';
    }
  });
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log('service :', JSON.stringify(response));
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}


const handleResponse = response => {
  return response.json().then(data => {
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              //logout();
              location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}

export {
  postSignup
};
