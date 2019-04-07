export default class ImageMedia extends React.Component {
    render() {

        /** @type {ImageMediaModel} */
        const model = this.props.data;

        return (
            <img src={model.url} alt={model.alternateText} />
        );
    }
}

export class ImageMediaModel {
    
    /** @type {string} */
    alternateText;

    /** @type {string} */
    url;
}

export class ImageMediaModelWrapper {

    /** @type {ImageMediaModel} */
    expandedValue;
}