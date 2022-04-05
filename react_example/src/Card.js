import React from "react";
import { useHistory } from 'react-router-dom';


function Card(props) {
  const history = useHistory();


  return (
    <div>
      <div className="col-md-4">
        <img onClick={() => { history.push(`/detail/${(props.shirt.id)}`) }}
          src={`https://raw.githubusercontent.com/ai-edu-pro/busan/main/t` + (props.i + 1) + `.jpg`} alt={`티셔츠` + (props.i + 1)}
        />
        <h4 >{props.shirt.title}</h4>
        <h6>{props.shirt.content}</h6>
        <p>{props.shirt.price}</p>
      </div>
    </div>
  );

}

export default Card;