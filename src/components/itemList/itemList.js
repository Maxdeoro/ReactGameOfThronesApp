import React,{Component} from 'react';
// import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import './itemList.css';

export default class ItemList extends Component {

    // gotService = new GotService();
    state = {
        itemList: null,
        error: false,
    };

    componentDidMount() {
        const {getData} = this.props;
        // this.gotService.getAllCharacters()
        getData()
            .then((itemList) => {
                this.setState({
                    itemList,
                })
            })
            .catch((err) => {
                console.log(err);
                this.onError();
            })
    };

    componentDidCatch() {
        this.setState({
            error: true,
            itemList: null,
        })
    };

    onError(status) {
        this.setState({
            error: true,
            itemList: null,
        })
    };

    renderItems(arr) {
        return arr.map((item, i) => {
            return <li 
                    key={i} 
                    className='list-group-item' 
                    onClick={() => this.props.onCharSelected(45 + i)} 
                    >
                        {item.name}
                    </li>
        })
    };

    render() {

        const {itemList,error} = this.state;

        if(error) {
            return <ErrorMessage/>;
        }

        if(!itemList) {
            return <Spinner/>;
        }

        const items = this.renderItems(itemList);

        return (
            <ul className='item-list list-group'>
                {items}
            </ul>
        );
    }
}
