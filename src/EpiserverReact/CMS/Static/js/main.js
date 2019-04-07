const main = document.querySelector('#main');
const episerverUrl = main.dataset.episerverUrl;
const episerverType = main.dataset.episerverType;

class RenderHelper {

    static getContentType(data) {

        return data.contentType[data.contentType.length - 1];
    }
    
    static getContentAreaItems(contentArea) {

        let components = [];
        const items = contentArea.expandedValue;

        if (items && items.length > 0) {

            for (let index = 0; index < items.length; index++) {

                const item = items[index];
                const contentType = RenderHelper.getContentType(item);
                const ComponentDefinition = ComponentDefinitions[contentType];
                components.push(<ComponentDefinition data={item} key={index} />);
            }
        }

        return components;
    }
}

class BannerBlock extends React.Component {
    render() {
        return (
            <div>
                <h2>Banner Block: {this.props.data.name}</h2>
            </div>
        );
    }
}

class GridBlock extends React.Component {
    render() {
        return (
            <div>
                <h2>Grid Block: {this.props.data.name}</h2>
            </div>
        );
    }
}

class RichTextBlock extends React.Component {
    render() {
        return (
            <div>
                <h2>Rich Text Block: {this.props.data.name}</h2>
            </div>
        );
    }
}

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <div>
                    Main Content:
                    {RenderHelper.getContentAreaItems(this.props.data.mainContent)}
                </div>
                <div>
                    Side Content:
                    {RenderHelper.getContentAreaItems(this.props.data.sideContent)}
                </div>
            </div>
        );
    }
}

const ComponentDefinitions = {
    'BannerBlock': BannerBlock,
    'GridBlock': GridBlock,
    'HomePage': HomePage,
    'RichTextBlock': RichTextBlock, 
};

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
    const contentType = RenderHelper.getContentType(response.data);
    const ComponentDefinition = ComponentDefinitions[contentType];
    ReactDOM.render(<ComponentDefinition data={response.data} />, main);
};

const handleError = (error) => {
    console.log('Error rendering page: ', error);
};

axios(pageRequest).then(renderPage).catch(handleError);