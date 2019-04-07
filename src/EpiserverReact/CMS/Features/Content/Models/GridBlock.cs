namespace CMS.Features.Content.Models
{
    using EPiServer.Core;
    using EPiServer.DataAnnotations;

    [ContentType(DisplayName = "GridBlock", GUID = "237035ab-6c7c-46b4-a63e-ebbc1ab5da8d", Description = "")]
    public class GridBlock : BlockData
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