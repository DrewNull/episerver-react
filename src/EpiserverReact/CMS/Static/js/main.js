/** Creates React components from Episerver content */
class ComponentFactory {

    /**
     * Creates a React component from an Episerver content item
     * @param {EpiContentData} epiContentData 
     * @param {*=} key 
     */
    static createFromContentData(epiContentData, key) {

        const contentType = EpiContentData.getContentType(epiContentData);
        const ComponentDefinition = ComponentDefinitions[contentType];

        return <ComponentDefinition data={epiContentData} key={key} />;
    }

    /** 
     * Creates a list of React components from an Episerver content area
     * @param {EpiContentArea} epiContentArea
     */
    static createFromContentArea(epiContentArea) {

        let components = [];
        let items = epiContentArea.expandedValue || [];

        if (items && items.length > 0) {

            for (let key = 0; key < items.length; key++) {

                let item = items[key];
                let component = ComponentFactory.createFromContentData(item, key);

                components.push(component);
            }
        }

        return components;
    }
}

/** Represents an Episerver ContentArea */
class EpiContentArea {
    /**
     * List of child content items within the ContentArea
     * @type {Array<EpiContentData>}
     */
    expandedValue;
}

/** Represents an Episerver ContentData instance */
class EpiContentData {
    /**
     * An Episerver content instance; can be a page, block, media, etc
     * @type {Array<string>}
     */
    contentType;

    static getContentType(contentData) {
        return contentData && contentData.contentType && contentData.contentType[contentData.contentType.length - 1] || '';
    }
}

class ContentModel {

    /** @type {string} */
    name;
}

class BannerBlockModel extends ContentModel { }
class GridBlockModel extends ContentModel { }
class RichTextBlockModel extends ContentModel { }

class ContentPageModel extends ContentModel {

    /** @type {ContentArea} */
    mainContent;

    /** @type {ContentArea} */
    sideContent;
}

class HomePageModel extends ContentPageModel { }

// components

class BannerBlock extends React.Component {
    render() {

        /** @type {BannerBlockModel} */
        const model = this.props.data;

        return (
            <div>
                <h2>Banner Block: {model.name}</h2>
            </div>
        );
    }
}

class GridBlock extends React.Component {
    render() {

        /** @type {GridBlockModel} */
        const model = this.props.data;

        return (
            <div>
                <h2>Grid Block: {model.name}</h2>
            </div>
        );
    }
}

class RichTextBlock extends React.Component {
    render() {

        /** @type {RichTextBlockModel} */
        const model = this.props.data;

        return (
            <div>
                <h2>Rich Text Block: {model.name}</h2>
            </div>
        );
    }
}

class HomePage extends React.Component {
    render() {

        /** @type {HomePageModel} */
        const model = this.props.data;

        return (
            <div>
                <h1>Home Page: {model.name}</h1>
                <div>
                    Main Content:
                    {ComponentFactory.createFromContentArea(model.mainContent)}
                </div>
                <div>
                    Side Content:
                    {ComponentFactory.createFromContentArea(model.sideContent)}
                </div>
            </div>
        );
    }
}

// component definition registration - required to dynamically render components
const ComponentDefinitions = {
    'BannerBlock': BannerBlock,
    'GridBlock': GridBlock,
    'HomePage': HomePage,
    'RichTextBlock': RichTextBlock,
};

// the rest is the main page React bootstrapper/renderer

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