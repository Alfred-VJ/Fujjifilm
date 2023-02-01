using System.ComponentModel.DataAnnotations;

namespace Fujjifilm.Models
{
    public class User
    {
        [Key]
        public int IdUser { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string DayOfBirth { get; set; }
        public string Telephone { get; set; }
        public bool Status { get; set; }

    }
}
