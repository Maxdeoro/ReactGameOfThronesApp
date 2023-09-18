import React,{Component} from "react";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage";
import GotService from "../../services/gotService";
// import ItemDetails,{Field} from "../itemDetails";
// import RowBlock from "../rowBlock";
import {withRouter} from 'react-router-dom';

class BooksPage extends Component {
    gotService = new GotService();

    state = {
        // selectedBook: null,
        error: false,
    };

    // onItemSelected = (id) => {
    //     this.setState({
    //         selectedBook: id,
    //     })
    // };

    componentDidCatch() {
        this.setState({
            error: true,
        })
    };

    render() {
        // const {selectedBook,error} = this.state;
        const {error} = this.state;

        if(error) {
            return <ErrorMessage/>;
        }

        // const itemList = (<ItemList onItemSelected={this.onItemSelected} 
        //                         getData={this.gotService.getAllBooks} 
        //                         renderItem={({name}) => name}
        //                     />);
        return (<ItemList 
                    onItemSelected={(itemId) => {
                        this.props.history.push(itemId);
                    }} 
                    getData={this.gotService.getAllBooks} 
                    renderItem={({name}) => name}
                    />);

        // const bookDetails = (<ItemDetails itemId={selectedBook} 
        //                                   getData={this.gotService.getBook}>
        //                         <Field field='numberOfPages' label='Number of pages'/>
        //                         <Field field='publisher' label='Publisher'/> 
        //                         <Field field='released' label='Released'/>
        //                     </ItemDetails>);

        // return <RowBlock left={itemList} right={bookDetails}/>;
    };
};

export default withRouter(BooksPage);