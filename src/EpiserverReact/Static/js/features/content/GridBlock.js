import ContentModel from '../../foundation/models/ContentModel';

export default class GridBlock extends React.Component {
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

export class GridBlockModel extends ContentModel { }