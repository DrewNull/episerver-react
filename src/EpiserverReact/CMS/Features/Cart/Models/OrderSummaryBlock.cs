namespace CMS.Features.Cart.Models
{
    using EPiServer.Core;
    using EPiServer.DataAnnotations;

    [ContentType(DisplayName = "OrderSummaryBlock", GUID = "ea97c041-f195-4155-9d0d-ff13c2ece24d", Description = "")]
    public class OrderSummaryBlock : BlockData
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