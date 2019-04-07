import ImageMedia, { ImageMediaModelWrapper } from '../../foundation/media/ImageMedia';
import ContentModel from '../../foundation/ContentModel';

export default class BannerBlock extends React.Component {
    render() {

        /** @type {BannerBlockModel} */
        const model = this.props.data;

        return (
            <div>
                <h2>Banner Block: {model.name}</h2>
                <ImageMedia data={model.background.expandedValue} />
            </div>
        );
    }
}

export class BannerBlockModel extends ContentModel { 

    /** @type {ImageMediaModelWrapper} */
    background;
}