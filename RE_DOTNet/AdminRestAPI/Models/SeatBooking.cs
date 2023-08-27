using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class SeatBooking
{
    public int Id { get; set; }

    public int? BookingId { get; set; }

    public int? SeatId { get; set; }

    public virtual TicketBooking? Booking { get; set; }

    public virtual Seat IdNavigation { get; set; } = null!;
}
