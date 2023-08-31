using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class Customer
{
    public int Id { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public string? ContactNo { get; set; }

    public DateOnly? Birthdate { get; set; }

    public string? Identity { get; set; }

    public string? Married { get; set; }

    public string? Address { get; set; }

    public int? LoginId { get; set; }

    public virtual Login? Login { get; set; }

    public virtual ICollection<TicketBooking> TicketBookings { get; set; } = new List<TicketBooking>();
}
