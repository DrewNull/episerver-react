using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(CMS.Startup))]

namespace CMS
{
    using EPiServer.ServiceApi.Owin;

    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Enable bearer token authentication using Membership for Service Api
            app.UseServiceApiMembershipTokenAuthorization(new ServiceApiTokenAuthorizationOptions
            {
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60)
            });
        }
    }
}
