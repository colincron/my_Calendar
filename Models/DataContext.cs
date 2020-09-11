using Microsoft.EntityFrameworkCore;

namespace my_Calendar.Models
{
    public class DataContext : DbContext
    {

        /**
            class sets up the connection to DB.
            you specify (DbSets) which of your models will be tables on the DB

            Important:
            If you modify anything on your models, you need to run migration:
                - dotnet ef migrations add <someName>
                - dotnet ef database update
        */

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        // specify which of your models will become tables in the DB
        public DbSet<Task> TasksTable {get; set;}

        // public DbSet<user> UsersTable {get; set;}
        // public DBSet<product> ProductsTable {get; set;}
    }
}