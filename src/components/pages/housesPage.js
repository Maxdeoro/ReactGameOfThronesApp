import React,{Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import ItemDetails,{Field} from '../itemDetails';
import RowBlock from '../rowBlock';

export default class HousesPage extends Component {
    gotService = new GotService();

    state = {
        selectedHouse: null,
        error: false,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id,
        });
    };

    componentDidCatch() {
        this.setState({
            error: false,
        })
    };

    render() {
        const {selectedHouse,error} = this.state;

        if (error) {
            return <ErrorMessage/>;
        }

        const itemList = (<ItemList onItemSelected={this.onItemSelected} 
                        getData={this.gotService.getAllHouses} 
                        renderItem={({name}) => name}
                        />);

        const houseDetails = (<ItemDetails itemId={selectedHouse} 
                              getData={this.gotService.getHouse}>
                                <Field field='region' label='Region'/>
                                <Field field='words' label='Words'/>
                                <Field field='titles' label='Titles'/> 
                                <Field field='ancestralWeapons' label='Ancestral weapons'/> 
                            </ItemDetails>);

        return <RowBlock left={itemList} right={houseDetails}/>;
    };
};