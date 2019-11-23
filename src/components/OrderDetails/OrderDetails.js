import React from 'react';
import nanoid from 'nanoid';
import S from './OrderDetails.module.css'
const fields = arr => {
    console.log(arr);
    arr.map()

    let arrDivs = [];
    for (let i = 0;i < arr.length; i++){
        for (let j = 0; j < arr[i].count;j++){
            arrDivs.push({ name: arr[i].name, key : nanoid(), count: arr[i].count })
        }
    }
console.log(arrDivs)
};
const OrderDetails = (props) => {
    return (

        <div className={S.OrderDetails}>
            {fields(props.itemsApp)}
            <div>Всего : {props.totalPriceApp}  сом</div>
        </div>
    );
};

export default OrderDetails;