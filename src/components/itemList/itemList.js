import React,{Component,useState,useEffect} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types';
import './itemList.css';

//using react hooks

function ItemList({getData,onItemSelected,renderItem}) {

    const [itemList,updateList] = useState([]);

    useEffect(() => {
        getData()
        .then((data) => {
            updateList(data);
        })
        .catch((err) => {
            console.log(err);
            onError();
        })
    }, []);     // []-предотвращение memory leak

    function onError(status) {
        return <ErrorMessage/>;
    };

    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = renderItem(item);
            return (<li 
                        key={id} 
                        className='list-group-item' 
                        onClick={()=>onItemSelected(id)} 
                    >
                        {label}
                    </li>)
        })
    };

    if(!itemList) {
        return <Spinner/>;
    }

    const items = renderItems(itemList);

    return (
        <ul className='item-list list-group'>
            {items}
        </ul>
    );
    // }
}

export default ItemList;



