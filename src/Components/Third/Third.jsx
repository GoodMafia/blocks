import React from "react";

export default function Third(props) {
  return (
    <div className={props.color} id="block">
      <div className="Title">
        <p class="text">Безлимитный {props.price}</p>
      </div>
      <div>
        <p class="text">{props.price}/месяц</p>
      </div>
      <div>
        <p className="text">до {props.speed} мбит/сек</p>
      </div>
    </div>
  )
}
