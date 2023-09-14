import React,{Component} from 'react';
import {Col,Row,Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
// import ItemList from '../itemList';
// import CharDetails from '../charDetails';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import {CharacterPage,BooksPage,HousesPage} from '../pages';
// import ItemDetails from '../itemDetails';
import styled from 'styled-components';

class App extends Component {

    state = {
        showRandomChar: true,
        selectedItem: null,
        error: false,
    };

    componentDidCatch() {
        this.setState({
            error: true,
        })
    };

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar,
            };
        })
    };

    render () {
        const {showRandomChar,selectedItem,error} = this.state;

        const Button = styled.button`
        margin-bottom: 40px;
        padding: 17px 14px;
        background-color: #c49411;
        border: 2px solid #111111;
        border-radius: 5px;
        `;

        if(error) {
            return <ErrorMessage/>;
        }

        const char = showRandomChar ? <RandomChar/> : null;

        return (
            <>
            <Container>
                <Header/>
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                       {char}
                    </Col>
                </Row>
                <Button onClick={this.toggleRandomChar}>
                      Toggle random character
                </Button>
                <CharacterPage/>
                <HousesPage/>
                <BooksPage/>
            </Container>
            </>
        );
     }
};

export default App;