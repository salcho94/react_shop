import Card from './Card';
import {useState} from "react";
import data from "../data";
import {Route} from "react-router-dom";
import Detail from "./Detail";
const MainList = (props) => {
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
                </div>

            </>
        )
}
export default MainList;