import HeadingBlock, { HeadingBlockProperty } from '../../foundation/blocks/HeadingBlock';
import LinkBlock, { LinkBlockProperty } from '../../foundation/blocks/LinkBlock';
import ImageMedia, { ImageMediaWrapper } from '../../foundation/media/ImageMedia';
import ContentModel from '../../foundation/models/ContentModel';

export default class BannerBlock extends React.Component {
    render() {

        /** @type {BannerBlockModel} */
        const model = this.props.data;

        return (
            <div>
                <div>
                    <ImageMedia data={model.background.expandedValue} />
                </div>
                <div>
                    <HeadingBlock data={model.heading.value} />
                </div>
                <div>
                    <LinkBlock data={model.callToAction.value} />
                </div>
            </div>
        );
    }
}

export class BannerBlockModel extends ContentModel {

    /** @type {ImageMediaWrapper} */
    background;

    /** @type {LinkBlockProperty} */
    callToAction;

    /** @type {HeadingBlockProperty} */
    heading;
}