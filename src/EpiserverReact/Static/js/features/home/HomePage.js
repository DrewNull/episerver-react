import ComponentFactory from '../../foundation/ComponentFactory';
import ContentPageModel from '../../foundation/ContentPageModel';

export class HomePageModel extends ContentPageModel { }

export default class HomePage extends React.Component {
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