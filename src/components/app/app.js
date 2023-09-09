import React,{Component} from 'react';
import {Col,Row,Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import styled from 'styled-components';

class App extends Component {
    // const gotService = new GotService();
    // console.log(gotService.getAllHouses());
    state = {
        showRandomChar: true,
        selectedChar: 150,
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
        const {showRandomChar,selectedChar,error} = this.state;

        if(this.state.error) {
            return <ErrorMessage/>;
        }

        const Button = styled.button`
        margin-bottom: 40px;
        padding: 17px 14px;
        background-color: #c49411;
        border: 2px solid #111111;
        border-radius: 4px;
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
                       {/* <RandomChar/> */}
                       {char}
                    </Col>
                </Row>
                <Row>
                    <Button>
                        Toggle Random Character
                    </Button>
                </Row>
                <CharacterPage/>
            </Container>
            </>
        );
     }
};

export default App;