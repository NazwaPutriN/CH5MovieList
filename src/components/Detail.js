import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import Card from "./Card";

export const Detail = () => {
    const [data, setData] = useState()
    let {id} = useParams()
    const API_KEY = "c368a12c060c2bbd33ea2c9aea9366e6"

}