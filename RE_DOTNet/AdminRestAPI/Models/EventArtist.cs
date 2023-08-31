using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class EventArtist
{
    public int Id { get; set; }

    public int? EventId { get; set; }

    public int? ArtistId { get; set; }

    public virtual Artist? Artist { get; set; }

    public virtual Event? Event { get; set; }
}
