import axios from "axios";

const get = endpoint => {
  return axios
    .get(endpoint)
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const create = (endpoint, data) => {
  return axios
    .post(endpoint, data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const update = (endpoint, data) => {
  return axios
    .put(endpoint, data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export { get, create, update };
