namespace CMS.Features.Cart.Models
{
    using Content.Models;
    using EPiServer.Core;
    using EPiServer.DataAnnotations;

    [ContentType(DisplayName = "CartPage", GUID = "d0de9c9c-b3fb-4da1-9fd3-b7234056c0ae", Description = "")]
    public class CartPage : ContentPage
    {
        /*
                [CultureSpecific]
                [Display(
                    Name = "Main body",
                    Description = "The main body will be shown in the main content area of the page, using the XHTML-editor you can insert for example text, images and tables.",
                    GroupName = SystemTabNames.Content,
                    Order = 1)]
                public virtual XhtmlString MainBody { get; set; }
         */
    }
}