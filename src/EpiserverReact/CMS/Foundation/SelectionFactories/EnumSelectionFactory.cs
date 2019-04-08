namespace CMS.Foundation.SelectionFactories
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using EPiServer.Shell.ObjectEditing;
    using Extensions;

    public class EnumSelectionFactory<T> : ISelectionFactory
        where T : IConvertible
    {
        public IEnumerable<ISelectItem> GetSelections(ExtendedMetadata metadata)
        {
            var selectItems = Enum
                .GetValues(typeof(T))
                .Cast<T>()
                .Select(x => new SelectItem
                {
                    Text = x.GetDescription(),
                    Value = x,
                })
                .ToList();

            return selectItems;
        }
    }
}