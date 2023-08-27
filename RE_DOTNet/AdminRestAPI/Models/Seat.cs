using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class Seat
{
    public int Id { get; set; }

    public string SRow { get; set; } = null!;

    public int SColumn { get; set; }

    public int? VenueId { get; set; }

    public virtual SeatBooking? SeatBooking { get; set; }
}
