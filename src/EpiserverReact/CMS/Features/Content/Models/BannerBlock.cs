namespace CMS.Features.Content.Models
{
    using EPiServer.Core;
    using EPiServer.DataAnnotations;

    [ContentType(DisplayName = "BannerBlock", GUID = "d1c4ceeb-26fa-49e6-bb87-cb0d7e7725e8", Description = "")]
    public class BannerBlock : BlockData
    {
        /*
                [CultureSpecific]
                [Display(
                    Name = "Name",
                    Description = "Name field's description",
                    GroupName = SystemTabNames.Content,
                    Order = 1)]
                public virtual string Name { get; set; }
         */
    }
}