namespace CMS.Features.Content.Models
{
    using System.ComponentModel.DataAnnotations;
    using EPiServer.Core;
    using EPiServer.DataAnnotations;
    using EPiServer.Web;
    using Foundation.Blocks;
    using Foundation.Media;

    [ContentType(DisplayName = "BannerBlock", GUID = "d1c4ceeb-26fa-49e6-bb87-cb0d7e7725e8", Description = "")]
    public class BannerBlock : BlockData
    {
        public virtual HeadingBlock Heading { get; set; }

        public virtual LinkBlock CallToAction { get; set; }

        [AllowedTypes(typeof(ImageMedia))]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Background { get; set; }
    }
}