//import React from 'react';
//import ReactDOM from 'react-dom';

const main = document.querySelector('#main');
const episerverId = main.dataset.episerverId;
const episerverType = main.dataset.episerverType;

let fetchInput = new Request(`http://localhost:3181/api/episerver/v2.0/content/${episerverId}`);
let fetchInit = {
    method: 'GET', 
    credentials: 'include'
};

fetch(fetchInput, fetchInit)
    .then((response) => {
        console.log(response);
        const ContentType = response.contentType[response.contentType.length - 1];
        ReactDOM.render(<ContentType data={response} />);
    });

class CartPage extends React.Component {
    render() {
        return <h1>Cart Page</h1>;
    }
}

class ContentPage extends React.Component {
    render() {
        return <h1>Content Page</h1>;
    }
}

class HomePage extends React.Component {
    render() {
        return <h1>Home Page</h1>;
    }
}