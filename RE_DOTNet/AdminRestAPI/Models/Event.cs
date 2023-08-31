using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class Event
{
    public int Id { get; set; }

    public string EventName { get; set; } = null!;

    public string Description { get; set; } = null!;

    public DateOnly EventDate { get; set; }

    public string Duration { get; set; } = null!;

    public decimal Price { get; set; }

    public int? GenreCatId { get; set; }

    public int? VenueId { get; set; }

    public int? OrganiserId { get; set; }

    public virtual ICollection<EventArtist> EventArtists { get; set; } = new List<EventArtist>();

    public virtual GenreCategory? GenreCat { get; set; }

    public virtual Organizer? Organiser { get; set; }

    public virtual ICollection<TicketBooking> TicketBookings { get; set; } = new List<TicketBooking>();

    public virtual Venue? Venue { get; set; }
}
