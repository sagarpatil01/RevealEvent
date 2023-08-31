using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class Venue
{
    public int Id { get; set; }

    public string VenueName { get; set; } = null!;

    public int Capacity { get; set; }

    public string Description { get; set; } = null!;

    public int LocationId { get; set; }

    public virtual ICollection<Event> Events { get; set; } = new List<Event>();

    public virtual Location Location { get; set; } = null!;
}
