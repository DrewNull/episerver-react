namespace CMS.Infrastructure
{
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    using EPiServer.ContentApi.Core.Serialization.Models;
    using EPiServer.Core;
    using EPiServer.Security;
    using EPiServer.SpecializedProperties;

    /// <summary>
    /// Custom view model to mapped with <see cref="PropertyContentArea"/>
    /// </summary>
    public class CustomContentAreaPropertyModel : ContentAreaPropertyModel
    {
        public CustomContentAreaPropertyModel(
            PropertyContentArea propertyContentArea,
            bool excludePersonalizedContent) : base(propertyContentArea, excludePersonalizedContent)
        {      
		
        }

        /// <summary>
        /// Herre we override Expand behaviour of this model and expands all level 
        /// </summary>
        /// <param name="language"></param>
        /// <returns></returns>
        protected override IEnumerable<ContentApiModel> ExtractExpandedValue(CultureInfo language)
        {
            var expandedValue = new List<ContentApiModel>();

            var contentReferences = this.Value.Where(x => x.ContentLink != null).Select(x => new ContentReference(x.ContentLink.Id.Value));
            var content = this._contentLoaderService.GetItems(contentReferences, language).ToList();

            var principal = this.ExcludePersonalizedContent ? this._principalAccessor.GetAnonymousPrincipal() : this._principalAccessor.GetCurrentPrincipal();
            var filteredContent = content.Where(x => this._accessEvaluator.HasAccess(x, principal, AccessLevel.Read)).ToList();

            filteredContent.ForEach(x => expandedValue.Add(this._contentModelMapper.TransformContent(x, this.ExcludePersonalizedContent, "*")));
            return expandedValue;
        }
    }
}