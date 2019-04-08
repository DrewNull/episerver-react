namespace CMS.Foundation.Blocks.Link
{
    using EPiServer.ContentApi.Core.Serialization.Models;
    using EPiServer.SpecializedProperties;

    public class LinkBlockPropertyModel : PropertyModel<object, PropertyBlock>
    {
        public LinkBlockPropertyModel(PropertyBlock value)
            : base(value)
        {
            this.Value = new
            {
                ((LinkBlock)value.Value).Link,
                ((LinkBlock)value.Value).Target,
                ((LinkBlock)value.Value).Text,
            };
        }
    }
}