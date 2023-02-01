using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Fujjifilm.Models
{
    public class Product
    {
        [Key]
        public int IdProduct { get; set; }
        public string CodeProduct { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public DateTime DischargeDate { get; set; } = DateTime.Now;
        public bool Status { get; set; }
        public string TypeProduct { get; set; }

        [ForeignKey("User")]
        public int IdUser { get; set; }
        public User User { get; set; }
    }
}
