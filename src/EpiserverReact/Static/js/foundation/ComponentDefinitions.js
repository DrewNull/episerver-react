import BannerBlock from '../features/content/BannerBlock';
import GridBlock from '../features/content/GridBlock';
import HomePage from '../features/home/HomePage';
import ImageMedia from './media/ImageMedia';
import RichTextBlock from '../features/content/RichTextBlock';

/** Needed to dynamically render components */
export const ComponentDefinitions = {
    'BannerBlock': BannerBlock,
    'GridBlock': GridBlock,
    'HomePage': HomePage,
    'ImageMedia': ImageMedia,
    'RichTextBlock': RichTextBlock,
};