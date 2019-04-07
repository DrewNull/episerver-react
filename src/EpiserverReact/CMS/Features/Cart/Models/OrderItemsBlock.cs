namespace CMS.Features.Cart.Models
{
    using EPiServer.Core;
    using EPiServer.DataAnnotations;

    [ContentType(DisplayName = "OrderItemsBlock", GUID = "5dc44f2f-2fbc-401f-a5e4-4f9d6986648e", Description = "")]
    public class OrderItemsBlock : BlockData
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