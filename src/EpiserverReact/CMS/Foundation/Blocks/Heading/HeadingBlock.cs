namespace CMS.Foundation.Blocks.Heading
{
    using EPiServer.Core;
    using EPiServer.DataAbstraction;
    using EPiServer.DataAnnotations;
    using EPiServer.Shell.ObjectEditing;
    using SelectionFactories;

    [ContentType(DisplayName = "HeadingBlock", GUID = "c669c424-43c2-4c1e-a0ee-96b7b6c7c796", Description = "", AvailableInEditMode = false)]
    public class HeadingBlock : BlockData
    {
        [CultureSpecific]
        public virtual string HeadingText { get; set; }

        [SelectOne(SelectionFactoryType = typeof(EnumSelectionFactory<HeadingLevel>))]
        public virtual HeadingLevel HeadingLevel { get; set; }

        public override void SetDefaultValues(ContentType contentType)
        {
            base.SetDefaultValues(contentType);

            this.HeadingLevel = HeadingLevel.H2;
        }
    }
}