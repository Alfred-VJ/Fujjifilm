using Microsoft.EntityFrameworkCore;
using Fujjifilm.Models;

namespace Fujjifilm.Data
{
    public class fujjiDb : DbContext
    {
        public fujjiDb(DbContextOptions<fujjiDb> options) : base(options)
        { 

        }

        public DbSet<User> Users => Set<User>();
        public DbSet<Product> Products => Set<Product>();
    }
}
