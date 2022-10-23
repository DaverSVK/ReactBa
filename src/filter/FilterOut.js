import React from "react";
import './FilterOut.css'


function ExpenseItem(props) {
  
  return (
    <tr className="data-part">
        <td className="data-part__description"><h2>Region {props.region}</h2></td>
        <td className="data-part__description"><h2>City part: {props.cityPart}</h2></td>
        <td className="data-part__description"><h2>{props.sunlight}</h2></td>
        <td className="data-part__description"><h2>{props.rain}</h2></td>
  
    </tr>
  );
}
export default ExpenseItem;
