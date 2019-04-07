namespace CMS.Foundation.Media
{
    using EPiServer.Core;
    using EPiServer.DataAnnotations;
    using EPiServer.Framework.DataAnnotations;

    [ContentType(DisplayName = "ImageMedia", GUID = "5b3369a6-e5da-40df-b3c5-7734d9c3ca71", Description = "")]
    [MediaDescriptor(ExtensionString = "gif,jpg,jpeg,png,svg")]
    public class ImageMedia : ImageData
    {
        [CultureSpecific]
        public virtual string AlternateText { get; set; }
    }
}