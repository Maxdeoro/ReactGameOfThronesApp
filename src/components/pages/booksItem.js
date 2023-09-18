import React,{Component} from 'react';
import GotService from '../../services/gotService';
import ItemDetails,{Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';

export default class BooksItem extends Component {
    gotService = new GotService();

    state = {
        error: false,
    };

    render() {

        const {error} = this.state;

        if(error) {
            return <ErrorMessage/>;
        }

        return (
            <ItemDetails itemId={this.props.bookId} 
                         getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/> 
                <Field field='released' label='Released'/>
            </ItemDetails>
        );
    };
};