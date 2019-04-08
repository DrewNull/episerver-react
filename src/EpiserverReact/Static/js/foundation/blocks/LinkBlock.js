import UrlModel from '../models/UrlModel';

export default class LinkBlock extends React.Component {
    render() {

        /** @type {LinkBlockModel} */
        const model = this.props.data;

        return (
            <a href={model.link.uri} target={model.target}>
                {model.text}
            </a>
        );
    }
}

export class LinkBlockModel {

    /** @type {UrlModel} */
    link;

    /** @type {string} */
    target;

    /** @type {string} */
    text;
}

export class LinkBlockProperty {

    /** @type {LinkBlockModel} */
    value;
}