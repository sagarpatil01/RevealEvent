using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class TicketBooking
{
    public int Id { get; set; }

    public int Quantity { get; set; }

    public decimal TotalAmount { get; set; }

    public DateOnly BookingDate { get; set; }

    public string PaymentMethod { get; set; } = null!;

    public string PaymentStatus { get; set; } = null!;

    public int? EventId { get; set; }

    public int? CustomerId { get; set; }

    public virtual Customer? Customer { get; set; }

    public virtual Event? Event { get; set; }

    public virtual ICollection<SeatBooking> SeatBookings { get; set; } = new List<SeatBooking>();
}
