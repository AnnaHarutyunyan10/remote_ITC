import React, { Component } from 'react';
import { Card } from 'antd';
import './Card.css';

const { Meta } = Card;

export class MyCard extends Component {
    render() {
        const { link, title, description } = this.props;
        return (
            <div>
                <Card
                    hoverable
                    className="card-width card-title card-content"
                    cover={<img alt="example" src={ link } />}
                >
                    <Meta title={ title } description={ description } />
                </Card>
            </div>
        );
    }
}