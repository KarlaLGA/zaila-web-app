import axios from "axios";

const get = endpoint => {
  return axios
    .get(endpoint, {
      headers: { Authorization: `Bearer ${localStorage.getItem("userData")}` }
    })
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const create = (endpoint, data) => {
  return axios
    .post(
      endpoint,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("userData")}` }
      },
      data
    )
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const update = (endpoint, data) => {
  return axios
    .put(
      endpoint,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("userData")}` }
      },
      data
    )
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export { get, create, update };
