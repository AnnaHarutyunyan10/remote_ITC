// import PLACES from "./information";
import {getAddresses} from "./api";

const groupBy = (xs, key) => {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

const getColor = (d) => {
    const g = d > 0 ? 50 + 20 * d  : 0;
    return `255, ${g}, 0`;
};

// This function can be used when there is no dataBase

// export const placesWithColor = () => {
//     const groupedPlaces = groupBy(PLACES,'category');
//     let max = 0;
//     Object.keys(groupedPlaces).forEach(i => max = groupedPlaces[i].length > max ? groupedPlaces[i].length : max);
//     PLACES.forEach((place) => {
//         const c = place.category;
//         const del = max - groupedPlaces[c].length;
//         const color = getColor(del);
//         place.circle.options.strokeColor = `rgb(${color})`;
//         place.circle.options.fillColor = `rgb(${color})`;
//         place.circle.options.strokeWeight = 4;
//     });
//     return PLACES;
// };

export const placesWithColor2 = () => {
    return getAddresses().then((places) => {
        const groupedPlaces = groupBy(places,'category');
        let max = 0;
        Object.keys(groupedPlaces).forEach(i => max = groupedPlaces[i].length > max ? groupedPlaces[i].length : max);
        places.forEach((place) => {
            const c = place.category;
            const del = max - groupedPlaces[c].length;
            const color = getColor(del);
            const circle = { options: {
                strokeColor: `rgb(${color})`, 
                fillColor: `rgb(${color})`,
                strokeWeight: 4
            }}
            place.circle = circle;
        });
        return places;
    })
};
