export default class HeadingBlock extends React.Component {
    render() {

        /** @type {HeadingBlockModel} */
        const model = this.props.data;

        return React.createElement(model.headingLevel || 'h2', null, model.headingText);
    }
}

export class HeadingBlockModel {

    /** @type {string} */
    headingLevel;

    /** @type {string} */
    headingText;
}

export class HeadingBlockProperty {

    /** @type {HeadingBlockModel} */
    value;
}