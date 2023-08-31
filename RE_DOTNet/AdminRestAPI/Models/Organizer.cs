using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class Organizer
{
    public int Id { get; set; }

    public string CompanyName { get; set; } = null!;

    public string LicenceNo { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string ContactNo { get; set; } = null!;

    public int? LoginId { get; set; }

    public virtual ICollection<Event> Events { get; set; } = new List<Event>();

    public virtual Login? Login { get; set; }
}
