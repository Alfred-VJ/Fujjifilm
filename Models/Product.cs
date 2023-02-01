using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Fujjifilm.Models
{
    public class Product
    {
        [Key]
        public int IdProduct { get; set; }
        public int CodeProduct { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string DischargeDate { get; set; }
        public string Status { get; set; }
        public string TypeProduct { get; set; }

        [ForeignKey("User")]
        public int IdUser { get; set; }
        public User User { get; set; }
    }
}
