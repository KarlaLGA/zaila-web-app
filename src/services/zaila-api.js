import axios from "axios";

const get = endpoint => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("userData")}`
  };
  return axios
    .get(endpoint, { headers: headers })
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const create = (endpoint, data) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("userData")}`
  };
  return axios
    .post(endpoint, data, { headers: headers })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const update = (endpoint, data) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("userData")}`
  };
  return axios
    .put(endpoint, data, { headers: headers })
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export { get, create, update };
