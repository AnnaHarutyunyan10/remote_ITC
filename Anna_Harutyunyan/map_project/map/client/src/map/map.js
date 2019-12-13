import React from "react";
import PropTypes from 'prop-types';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    Circle,
    InfoWindow
} from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";

import './map.css';

const Maps = compose(
    withProps({
        googleMapURL:
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyBwvsXoTryZmzBsDqBUjUdcjbSbgMVYokU&libraries=geometry,drawing,places`,
            loadingElement: <div className="fullHeight" />,
            containerElement: <div className="size" />,
            mapElement: <div className="fullHeight" />
    }),
    withStateHandlers(
        props => ({
        infoWindows: props.places.map(p => {
            return { isOpen: false };
        })
    }),
    {
        onToggleOpen: ({ infoWindows }) => selectedIndex => ({
            infoWindows: infoWindows.map((iw, i) => {
                iw.isOpen = selectedIndex === i;
                return iw;
            })
        })
    }
),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>          
        {props.places &&
        props.places.map((place, i) => {
            let lat = parseFloat(place.latitude, 10);
            let lng = parseFloat(place.longitude, 10);
        return (
            <React.Fragment>
                <Marker
                    id={place.category}
                    key={place.category}
                    //position={{ lat: lat, lng: lng }}
                    title="Click to zoom"
                    onClick={props.onToggleOpen.bind(this, i)}
                >
                    <InfoWindow onCloseClick={props.onToggleOpen.bind(i)}>
                        <div>{place.name}</div>
                    </InfoWindow>
                </Marker>
                {place.circle && <Circle
                    defaultCenter={{
                        lat: parseFloat(place.latitude),
                        lng: parseFloat(place.longitude)
                    }}
                    radius={place.category.charCodeAt(0)}
                    options={place.circle.options}      
                />}
            </React.Fragment>
            );
        })}
    </GoogleMap>
));

Maps.propTypes = {
    zoom: PropTypes.number.isRequired,
    center: PropTypes.object.isRequired,
    places: PropTypes.arrayOf(PropTypes.object).isRequired,
    infoWindows: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggleOpen: PropTypes.func.isRequired
};

export default Maps;



