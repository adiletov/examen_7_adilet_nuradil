import React from 'react';
import S from './style.module.css'

const Empty = () => {
    return (
        <div className={S.blockItems}>
            Корзина пуста! <br/>
            Пожалуйста,сделайте заказ!!!
        </div>
    );
};

export default Empty;