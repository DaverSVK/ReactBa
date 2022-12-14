import React, { useState } from 'react'
import axios from "axios";

const URL = "http://localhost:8083/sunlight/list"

class Controller{

postRe = async (jsonObject) => {
    const data = await axios.post(URL, jsonObject);
    return await data;
  }
}

export default new Controller();
