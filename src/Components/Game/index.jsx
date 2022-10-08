import React, { Component } from "react";
import { Container, Main } from "./GameStyle";
import { Input, Text, P } from "./GameStyle";
import { text } from "../../Mock/data";
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: text,
            inputtext: ''
        }
    }
    render() {
        let TypeText = this.state.text[0].letter.split(' ');
        let len = '' + this.state.inputtext.length + 'px';
        return (
            <Container>
                <Main>
                    <P margin={len}>
                        Hi
                    </P>
                <Text>
                {this.state.text[0].letter}
                        {/* {this.state.inputtext === TypeText[0]? this.setState({inputtext:''}) : null} */}
                </Text>
                    <Input onChange={({target:{value}}) => this.setState({ inputtext: value})} type="text" />
                </Main>
            </Container >
        )
    }
}

export default Game;