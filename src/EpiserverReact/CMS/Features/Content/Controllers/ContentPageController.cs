namespace CMS.Features.Content.Controllers
{
    using System.Web.Mvc;
    using EPiServer.Web.Mvc;
    using Models;

    public class ContentPageController : PageController<ContentPage>
    {
        public ActionResult Index(ContentPage currentPage)
        {
            /* Implementation of action. You can create your own view model class that you pass to the view or
             * you can pass the page type for simpler templates */

            return View(currentPage);
        }
    }
}