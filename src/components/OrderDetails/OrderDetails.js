import React from 'react';
import S from './style.module.css'

const Product = [
  {name: 'Burger',price: 80},
  {name: 'Cheeseburger',price: 90},
  {name: 'Fries',price: 45},
  {name: 'Frappe',price: 70},
  {name: 'Tea',price: 50},
  {name: 'Cola',price: 40},
];
const  OrderDetails = (props) => {
  return (
    <div className={S.blockItems}>
      {Product.map((product, index) =>
        <div key={index} className={S.item}>
          {props.productsApp[index].count > 0 ?
              <div>
            <span>{product.name}</span>
            <span> x {props.productsApp[index].count} шт</span>
                <span>{props.productsApp[index].count * product.price}</span>
            <button className={S.btn}
              onClick={() => props.clickRemove(product)}
            >X
            </button>
              </div> : null
          }
        </div>
      )}
      <div><b>Итого : {props.totalPriceApp} сом</b></div>
    </div>
  );
};

export default OrderDetails;