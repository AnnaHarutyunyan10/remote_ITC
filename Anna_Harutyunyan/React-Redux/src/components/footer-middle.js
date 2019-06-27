import React, { Component } from 'react';
import '.././styles/footer.css'
 
class FooterMiddle extends Component {

    render () { 
        const footerMenu = [
            {
                footerItemTitle: 'ABOUT US',
                footerItem: [
                    'Our Company',
                    'Investor Relations',
                    'Starbucks Stories',
                    'Press Center'
                ]
            },  {
                footerItemTitle: 'CAREER CENTER',
                footerItem: [
                    'Working at Starbucks',
                    'College Plan',
                    'Current Partners',
                    'Corporate Careers',
                    'Manufacturing and Distribution',
                    'Retail Careers',
                    'International Careers'
                ]
            },  {
                footerItemTitle: 'FOR BUSINESS',
                footerItem: [
                    'Office Coffee',
                    'Starbucks Coffee International',
                    'Foodservice',
                    'Starbucks Card Corporate Sales',
                    'Landlord Support Center',
                    'Suppliers'
                ]
            },  {
                footerItemTitle: 'ONLINE COMMUNITY',
                footerItem: [
                    'Twitter',
                    'Facebook',
                    'Instagram',
                    'LinkedIn',
                    'Pinterest',
                    'YouTube',
                    'My Starbucks Idea'
                ]
            },  {
                footerItemTitle: 'QUICK LINKS',
                footerItem: [
                    'My Account',
                    'Store Locator',
                    'Nutrition Info',
                    'Customer Service'
                ]
            }
        ];
        return (
            <div className="container-fluid m-4 mt-5">
                <div className="row">
                    {
                        footerMenu.map((i) => <div className="col-md-2">
                                            <p className="my-footer-hover font-weight-bold">
                                                {i.footerItemTitle}
                                            </p>
                                            <p key={i}>{i.footerItem.map((ii) => 
                                                <p className="my-footer-hover" key={ii}>
                                                    {ii}
                                                </p>)}
                                            </p>
                                        </div>)
                    }
                </div>
            </div> 
        );
    }
}

export default FooterMiddle;