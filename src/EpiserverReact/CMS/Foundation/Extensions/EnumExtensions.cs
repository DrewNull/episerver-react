namespace CMS.Foundation.Extensions
{
    using System;
    using System.ComponentModel;
    using System.Globalization;
    using System.Linq;

    public static class EnumExtensions
    {
        public static string GetDescription<T>(this T e)
            where T : IConvertible
        {
            if (!(e is Enum))
            {
                return e.ToString(CultureInfo.InvariantCulture);
            }

            var enumType = e.GetType();
            var values = Enum.GetValues(enumType);

            foreach (int value in values)
            {
                if (value != e.ToInt32(CultureInfo.InvariantCulture))
                    continue;

                var descriptionAttribute = enumType
                        .GetMember(enumType.GetEnumName(value))
                        .FirstOrDefault()
                        ?.GetCustomAttributes(typeof(DescriptionAttribute), false)
                        .FirstOrDefault()
                    as DescriptionAttribute;

                if (descriptionAttribute != null)
                {
                    return descriptionAttribute.Description;
                }
            }

            return e.ToString(CultureInfo.InvariantCulture);
        }
    }
}