namespace CMS.Foundation.Blocks.Heading
{
    using EPiServer.ContentApi.Core.Serialization.Models;
    using EPiServer.SpecializedProperties;

    public class HeadingBlockPropertyModel : PropertyModel<object, PropertyBlock>
    {
        public HeadingBlockPropertyModel(PropertyBlock value)
            : base(value)
        {
            this.Value = new
            {
                ((HeadingBlock)value.Value).HeadingText,
                ((HeadingBlock)value.Value).HeadingLevel
            };
        }
    }
}