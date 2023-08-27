using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class Login
{
    public int Id { get; set; }

    public string? Username { get; set; }

    public string? Password { get; set; }

    public int UserTypeId { get; set; }

    public bool? Status { get; set; }

    public virtual ICollection<Artist> Artists { get; set; } = new List<Artist>();

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();

    public virtual ICollection<Organizer> Organizers { get; set; } = new List<Organizer>();

    public virtual UserType UserType { get; set; } = null!;
}
