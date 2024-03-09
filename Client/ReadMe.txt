***API Identity***
Install the following packages:
Infrastructure:
    1-Microsoft.AspNetCore.Identity
    2-Microsoft.AspNetCore.Identity.EntityFrameworkCore
    3-Microsoft.IdentityModel.Tokens
    4-System.IdentityModel.Tokens.Jwt
API:
    1-Microsoft.AspNetCore.Authentication.JwtBearer
Core:
    1-Microsoft.Extensions.Identity.Stores
----------------------------------------------------------------------------------------
Migration Commands:
    *Create: dotnet ef migrations add IdentityInitial -p Infrastructure -s API -o Identity/Migrations -c AppIdentityDbContext
    *Remove: dotnet ef migrations remove -p Infrastructure -s API -c AppIdentityDbContext