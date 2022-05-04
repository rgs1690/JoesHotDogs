namespace JoesHotDogs.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int Total { get; set; }
        public bool Delivery { get; set; }
        public string CardNum { get; set; }
        public string Expiration { get; set; }
        public string NameOnCard { get; set; }
        public int BillingZip {get; set;}
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Date { get; set; }
        public bool Status { get; set; }
        
    }
   
}
