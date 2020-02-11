import axios from "axios";

const getNfcSensors = () => {
  return axios
    .get(`sensor`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export { getNfcSensors };
