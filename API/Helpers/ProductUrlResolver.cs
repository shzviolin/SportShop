using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class ProductUrlResolver : IValueResolver<Product, ProductToReturnDto, string>
    {
        private readonly IConfiguration _config;
        private readonly ILogger<ProductUrlResolver> _logger;

        public ProductUrlResolver(IConfiguration config, ILogger<ProductUrlResolver> logger)
        {
            _config = config;
            _logger = logger;
        }
        public string Resolve(Product source, ProductToReturnDto destination, string destMember, ResolutionContext context)
        {
            try
            {
                if (source == null || string.IsNullOrEmpty(source.PictureUrl))
                {
                    return _config["ApiUrl"] + _config["DefaultImageUrl"];
                }

                return _config["ApiUrl"] + source.PictureUrl;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in ProductUrlResolver");
                throw;
            }
        }
    }
}