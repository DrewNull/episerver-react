namespace CMS.Infrastructure
{
    using System.Collections.Generic;
    using EPiServer.ContentApi.Core.Serialization;
    using EPiServer.ContentApi.Core.Serialization.Internal;
    using EPiServer.ContentApi.Core.Serialization.Models;
    using EPiServer.ServiceLocation;
    using EPiServer.SpecializedProperties;

    /// <summary>
    /// Custom converter for <see cref="PropertyContentArea" /> so Headless will use our custom custom view model when convert this property/>
    /// </summary>
    [ServiceConfiguration(typeof(IPropertyModelConverter), Lifecycle = ServiceInstanceScope.Singleton)]
    public class CustomContentAreaPropertyConverter : DefaultPropertyModelConverter
    {
        /// <summary>
        /// The Default converter of Headless has SortOrder = 0, so our custom converter should have this property with value greater than 0
        /// so Headless will prioritize the custom converter over the default converter.
        /// </summary>
        public override int SortOrder { get; } = 100;

        protected override IEnumerable<TypeModel> InitializeModelTypes()
        {
            var typeList = new List<TypeModel>();
            typeList.Add(new TypeModel() { PropertyType = typeof(PropertyContentArea), ModelType = typeof(CustomContentAreaPropertyModel), ModelTypeString = typeof(CustomContentAreaPropertyModel).FullName });
            return typeList;
        }
    }
}