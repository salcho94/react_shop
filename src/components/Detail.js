/*eslint-disable*/
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {useEffect,useRef, useState} from "react";
/*
 스타일 컴포넌트  example
let YellowBtn = styled.button`
  background : ${props => props.color};
  color:black;
  padding:10px;
`

let DivBox = styled.div`
  background : ${props => props.color};
  color:black;
  padding:10px;
`
*/

const Detail = (props) => {
    let {id} = useParams();
    let findData = props.shoes.find((data) => {
        return data.id == id;
    })
    const [count,setCount] = useState(Number(findData.count));

    useEffect(() =>{
        let time;

        if(count > 0){
            time =  setTimeout(() => {setCount(count - 1)}, 1000);
        }
        return () => {
            clearTimeout(time)
            // useEffect 동작전에 기존 timer 제거 한다.
        }
    },[count])
    return  (
        <div className="container">
            {count > 0 ?
                <div className="alert alert-warning">
                    {count}초이내 구매시 할인
                </div>
                : null
            }

            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+ (findData.id + 1) +".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findData.title}</h4>
                    <p>{findData.content}</p>
                    <p>{findData.detail}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;