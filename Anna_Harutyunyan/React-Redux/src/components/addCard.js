import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileBase64 from './react-file-base-64.js';
import  moment  from 'moment';
import addCardFoto from '.././foto/page_cards_add_foto/foto_for_addCard.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

import { ADD_CARD_ACTION } from '.././actions/card_action';

import { Container, Row, Col, Button } from 'react-bootstrap';

class AddCard extends Component {

    constructor() {
        super()
        this.state = {
        files: []
        }
    }   
 
    getFiles(files){
        this.setState({ files: files });
        //console.log(this.state.files[0].base64);
    }

    addCard() {
        console.log('click', this.cardTitle.value);
        console.log('click', this.cardDescription.value);
        //let cardImage = this.state.files[0].base64;
        this.props.onAddCard(this.cardTitle.value, this.getImage, this.cardDescription.value, this.cardButton.value);
        this.cardTitle.value = '';
        this.cardDescription.value = '';
        this.cardButton.value = '';
    }
    
    render () {
        console.log(this.props.testStore); 
        //console.log(this.state.files.base64);
        return (
            <React.Fragment>
                <Container fluid className="m-4">
                    <Row>
                        <Col md={5}>
                            <h2 className="mb-3">Starbucks Menu</h2>
                            <img src={ addCardFoto } alt="addCardFoto" className="w-100" />
                        </Col>
                        <Col md={6} className="ml-5">
                            <h2 className="mb-3">Choose your espresso, love your drink</h2>
                            <p className="small">Enjoy all your favorites with Starbucks® smooth Blonde espresso or bold signature espresso.</p>
                            <input type="text" ref={(input) => this.cardTitle = input} placeholder="Enter Title" className="form-control mb-2" />                           
                                <FileBase64
                                    ref={() => this.getImage = this.state.files.map((i) => i.base64) }
                                    multiple={ true }
                                    onDone={ this.getFiles.bind(this) } 
                                />
                            <input type="text" ref={(input) => this.cardDescription = input} placeholder="Enter Description" className="form-control mb-2" />
                            <input type="text" ref={(input) => this.cardButton = input} placeholder="Enter button value" className="form-control mb-2" ></input>
                            <Button variant="secondary" onClick={this.addCard.bind(this)} size="lg" block>ADD CARD</Button>
                        </Col>
                    </Row> 
                    <Row className="my-4 mt-5">
                        { this.props.testStore.map((card, index) => 
                            <Col md={4}>
                                <div>
                                    <NavLink to="">
                                        <p key={index} className="h5 font-weight-bold text-success" >{card.title}</p>
                                    </NavLink>
                                    <p key={index}>
                                        <img src={card.upload_image} className="card-img-top" alt="cards" />
                                    </p>
                                    <p key={index} className="small" >{card.descripton}</p>
                                    <p key={index} className="small" >{card.date}</p>
                                    <NavLink to="">
                                        <p key={index} className="text-success small " >{card.button}</p>
                                    </NavLink>
                                </div>  
                            </Col>                             
                        )}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        testStore: state.img
    }),
    dispatch => ({
        onAddCard: (cardTitle, cardImage, cardDescription, cardButton) => {            
            dispatch({
                type: ADD_CARD_ACTION, 
                title: cardTitle, 
                image: cardImage,
                descripton: cardDescription,
                date: moment(new Date()).format("MMM Do YY"),
                button: cardButton
            });          
        }
    })
)(AddCard);