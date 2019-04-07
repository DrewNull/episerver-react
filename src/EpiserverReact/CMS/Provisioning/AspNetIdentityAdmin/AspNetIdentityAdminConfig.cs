namespace CMS.Provisioning.AspNetIdentityAdmin
{
    using System;
    using EPiServer.ServiceLocation;
    using EPiServer.Shell.Security;

    public static class AspNetIdentityAdminConfig
    {
        private static bool? _isEnabled = null;

        public static Func<bool> IsLocal = () => false;

        public static Lazy<bool> IsAnyUserRegistered =
            new Lazy<bool>(() =>
            {
                var uiUserProvider = ServiceLocator.Current.GetInstance<UIUserProvider>();
                uiUserProvider.GetAllUsers(0, 1, out int totalUsers);
                return totalUsers > 0;
            });

        public static void Disable()
        {
            _isEnabled = false;
        }

        public static bool IsEnabled()
        {
            if (_isEnabled.HasValue)
            {
                return _isEnabled.Value;
            }

            var showUserRegistration = IsLocal() && !IsAnyUserRegistered.Value;
            if (!showUserRegistration)
            {
                _isEnabled = false;
            }

            return showUserRegistration;
        }
    }
}