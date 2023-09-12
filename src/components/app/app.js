import React,{Component} from 'react';
import {Col,Row,Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
// import CharDetails from '../charDetails';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import ItemDetails from '../itemDetails';
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

        if(this.state.error) {
            return <ErrorMessage/>;
        }

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
                <Row>
                    <Col md='6'>
                        <ItemList onCharSelected={this.onCharSelected} 
                                  getData={this.gotService.getAllBooks} 
                                  renderItem={(item) => item.name}/>
                    </Col>
                    <Col md='6'>
                        <ItemDetails itemId={selectedItem}/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onCharSelected={this.onCharSelected} 
                                  getData={this.gotService.getAllHouses} 
                                  renderItem={(item) => item.name}/>
                    </Col>
                    <Col md='6'>
                        <ItemDetails itemId={selectedItem}/>
                    </Col>
                </Row>
            </Container>
            </>
        );
     }
};

export default App;