namespace CMS.Foundation.Blocks
{
    using EPiServer.Core;
    using EPiServer.DataAnnotations;

    [ContentType(DisplayName = "HeadingBlock", GUID = "c669c424-43c2-4c1e-a0ee-96b7b6c7c796", Description = "", AvailableInEditMode = false)]
    public class HeadingBlock : BlockData
    {
        [CultureSpecific]
        public virtual string HeadingText { get; set; }
    }
}