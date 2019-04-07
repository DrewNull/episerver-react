namespace CMS.Features.Cart.Controllers
{
    using System.Web.Mvc;
    using EPiServer.Web.Mvc;
    using Models;

    public class CartPageController : PageController<CartPage>
    {
        public ActionResult Index(CartPage currentPage)
        {
            /* Implementation of action. You can create your own view model class that you pass to the view or
             * you can pass the page type for simpler templates */

            return this.View(currentPage);
        }
    }
}