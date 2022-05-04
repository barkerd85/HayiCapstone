import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";





function calender(props) {



    async function getCalender() {
        let theCalender = await axios.get(`http://localhost:3008/api/calender/${user._id}`);
    }
}
 
export default calender;