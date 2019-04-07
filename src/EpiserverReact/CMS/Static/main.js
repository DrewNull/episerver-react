import ComponentFactory from '../../Static/js/foundation/ComponentFactory';

const main = document.querySelector('#main');
const episerverUrl = main.dataset.episerverUrl;

const pageRequest = {
    headers: {
        'accept': 'application/json'
    },
    method: 'get',
    params: {
        'expand': '*'
    },
    url: episerverUrl,
};

const renderPage = (response) => {

    let data = response.data;
    let component = ComponentFactory.createFromContentData(data);

    ReactDOM.render(component, main);
};

const handleError = (error) => {
    console.log('Error rendering page: ', error);
};

axios(pageRequest).then(renderPage).catch(handleError);