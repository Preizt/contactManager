// api ellam evda write cheyum , enittu ee api export cheym  , after exporting ee api's ne avda import cheyum , appo avda result kittum enittu athine display cheyum  allengil  function call cheythittu venda data pass cheyth kodukum enittu eduth  kanikkum

import axios from "axios";
import baseURL from "./baseURL";

//api calling method

const commonAPI = async (httpMethod, endpoint, requestBody) => {
  //calling the axios function
  //since its a api calling its async funcion

  const requestConfig = {
    method: httpMethod,
    url: baseURL + endpoint,
    data: requestBody,
  };
  //made the above object into an constant
  return await axios(requestConfig)
    .then((res) => {
      //then inde ullil nammak oru call back function ann kittune
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default commonAPI;
