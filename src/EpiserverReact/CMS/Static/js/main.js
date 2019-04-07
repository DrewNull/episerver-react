const main = document.querySelector('#main');
const episerverUrl = main.dataset.episerverUrl;
const episerverType = main.dataset.episerverType;

function getContentType(data) {
    return data.contentType[data.contentType.length - 1];
}

function getContentAreaItems(contentArea) {
    let components = [];
    const items = contentArea.expandedValue;
    if (items && items.length > 0) {
        for (var index = 0; index < items.length; index++) {
            let item = items[index];
            let contentType = getContentType(item);
            let ContentType = ContentTypes[contentType];
            components.push(<ContentType data={item} key={index} />);
        }
    }
    return components;
}

class BannerBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Banner Block: {this.props.data.name}</h2>
            </div>
        );
    }
}

class GridBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Grid Block: {this.props.data.name}</h2>
            </div>
        );
    }
}

class RichTextBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Rich Text Block: {this.props.data.name}</h2>
            </div>
        );
    }
}

const ContentTypes = {
    'BannerBlock': BannerBlock,
    'GridBlock': GridBlock,
    'RichTextBlock': RichTextBlock
};

class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <div>
                    Main Content:
                    {getContentAreaItems(this.props.data.mainContent)}
                </div>
                <div>
                    Side Content:
                    {getContentAreaItems(this.props.data.sideContent)}
                </div>
            </div>
        );
    }
}

const PageTypes = {
    'HomePage': HomePage
};

const pageRequest = {
    method: 'get',
    url: episerverUrl,
    headers: {
        'accept': 'application/json'
    },
    params: {
        'expand': '*'
    }
};

const renderPage = (response) => {
    let pageType = getContentType(response.data);
    let PageType = PageTypes[pageType];
    ReactDOM.render(<PageType data={response.data} key={response.data.contentLink.id} />, main);
};

const handleError = (error) => {

};

axios(pageRequest).then(renderPage).catch(handleError);