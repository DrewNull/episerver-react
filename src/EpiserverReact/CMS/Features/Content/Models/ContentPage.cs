namespace CMS.Features.Content.Models
{
    using EPiServer.Core;
    using EPiServer.DataAnnotations;

    [ContentType(DisplayName = "ContentPage", GUID = "c1eb91fb-884f-4c8b-950c-d02cde35f524", Description = "")]
    public class ContentPage : PageData
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

        public virtual ContentArea HeaderContent { get; set; }

        public virtual ContentArea MainContent { get; set; }

        public virtual ContentArea SideContent { get; set; }

        public virtual ContentArea FooterContent { get; set; }
    }
}