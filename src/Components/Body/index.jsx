import React, { Component, useReducer, useState } from "react";
import { Box, Car, Container, InputText, Text, Trace } from "./style";
import texts from '../../Mock'
import car1 from '../../Assets/cars/car1.svg'

class Body extends Component {
    constructor(props){
        let defnum = Math.floor(Math.random() * texts.length);
        super(props)
        this.state = {
            data: texts,
            number: defnum
        }
    }
    render(){
        // let random = () => {
        //         let num = Math.floor(Math.random() * this.state.data.length)
        //         this.setState({number: num})
        // }
        // let randomHead = () => {
        //     setTimeout(() => {
        //         random()
        //     }, 1000);
        // }
        return (
            <Container>
                {/* {randomHead()} */}
                <h1>
                    Game: TypeRacer
                </h1>
                <h1>
                    {this.state.data[this.state.number].text}
                </h1>
                <Box>
                    <Trace>
                        <Car>
                            <img src={car1} alt="" />
                        </Car>
                    </Trace>
                    <Text>

                    </Text>
                    <InputText type="text" />
                </Box>
            </Container>
        )
    }

};

export default Body;