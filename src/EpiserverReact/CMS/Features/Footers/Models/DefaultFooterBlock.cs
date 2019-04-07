namespace CMS.Features.Footers.Models
{
    using EPiServer.Core;
    using EPiServer.DataAnnotations;

    [ContentType(DisplayName = "DefaultFooterBlock", GUID = "9740989a-5cc6-430e-8f4e-76c7d38087cf", Description = "")]
    public class DefaultFooterBlock : BlockData
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