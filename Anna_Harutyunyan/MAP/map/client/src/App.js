import React, {useState, useEffect} from 'react';
import Maps from './Maps/Maps';
import {placesWithColor, placesWithColor2} from './utils/util';

const App = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        placesWithColor2().then(data => setPlaces(data));
    }, []);

    return (
        <div>
           <Maps
                center={{lat: 40.803157, lng: 44.497677}}
                zoom={15}
                places={places}
            />
        </div>
    );
};

export default App;
