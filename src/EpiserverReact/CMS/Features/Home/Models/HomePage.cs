namespace CMS.Features.Home.Models
{
    using Content.Models;
    using EPiServer.DataAnnotations;

    [ContentType(DisplayName = "HomePage", GUID = "483e5c45-13f3-4073-811b-d35286065181", Description = "")]
    public class HomePage : ContentPage
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