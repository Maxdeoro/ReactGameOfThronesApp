import React,{Component} from 'react';
import {Col,Row,Container} from 'reactstrap';
import ItemList from '../itemList';
// import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import ItemDetails,{Field} from '../itemDetails';
import RowBlock from '../rowBlock';

export default class CharacterPage extends Component {
    gotService = new GotService();
    state = {
        selectedChar: null,
        error: false,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    };

    componentDidCatch() {
        this.setState({
            error: true,
        })
    };

    render() {

        const {selectedChar,error} = this.state;

        if(error) {
            return <ErrorMessage/>;
        }

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected} 
                    getData={this.gotService.getAllCharacters} 
                    renderItem={({name,gender}) => `${name} (${gender})`}
            />
        );

        const charDetails = (
                <ItemDetails itemId={selectedChar}>
                    <Field field='gender' label='Gender'/>
                    <Field field='born' label='Born'/>
                    <Field field='died' label='Died'/>
                    <Field field='culture' label='Culture'/>
                    <Field field='titles' label='Titles'/>
                </ItemDetails>
        );

        return <RowBlock left={itemList} right={charDetails}/>;
    };
};