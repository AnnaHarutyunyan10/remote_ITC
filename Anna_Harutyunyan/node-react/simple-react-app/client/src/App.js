import React, { useEffect, useState } from 'react';
import MyCard from './components/MyCard/MyCard';
const link = "https://robohash.org/555.png";


function App() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?fbclid=IwAR2XaWL_Ag-kbhtM1Qs-rOss9rjMU3PCAiaTQEb--3-IbiHZo4W9vch60F8')
            .then(response => response.json())
            .then(result => setCards(result))
            .catch(e => console.log(e))
    }, []);

    return (
        <div>
            {cards.map(card => (
                <MyCard
                    key={card.name}
                    link={link}
                    title={card.name}
                    description={card.email}
                />
            ))}
        </div>
    );
}

export default App;
