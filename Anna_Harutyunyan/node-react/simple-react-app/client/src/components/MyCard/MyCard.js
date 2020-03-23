import React, { Component } from 'react';
import { Card } from 'antd';
import './MyCard.css';

const { Meta } = Card;

export const MyCard = ({ link, title, description }) => {
    return (
        <>
            <Card
                hoverable
                className="card-width card-title card-content"
                cover={<img alt="example" src={link} />}
            >
                <Meta title={title} description={description} />
            </Card>
        </>
    );
}

export default MyCard;