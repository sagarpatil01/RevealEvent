using System;
using System.Collections.Generic;

namespace AdminRestAPI.Models;

public partial class Artist
{
    public int Id { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string ContactNo { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string? SocialMedia1 { get; set; }

    public string? SocialMedia2 { get; set; }

    public string? SocialMedia3 { get; set; }

    public int? LoginId { get; set; }

    public int? GenreCatId { get; set; }

    public virtual ICollection<EventArtist> EventArtists { get; set; } = new List<EventArtist>();

    public virtual GenreCategory? GenreCat { get; set; }

    public virtual Login? Login { get; set; }
}
