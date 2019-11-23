import React from 'react';
import Burger from './img/hamburger.png';
import Cheeseburger from './img/cheeseburger.png';
import Fries from './img/fries.png';
import Coffee from './img/coffee.png';
import Tea from './img/tea.png';
import Cola from './img/cola.png';
import S from './style.module.css';

const Items = props => {

  const FastFood = [
    {name: 'Burger', price: 80, image: Burger},
    {name: 'Cheeseburger', price: 90, image:Cheeseburger},
    {name: 'Fries', price: 45, image: Fries},
    {name: 'Frappe', price: 70, image:Coffee},
    {name: 'Tea', price: 50, image:Tea},
    {name: 'Cola', price: 40, image:Cola},
  ];

  return (

    <div className={S.blockItems}>
      {FastFood.map((fastfood, index) =>
        <div key={index} className={S.item} onClick={() => props.addFastFood(fastfood)}>
          <img className="img" src={fastfood.image}/>
          <span>{fastfood.name} </span>
        </div>
      )}
    </div>
  );
};

export default Items;