using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class Location
{
    public int Id { get; set; }

    public string CityName { get; set; } = null!;

    public string AreaName { get; set; } = null!;

    public virtual ICollection<Venue> Venues { get; set; } = new List<Venue>();
}
