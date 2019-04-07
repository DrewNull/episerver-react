namespace CMS.Features.Headers.Models
{
    using EPiServer.Core;
    using EPiServer.DataAnnotations;

    [ContentType(DisplayName = "DefaultHeaderBlock", GUID = "89a6cfaf-dff0-4a6e-b95c-92100914a465", Description = "")]
    public class DefaultHeaderBlock : BlockData
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