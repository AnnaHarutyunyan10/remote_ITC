import React, { Component } from 'react';
import { MyCard } from '../Card/Card';
import './Cards.css';

const title = "Europe Street beat";
const description = "www.instagram.com";
const link = "https://robohash.org/555.png";

/*const a = async () => {
    try {
        const data = await fetch('http://localhost:3001/');
        console.log(data)
        return data;
    } catch(e) {}
}
console.log('last', a())
*/

export class Cards extends Component {
    constructor(props) {
        super(props);
        this.state ={
             data: {}
        };
    }

    componentWillMount(){

        fetch('http://localhost:3001/')
            .then(response => {
                return response.json()
            })
            .then(result => this.setState({ data: result }))
            .catch(e => console.log(e));
    }
    render() {
        var { data } = this.state;

        console.log(data)
        

        return (
            <div>
                <MyCard
                    link={ link }
                    title={ data.message }
                    description={ description }
                />
                {/*<div>{ data.cardList[0].name }</div>*/}
            </div>
        );
    }
}