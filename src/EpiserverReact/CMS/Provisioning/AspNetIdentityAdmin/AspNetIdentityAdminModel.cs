namespace CMS.Provisioning.AspNetIdentityAdmin
{
    using System.ComponentModel.DataAnnotations;
    using System.Web.Mvc;
    using CompareAttribute = System.ComponentModel.DataAnnotations.CompareAttribute;

    public class AspNetIdentityAdminModel
    {
        [Display(Name = "Email")]
        [EmailAddress]
        [Required]
        public string Email { get; set; }

        [AllowHtml]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        public string Password { get; set; }

        [AllowHtml]
        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string PasswordConfirm { get; set; }
    }
}