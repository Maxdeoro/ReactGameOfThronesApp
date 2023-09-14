import React,{Component} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import './itemDetails.css';

const Field = ({item,field,label}) =>{
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className='term'>{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {Field};

export default class ItemDetais extends Component {
    gotService = new GotService();

state = {
    item: null,
    loading: true,
    error: false,
};

componentDidMount() {
    this.updateChar();
};

componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) {
        this.updateChar();
    }
};

onCharLoaded(item) {
    this.setState({
        item,
        loading: false,
    })
};

updateChar() {
    const {itemId} = this.props;
    if(!itemId) {
        return;
    }
    this.setState({
        loading: true,
    });
    this.gotService.getCharacter(itemId)
        .then(this.onCharLoaded)
        .catch(() => this.onError());
};

onError() {
    this.setState({
        error: true,
        item: null,
    })
};

render() {
    const {item,loading,error} = this.state;

    if(!item && error) {
        return <ErrorMessage/>;
    } else if (!item) {
        return <span className='select-error'>Please select an item</span>
    }

    const {name} = item;

    if(loading) {
        return (
            <div className='char-details rounded'>
                <Spinner/>
            </div>
        );
    }

    return (
        <div className='char-detais rounded'>
            <h4>{name}</h4>
            <ul className='list-group list-group-flush'>
                {
                    React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child,{item});
                    })
                }
            </ul>
        </div>
    );
  };
};