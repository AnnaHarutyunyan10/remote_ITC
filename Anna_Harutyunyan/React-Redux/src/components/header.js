import React, { Component } from 'react';
import '.././styles/header.scss';
import icon from '.././foto/logo/icon.png';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

import { Container, Row, Col } from 'react-bootstrap';

class Header extends Component {
   
    render() {
        const navItems = [
            {
                menu: 'COFFEE',
                subMenu: {
                    subTitle: 'Our Coffees',
                    subBody: [
                        'Whole Bean and Ground Coffee',
                        'Starbucks K-Cup Pods',
                        'Verismo® Pods',
                        'Starbucks Reserve® Coffee',
                        'Starbucks VIA®'
                    ]
                }
            },  {
                menu: 'TEA',
                subMenu: {
                    subTitle: 'Handcrafted Teas',
                    subBody: [
                        'Iced Teas',
                        'Tea Lattes',
                        'Brewed Teas',
                        'Bottled Craft Iced Tea',
                        'Nutrition',
                        'All Handcrafted Teas'
                    ]
                }
            }, {
                menu: 'MENU',
                subMenu: {
                    subTitle: 'Drinks',
                    subBody: [
                        'Bottled Drinks',
                        'Freshly Brewed Coffee',
                        'Cold Brew, Starbucks® Draft and Iced Coffee',
                        'Evolution Fresh™',
                        'Espresso Beverages',
                        'Frappuccino® Blended Beverages',
                        'Starbucks Refreshers™ Beverages',
                        'Teas',
                        'Other Hot Drinks'
                    ]
                }
            },  {
                menu: 'COFFEEHOUSE',
                subMenu: {
                    subTitle: 'Starbucks Mobile',
                    subBody: [
                        'Mobile Order & Pay',
                        'Google Assistant',
                        'Starbucks Catering',
                        'Delivery',
                        'Starbucks Music'
                    ]
                }
            }, {
                menu: 'SOCIAL IMPACT',
                subMenu: {
                    subTitle: 'Community',
                    subBody: [
                        'Refugee Hiring',
                        'Opportunity for Youth',
                        'Starbucks Foundation',
                        'Community Service',
                        'Starbucks Military Commitment',
                        'Diversity and Inclusion',
                        'Farming Communities',
                        'Our Hometown',
                        '(STARBUCKS) RED',
                        'Foodshare'
                    ]
                }
            },  {
                menu: 'STARBUCKS REWARDS',
                subMenu: {
                    subTitle: 'Starbucks® Rewards',
                    subBody: [
                        'Join Starbucks Rewards',
                        'View Your Stars',
                        'Rewards Program Terms of Use',
                        'Enter a Star Code',
                        'Starbucks® Rewards Visa® Card',
                        'Starbucks® Rewards Visa® Prepaid',
                        'Card'
                    ]
                }
            }, {
                menu: 'STORIES',
                subMenu: {
                    subTitle: 'Coffee',
                    subBody: [
                        'Starbucks Productions'
                    ]
                }
            },  {
                menu: 'GIFT CARDS',
                subMenu: {
                    subTitle: 'Buy a Card',
                    subBody: [
                        'Give a Gift by Email',
                        'Gift Cards for Businesses',
                        'Check Gift Card Balance',
                        'eGift Support'
                    ]
                }
            } 
        ];

        return (
            <div className={ this.props.backgroundNavBar }> 
                <Row>
                    <div className="p-2 bg-success col-sm-9"></div>
                    <a href="#" className="bg-dark p-2 text-white col-sm-3">Exciting updates to Starbucks® Rewards</a>
                </Row>  
                <Container fluid>
                    <nav className="navbar navbar-expand-md navbar-default navbar-light" >                   
                        <Row>
                            <Col md={1}>
                                <NavLink to="/addCard">
                                    <img src={ icon } className="logo rounded-circle " alt="header_icon" />                   
                                </NavLink>
                            </Col>
                            <Col md={11}>
                                <Row>
                                    <Col md={12}>
                                        <ul class="navbar-nav mr-auto">
                                            <li class="nav-item">
                                                <NavLink to="" className="nav-link border-right">Find a Srore</NavLink>
                                            </li>
                                            <li class="nav-item">
                                                <NavLink to="/login" className="nav-link ">Sign In</NavLink>
                                            </li>
                                            <li class="nav-item">
                                                <NavLink to="/registere" className="nav-link"></NavLink>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col md={12}>
                                        { this.props.search }
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                            <ul className="navbar-nav">
                                                {
                                                    navItems.map((i) => (
                                                        <div className="submenu-show">
                                                            <p className="my-menu-bg nav-item d-inline mx-2 mr-4" key={i}>{i.menu}</p>
                                                            <div className="submenu-hide my-bg px-5 py-4">
                                                                <p className="font-weight-bold px-2 text-light small my-header-menu-item-hover w-25" key={i}>{i.subMenu.subTitle}</p>
                                                                {i.subMenu.subBody.map((ii) => <li><a  className="my-header-menu-item-hover submenu text-light small" href="#" key={ii}>{ii}</a></li>)}
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                                <li className="nav-item">
                                                    <button className={this.props.btn_show_hide}>Log in</button>
                                                    <button type="button" 
                                                            className={ this.props.btnStyles }>
                                                            Sign Up
                                                    </button>
                                                </li>                               
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row> 
                    </nav> 
                </Container>
           </div>
        );
    }
}

export  default Header;