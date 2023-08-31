using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class GenreCategory
{
    public int Id { get; set; }

    public string CategoryName { get; set; } = null!;

    public string? CategoryType { get; set; }

    public virtual ICollection<Artist> Artists { get; set; } = new List<Artist>();

    public virtual ICollection<Event> Events { get; set; } = new List<Event>();
}
