namespace CMS.Provisioning.AspNetIdentityAdmin
{
    using System.Web;
    using System.Web.Mvc;

    public class AspNetIdentityAdminActionFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!AspNetIdentityAdminConfig.IsEnabled())
                return;

            var registerUrl = VirtualPathUtility.ToAbsolute($"~/{typeof(AspNetIdentityAdminController).ControllerName()}");

            if (context.RequestContext.HttpContext.Request.Path.StartsWith(registerUrl))
                return;
            
            context.Result = new RedirectResult(registerUrl);
        }
    }
}