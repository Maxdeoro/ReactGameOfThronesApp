import React,{Component} from 'react';
import './randomChar.css';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {

    gotService = new GotService();

    state = {
        char: {},
        loading: true,
        error: false,
    };

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 10000);
    };
     componentWillUnmount() {
        clearInterval(this.timerId);
     };

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false,
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25);  //chars from 25 to 1200
        this.gotService.getCharacter(id)
        .then(this.onCharLoaded)
        .catch(this.onError);
    };

    render() {
        // const {char:{name,gender,born,died,culture,titles}, loading} = this.state;
        const {char,loading,error} = this.state;

        const content = !(loading || error) ? <View char={char}/> : null;
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;

        return (
            <div className='random-block rounded'>
                {content}
                {spinner}
                {errorMessage}
            </div>
        );
    }
};

const View = ({char}) => {
    const {name,gender,born,died,culture,titles} = char;
    return (
        <>
        <h4>Random character: {name}</h4>
        <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
            <span className='term'>Gender</span>
            <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <span className='term'>Born</span>
            <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <span className='term'>Died</span>
            <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <span className='term'>Culture</span>
            <span>{culture}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
            <span className='term'>Titles</span>
            <span>{titles}</span>
        </li>
    </ul>
    </>
    );
};