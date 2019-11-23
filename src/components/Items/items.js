import React from 'react';
import S from './Items.module.css'
import hamburger from './img/hamburger.png';
import cheeseburger from  './img/cheeseburger.png';
import fries from './img/fries.png';
import coffee from './img/coffee.png';
import tea from './img/tea.png';
import cola from './img/cola.png';


const Items = (props) => {
    const ItemList = [
        {name: 'Hamburger', price: 80, image: hamburger},
        {name: 'Cheeseburger', price: 90, image:cheeseburger},
        {name: 'Fries', price: 45, image: fries},
        {name: 'Coffee', price: 60, image:coffee},
        {name: 'Tea', price: 30, image:tea},
        {name: 'Cola', price: 50, image:cola},
    ];
    return (

        <div className={S.blockItems}>
            {ItemList.map((item,index) =>
                <div className={S.item} key={index} onClick={() => props.addItem(item)}>
                    <img
                         className={S.img} src={item.image}
                    />
                    <span>{item.name} </span>
                    <span>{item.price} KGS</span>

                </div>
            )}
        </div>
    );
};

export default Items;