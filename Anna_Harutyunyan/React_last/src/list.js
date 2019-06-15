import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

import "antd/dist/antd.css";
import { Menu } from "antd";

const { SubMenu } = Menu;

class List extends Component {
      
    handleClick = e => {
        console.log("click ", e);
    };
    
    render() {         
        const keys = [
        ['Browse Templates', ['School', 'Photo', 'Campaign', 'Motivational', 'Black And White']],
        ['Posters', ['Event', 'Advertising', 'Schools', 'Photo1', 'Quote', 'Campaigns', 'Motivationals', 'Black And White1']],
        ['Logos', ['Art & Design', 'Fashion', 'Band', 'Computer', 'Food & Drink', 'Education', 'Sports', 'Restaurant', 'Cafe']],
        ['Presentations', ['Creative', 'Simple', 'Education1', 'Business']],
        ['Flyers',['Events', 'Marketing', 'Promotional']],
        ['Cards', ['Birthday', 'Thank You', 'Invitation', 'Greeting', 'Photo2']],
        ['Infographics', ['Education2', 'Process']],
        ['Business Cards', ['Photography', 'Yoga', 'Music', 'DJ']],
        ['Resumes', ['Professional', 'Modern', 'Simples']],
        ['Photo Collages',['Mood Boards', 'Fashions', 'Travel', 'Art', 'Birthdays', 'Cool', 'Pet']]
        ];
       
        return (      
            <div className="container bg-light rounded shadow-sm mt-4">
                <Menu onClick={this.handleClick} style={{ width: 370 }} mode="inline">
                {keys.map(i => (
                    <SubMenu title={<span>{i[0]}</span>}>
                        {i[1].map((ii)=> {return  (i[1])?
                        <Menu.Item><NavLink target="_self" to={`/${ii}`}>-{ii}</NavLink></Menu.Item>:null})}
                    </SubMenu>
                ))}
                </Menu>            
            </div>      
        );
    }
}

export default List;