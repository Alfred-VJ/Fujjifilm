
using Fujjifilm.Data;
using Microsoft.EntityFrameworkCore;
using Fujjifilm.Models;


namespace Fujjifilm
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var connectionString = builder.Configuration.GetConnectionString("PostgreSQLConnections");
            builder.Services.AddDbContext<fujjiDb>(options =>
            options.UseNpgsql(connectionString));

            //cors
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("NuevaPolitica", app =>
                {
                    app.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }


            app.UseHttpsRedirection();

            app.UseCors("NuevaPolitica");

            app.UseAuthorization();

            //End-Points --> Users
            app.MapPost("/users/", async (User e, fujjiDb db) =>
            {
                db.Users.Add(e);
                await db.SaveChangesAsync();

                return Results.Created($"/user/{e.IdUser}", e);
            });

            app.MapGet("/users/{id:int}", async (int id, fujjiDb db) =>
            {
                return await db.Users.FindAsync(id)
                is User e
                ? Results.Ok(e)
                : Results.NotFound();
            });

            app.MapGet("/users/name", async (string name, fujjiDb db) =>
            {
                var user = await db.Users.FirstOrDefaultAsync(user => user.Name == name);
                return user != null
                    ? Results.Ok(user)
                    : Results.NotFound();
            });


            app.MapGet("/users", async (fujjiDb db) => await db.Users.ToListAsync());

            app.MapPut("/users/{id:int}", async (int id, User e, fujjiDb db) =>
            {
                if (e.IdUser != id) return Results.BadRequest();
                var user = await db.Users.FindAsync(id);

                if (user is null) return Results.NotFound();

                user.Name = e.Name;
                user.LastName = e.LastName;
                user.DayOfBirth = e.DayOfBirth;
                user.Telephone = e.Telephone;
                user.Status = e.Status;

                await db.SaveChangesAsync();
                return Results.Ok(user);
                
            });

            app.MapDelete("/users/{id:int}", async (int id, fujjiDb db) =>
            {
                var user = await db.Users.FindAsync(id);
                if(user is null) return Results.NotFound();
                db.Users.Remove(user);
                await db.SaveChangesAsync();

                return Results.NoContent();
            });

            //End-Points --> Products
            app.MapPost("/products/", async (Product e, fujjiDb db) =>
            {
                db.Products.Add(e);
                await db.SaveChangesAsync();

                return Results.Created($"/product/{e.IdProduct}", e);
            });

            app.MapGet("/products/{id:int}", async (int id, fujjiDb db) =>
            {
                return await db.Products.FindAsync(id)
                is Product e
                ? Results.Ok(e)
                : Results.NotFound();
            });

            app.MapGet("/products/{pageNumber}/{pageSize}", async (fujjiDb db, int pageNumber, int pageSize) => 
            await db.Products
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync());

            app.MapPut("/products/{id:int}", async (int id, Product e, fujjiDb db) =>
            {
                if(e.IdProduct != id) return Results.BadRequest();
                var product = await db.Products.FindAsync(id);

                if(product is null) return Results.NotFound();

                product.CodeProduct = e.CodeProduct;
                product.Name = e.Name;
                product.Price = e.Price;
                product.DischargeDate = e.DischargeDate;
                product.Status = e.Status;
                product.TypeProduct = e.TypeProduct;
                product.IdUser = e.IdUser;

                await db.SaveChangesAsync();
                return Results.Ok(product);
            });

            app.MapDelete("/products/{id:int}", async (int id, fujjiDb db) =>
            {
                var product = await db.Products.FindAsync(id);
                if(product is null) return Results.NotFound();
                db.Products.Remove(product);
                await db.SaveChangesAsync();

                return Results.NoContent();
            });
            //.WithOpenApi();

            app.Run();
        }
    }
}