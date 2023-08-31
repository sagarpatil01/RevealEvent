using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class UserType
{
    public int Id { get; set; }

    public string? UserType1 { get; set; }

    public virtual ICollection<Login> Logins { get; set; } = new List<Login>();
}
