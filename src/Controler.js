import React, { useState } from 'react'
import axios from "axios";

const URL = "https://localhost:8083/raindrops/list"

class Controller{

postRe = async (jsonObject) => {
    const data = await axios.post(URL, jsonObject);
    return data;
  }
}

export default new Controller();
