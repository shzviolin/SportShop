using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user=new AppUser{
                    DisplayName="Ali",
                    Email="ali@test.com",
                    UserName="ali@test.com",
                    Address=new Address{
                        FirstName="Ali",
                        LastName="Ebrahimi",
                        Street="Shahid Abbas Safaei",
                        City="Shiraz",
                        State="Fars",
                        Zipcode="90210"

                    }
                };

                await userManager.CreateAsync(user,"P@$$w0rd");

            }
        }
    }
}