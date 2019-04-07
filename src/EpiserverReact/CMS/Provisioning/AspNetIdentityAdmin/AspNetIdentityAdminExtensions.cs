namespace CMS.Provisioning.AspNetIdentityAdmin
{
    using System;
    using System.Web.Mvc;
    using System.Web.Routing;
    using EPiServer.Shell.Web;
    using Owin;

    public static class AspNetIdentityAdminExtensions
    {
        public static string ControllerName<T>(this T controllerType)
            where T : Type
        {
            return controllerType.Name.TrimEnd("Controller");
        }

        public static void UseAspNetIdentityAdminPage(this IAppBuilder app, Func<bool> isLocal)
        {
            AspNetIdentityAdminConfig.IsLocal = isLocal;

            GlobalFilters.Filters.Add(new AspNetIdentityAdminActionFilter());
            
            if (isLocal())
            {
                RouteTable.Routes.Add(
                    "Provisioning - ASP.NET Identity Admin",
                    new Route(
                        "{controller}/{action}/{id}",
                        new RouteValueDictionary
                        {
                            {"controller", $"{typeof(AspNetIdentityAdminController).ControllerName()}"},
                            {"action", $"{nameof(AspNetIdentityAdminController.Index)}"},
                            {"id", UrlParameter.Optional}
                        },
                        new MvcRouteHandler())
                    {
                        RouteExistingFiles = false
                    });
            }
        }
    }
}