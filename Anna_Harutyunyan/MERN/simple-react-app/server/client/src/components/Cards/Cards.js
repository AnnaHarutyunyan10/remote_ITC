import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { MyCard } from '../Card/Card';
import './Cards.css';

export class Cards extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data: [],
            error: null,
            isLoaded: false,
            search: null
        };
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    };

    componentWillMount(){

        fetch('http://localhost:3001/')
            .then(response => {
                return response.json()
            })
            .then(result => this.setState({ 
                data: result.cardList,
                isLoaded: true
            }))
            .catch(error => {
                console.log(error);
                this.setState({ error });
            });
    }

    render() {
        const { data, search } = this.state;

        return (
            <div>
                <h1 className="header">Monsters Rolodex</h1>
                <div className="center">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="input"
                        onChange={ e => this.searchSpace(e) }
                    />
                </div>
                
                <Row className="padding">
                    {data.filter(cardData => {
                        if(this.state.search == null)
                            return cardData
                        else if(cardData.name.toLowerCase().includes(search.toLowerCase())) {
                            return cardData
                        }
                    }).map(cardData => {
                        // random nkarner en, bazayic chen
                        //const random = Math.floor(Math.random() * 100);
                        //const link = `https://robohash.org/${random}.png`;
                        const link = `https://robohash.org/${cardData.link}.png`;
                        return <Col xs={12} md={6}>
                                <MyCard
                                    key={ cardData.name }
                                    link={ link }
                                    title={ cardData.name }
                                    description={ cardData.email }
                                />
                            </Col>
                        }
                    )}
                </Row>
            </div>
        );
    }
}