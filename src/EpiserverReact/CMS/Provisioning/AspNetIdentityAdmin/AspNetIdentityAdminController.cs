namespace CMS.Provisioning.AspNetIdentityAdmin
{
    using System.Web.Mvc;
    using System.Web.Profile;
    using EPiServer.Core;
    using EPiServer.DataAbstraction;
    using EPiServer.Personalization;
    using EPiServer.Security;
    using EPiServer.ServiceLocation;
    using EPiServer.Shell.Security;
    using EPiServer.Web.Routing;

    public class AspNetIdentityAdminController : Controller
    {
        public const string ErrorKey = "CreateError";
        private const string AdminRoleName = "WebAdmins";
        private const string ViewPath = "~/Views/Provisioning/_AspNetIdentityAdmin.cshtml";

        [HttpGet]
        public ActionResult Index()
        {
            return this.View(ViewPath);
        }

        [AllowAnonymous]
        [HttpPost]
        [ValidateAntiForgeryToken]
        [ValidateInput(false)]
        public ActionResult Index(AspNetIdentityAdminModel model)
        {
            if (this.ModelState.IsValid)
            {
                var uiUserProvider = ServiceLocator.Current.GetInstance<UIUserProvider>();

                var result =
                    uiUserProvider.CreateUser(
                        model.Email,
                        model.Password,
                        model.Email,
                        null,
                        null,
                        true,
                        out UIUserCreateStatus status,
                        out var errors);

                if (status == UIUserCreateStatus.Success)
                {
                    var uiRoleProvider = ServiceLocator.Current.GetInstance<UIRoleProvider>();

                    uiRoleProvider.CreateRole(AdminRoleName);
                    uiRoleProvider.AddUserToRoles(result.Username, new[] { AdminRoleName });

                    if (ProfileManager.Enabled)
                    {
                        var profile = EPiServerProfile.Wrap(ProfileBase.Create(result.Username));
                        profile.Email = model.Email;
                        profile.Save();
                    }

                    AspNetIdentityAdminConfig.Disable();
                    
                    // set full access to web admin
                    var contentSecurityRepository = ServiceLocator.Current.GetInstance<IContentSecurityRepository>();
                    var contentSecurityDescriptor =
                        contentSecurityRepository
                            .Get(ContentReference.RootPage)
                            ?.CreateWritableClone() as IContentSecurityDescriptor;
                    contentSecurityDescriptor.AddEntry(new AccessControlEntry(AdminRoleName, AccessLevel.FullAccess));
                    contentSecurityRepository.Save(ContentReference.RootPage, contentSecurityDescriptor, SecuritySaveType.Replace);

                    var uiSignInManager = ServiceLocator.Current.GetInstance<UISignInManager>();
                    var uiSignInResponse = uiSignInManager.SignIn(uiUserProvider.Name, model.Email, model.Password);
                    if (uiSignInResponse)
                    {
                        return this.Redirect(UrlResolver.Current.GetUrl(ContentReference.StartPage));
                    }
                }
                
                foreach (var error in errors)
                {
                    this.ModelState.AddModelError(ErrorKey, error);
                }
            }

            // If we got this far, something failed, redisplay form
            return this.View(ViewPath, model);
        }

        protected override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (AspNetIdentityAdminConfig.IsEnabled())
            {
                base.OnAuthorization(filterContext);
            }
            else
            {
                filterContext.Result = new HttpNotFoundResult();
            }
        }
    }
}