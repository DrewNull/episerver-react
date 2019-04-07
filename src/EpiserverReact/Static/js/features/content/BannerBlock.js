import ContentModel from '../../foundation/ContentModel';

export class BannerBlockModel extends ContentModel { }

export default class BannerBlock extends React.Component {
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