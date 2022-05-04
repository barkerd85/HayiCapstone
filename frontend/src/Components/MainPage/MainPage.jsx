import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";





function mainPage(props) {



    async function getMainPage() {
        let theMainPage = await axios.get(`http://localhost:3008/api/calender/${user._id}`);
    }
}
 
export default mainPage;