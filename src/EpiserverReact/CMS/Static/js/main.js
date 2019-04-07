const main = document.querySelector('#main');
const episerverUrl = main.dataset.episerverUrl;
const episerverType = main.dataset.episerverType;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        );
    }
}

const PageTypes = {
    'HomePage': HomePage
};

const BlockTypes = {
    
};

const pageRequest = {
    method: 'get',
    url: episerverUrl,
    headers: {
        'accept': 'application/json'
    }
};

const renderPage = (response) => {
    let pageType = response.data.contentType[response.data.contentType.length - 1];
    let PageType = PageTypes[pageType];
    ReactDOM.render(<PageType data={response.data} />, main);
};

const handleError = (error) => {

};

axios(pageRequest).then(renderPage).catch(handleError);