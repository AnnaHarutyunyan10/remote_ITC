import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileBase64 from './components/react-file-base-64.js';
import  moment  from 'moment';
import addCardFoto from './foto/page_cards_add_foto/foto_for_addCard.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

class Add extends Component {

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
            <div className="m-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <h2 className="mb-3">Starbucks Menu</h2>
                            <img src={ addCardFoto } alt="addCardFoto" className="w-100" />
                        </div>
                        <div className="col-md-6 ml-5">
                            <h2 className="mb-3">Choose your espresso, love your drink</h2>
                            <p className="small">Enjoy all your favorites with Starbucks® smooth Blonde espresso or bold signature espresso.</p>
                            <input type="text" ref={(input) => this.cardTitle = input} placeholder="Enter Title" className="form-control mb-2" />                           
                            <div>
                                <FileBase64
                                    ref={() => this.getImage = this.state.files.map((i) => i.base64) }
                                    multiple={ true }
                                    onDone={ this.getFiles.bind(this) } 
                                />
                            </div>
                            <input type="text" ref={(input) => this.cardDescription = input} placeholder="Enter Description" className="form-control mb-2" />
                            <input type="text" ref={(input) => this.cardButton = input} placeholder="Enter button value" className="form-control mb-2" ></input>
                            <button onClick={this.addCard.bind(this)} className="btn btn-secondary btn-lg btn-block" >ADD CARD</button>
                        </div>
                    </div> 
                    <div className="row my-4 mt-5" >
                        { this.props.testStore.map((card, index) => 
                            <div className="col-md-4" >
                                <div>
                                    <NavLink to="">
                                        <p key={index} className="h5 font-weight-bold text-success" >{card.title}</p>
                                    </NavLink>
                                    <p className="" key={index}>

                                        {/* es vor bacem u sranov ashxatacnem eli kashxati u 
                                            nuyn nkare kdni u nkare chi poxieli  */}
                                        {/*{ this.state.files.map((file, i) => {
                                            return <img key={i} a={card.show} src={file.base64} className=" card-img-top" />
                                        }) } */}

                                        <img src={card.upload_image} className="card-img-top" alt="cards" />
                                    </p>
                                    <p key={index} className="small" >{card.descripton}</p>
                                    <p key={index} className="small" >{card.date}</p>
                                    <NavLink to="">
                                        <p key={index} className="text-success small " >{card.button}</p>
                                    </NavLink>
                                </div>  
                            </div>                             
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddCard: (cardTitle, cardImage, cardDescription, cardButton) => {            
            dispatch({
                type: 'Add card', 
                title: cardTitle, 
                image: cardImage,
                descripton: cardDescription,
                date: moment(new Date()).format("MMM Do YY"),
                button: cardButton
            });          
        }
    })
)(Add);