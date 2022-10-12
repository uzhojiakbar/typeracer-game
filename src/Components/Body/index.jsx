import React, { Component } from "react";
import { Box, Car, Container, InputText, Speed, Name, Text, Trace, CarImage, Head, Input, MainText } from "./style";
import texts from '../../Mock'
import car1 from '../../Assets/cars/car1.svg'

class Body extends Component {
    constructor(props) {
        let defaoultText = Math.floor(Math.random() * texts.length);
        super(props)
        this.state = {
            data: texts,
            number: defaoultText,
            symbols: 0,
            sec: 0,
            start: false,
            stop: false,
            input: ''
        }
    }
    render() {
        const setSecund = () => {
            setTimeout(() => {
                setTimeout(() => {
                if (this.state.start) {
                    this.setState({ sec: this.state.sec + 1 })
                }
            }, 500)
            }, 500)
        }
        const wpm = (this.state?.input.length / 5) / (this.state?.sec / 60);
        return (
            <Container>
                <Box>
                    <Trace>
                        {this.state.sec}
                        {setSecund()}
                        <Car>
                            <Name>
                                <div className="nickname ">
                                    <p>Guest</p>
                                    <i>(You)</i>
                                </div>
                                <CarImage>
                                    <img src={car1} alt="" />
                                </CarImage>
                            </Name>
                            {
                                this.state?.input !== 0 && this.state?.sec !== 0 ?
                                    <Speed>
                                        {Math.round(wpm)}
                                        wpm
                                    </Speed>
                                    :
                                    null
                            }
                        </Car>
                    </Trace>
                    <Head>
                        <Text>
                            <MainText >
                                {this.state.data[this.state.number].text}
                            </MainText>
                        </Text>
                        <Input>
                            <InputText onChange={(e) => this.setState({ input: e.target.value })} type="text" />
                        </Input>
                    </Head>
                </Box>
            </Container>
        )
    }

};

export default Body;