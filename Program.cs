
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

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            //Users
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

            //Products
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
            //.WithOpenApi();

            app.Run();
        }
    }
}