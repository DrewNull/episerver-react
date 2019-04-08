namespace CMS.Foundation.Blocks.Heading
{
    using System.Collections.Generic;
    using System.Globalization;
    using EPiServer.ContentApi.Core.Serialization;
    using EPiServer.ContentApi.Core.Serialization.Models;
    using EPiServer.Core;
    using EPiServer.DataAbstraction;
    using EPiServer.ServiceLocation;
    using EPiServer.SpecializedProperties;

    [ServiceConfiguration(typeof(IPropertyModelConverter), Lifecycle = ServiceInstanceScope.Singleton)]
    public class HeadingBlockPropertyModelConverter : IPropertyModelConverter
    {
        public bool HasPropertyModelAssociatedWith(PropertyData propertyData)
        {
            var blockPropertyData = propertyData as PropertyBlock;

            return blockPropertyData?.Value is HeadingBlock;
        }

        public IPropertyModel ConvertToPropertyModel(
            PropertyData propertyData,
            CultureInfo language,
            bool excludePersonalizedContent,
            bool expand)
        {
            return new HeadingBlockPropertyModel((PropertyBlock) propertyData);
        }

        public int SortOrder => 1000;

        public IEnumerable<TypeModel> ModelTypes => new List<TypeModel>
        {
            new TypeModel
            {
                ModelType = typeof(BlockPropertyDefinitionType),
                ModelTypeString = nameof(BlockPropertyDefinitionType),
                PropertyType = typeof(HeadingBlock)
            }
        };
    }
}