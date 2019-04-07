namespace CMS.Infrastructure
{
    using EPiServer.ContentApi.Cms;
    using EPiServer.ContentApi.Core.Configuration;
    using EPiServer.Framework;
    using EPiServer.Framework.Initialization;
    using EPiServer.ServiceLocation;

    [ModuleDependency(typeof(ContentApiCmsInitialization))]
    public class ContentDeliveryApiInitialization : IConfigurableModule
    {
        public void Initialize(InitializationEngine context)
        {
        }

        public void Uninitialize(InitializationEngine context)
        {

        }

        public void ConfigureContainer(ServiceConfigurationContext context)
        {
            context.Services.Configure<ContentApiConfiguration>(config =>
            {
                config
                    .Default()
                    .SetMinimumRoles(string.Empty)
                    .SetSiteDefinitionApiEnabled(true)
                    .SetMultiSiteFilteringEnabled(false);
            });
        }
    }
}