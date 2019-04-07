import ContentModel from '../../foundation/ContentModel';

export default class RichTextBlock extends React.Component {
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

export class RichTextBlockModel extends ContentModel { }