/*eslint-disable*/
import Card from './Card';
import {useState} from "react";
import data from "../data";
import {Route} from "react-router-dom";
import Detail from "./Detail";
import Button from "react-bootstrap/Button"
import axios from "axios";
const MainList = (props) => {
        let [btnCount,setBtnCount] = useState(2);
        let [delay,setDelay] = useState(false);
        return(
            <>
                <div className="main-bg"></div>
                <div className="container">
                    <div className="row">
                        {
                            props.shoes.map((data,index) => {
                                return(
                                    <Card key = {index} shoes = {data}  i = {index}/>
                                )
                            })
                        }
                    </div>
                    {delay ?? <div>로딩중 입니다...</div>}
                    {btnCount < 4 ?  <Button variant="secondary" onClick={() => {
                        setDelay(true)
                        axios.get(`https://codingapple1.github.io/shop/data${btnCount}.json`)
                            .then((data) => {
                                let copyShose = [...props.shoes,...data.data]
                                props.setShoes(copyShose)
                                setBtnCount(btnCount + 1)
                            })
                            .catch(() => {
                                setDelay(false);
                            })
                    }}>더보기</Button> :
                        null

                    }

                </div>

            </>
        )
}
export default MainList;