import { ComponentDefinitions } from './ComponentDefinitions';

/** Creates React components from Episerver content */
export default class ComponentFactory {

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
export class EpiContentArea {
    /**
     * List of child content items within the ContentArea
     * @type {Array<EpiContentData>}
     */
    expandedValue;
}

/** Represents an Episerver ContentData instance */
export class EpiContentData {
    /**
     * An Episerver content instance; can be a page, block, media, etc
     * @type {Array<string>}
     */
    contentType;
    static getContentType(contentData) {
        return contentData && contentData.contentType && contentData.contentType[contentData.contentType.length - 1] || '';
    }
}