import axios from "axios";

const headers = { Authorization: `Bearer ${localStorage.getItem("userData")}` };

const get = endpoint => {
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
  return axios
    .post({ headers: headers }, endpoint, data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const update = (endpoint, data) => {
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
