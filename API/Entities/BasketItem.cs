using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    [Table("BasketItems")]
    public class BasketItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
       public DateOnly From { get ; set; } = new DateOnly();   
        public DateOnly To { get ;set; }   
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int BasketId{ get; set; }
        public Basket Basket { get; set; }
    }
}