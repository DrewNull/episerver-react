namespace CMS.Features.Content.Models
{
    using EPiServer.Core;
    using EPiServer.DataAnnotations;

    [ContentType(DisplayName = "RichTextBlock", GUID = "b6bbbce6-4a8e-4d0f-93f2-547cdafc1c5d", Description = "")]
    public class RichTextBlock : BlockData
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