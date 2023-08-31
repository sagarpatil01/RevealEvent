using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AdminRestAPI.Models;

public partial class RevealeventContext : DbContext
{
    public RevealeventContext()
    {
    }

    public RevealeventContext(DbContextOptions<RevealeventContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Artist> Artists { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Event> Events { get; set; }

    public virtual DbSet<EventArtist> EventArtists { get; set; }

    public virtual DbSet<GenreCategory> GenreCategories { get; set; }

    public virtual DbSet<Location> Locations { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Organizer> Organizers { get; set; }

    public virtual DbSet<Seat> Seats { get; set; }

    public virtual DbSet<SeatBooking> SeatBookings { get; set; }

    public virtual DbSet<TicketBooking> TicketBookings { get; set; }

    public virtual DbSet<UserType> UserTypes { get; set; }

    public virtual DbSet<Venue> Venues { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=revealevent", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Artist>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("artist");

            entity.HasIndex(e => e.LoginId, "artist_fk_idx");

            entity.HasIndex(e => e.ContactNo, "contact_no_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Email, "email_UNIQUE").IsUnique();

            entity.HasIndex(e => e.GenreCatId, "genre_fk_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ContactNo)
                .HasMaxLength(13)
                .HasColumnName("contact_no");
            entity.Property(e => e.Description)
                .HasMaxLength(500)
                .HasColumnName("description");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(100)
                .HasColumnName("first_name");
            entity.Property(e => e.GenreCatId).HasColumnName("genre_cat_id");
            entity.Property(e => e.LastName)
                .HasMaxLength(100)
                .HasColumnName("last_name");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.SocialMedia1)
                .HasMaxLength(100)
                .HasColumnName("social_media1");
            entity.Property(e => e.SocialMedia2)
                .HasMaxLength(100)
                .HasColumnName("social_media2");
            entity.Property(e => e.SocialMedia3)
                .HasMaxLength(100)
                .HasColumnName("social_media3");

            entity.HasOne(d => d.GenreCat).WithMany(p => p.Artists)
                .HasForeignKey(d => d.GenreCatId)
                .HasConstraintName("genre_fk");

            entity.HasOne(d => d.Login).WithMany(p => p.Artists)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("artist_fk");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("customer");

            entity.HasIndex(e => e.ContactNo, "contact_no_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Email, "email_UNIQUE").IsUnique();

            entity.HasIndex(e => e.LoginId, "user_fk_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(300)
                .HasColumnName("address");
            entity.Property(e => e.Birthdate).HasColumnName("birthdate");
            entity.Property(e => e.ContactNo)
                .HasMaxLength(13)
                .HasColumnName("contact_no");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(100)
                .HasColumnName("first_name");
            entity.Property(e => e.Identity)
                .HasMaxLength(20)
                .HasColumnName("identity");
            entity.Property(e => e.LastName)
                .HasMaxLength(100)
                .HasColumnName("last_name");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.Married)
                .HasMaxLength(20)
                .HasColumnName("married");

            entity.HasOne(d => d.Login).WithMany(p => p.Customers)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("customer_fk");
        });

        modelBuilder.Entity<Event>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("event");

            entity.HasIndex(e => e.GenreCatId, "fenre_cat_id_fk_idx");

            entity.HasIndex(e => e.OrganiserId, "organizer_id_fk_idx");

            entity.HasIndex(e => e.VenueId, "venue_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description)
                .HasMaxLength(500)
                .HasColumnName("description");
            entity.Property(e => e.Duration)
                .HasMaxLength(100)
                .HasColumnName("duration");
            entity.Property(e => e.EventDate).HasColumnName("event_date");
            entity.Property(e => e.EventName)
                .HasMaxLength(100)
                .HasColumnName("event_name");
            entity.Property(e => e.GenreCatId).HasColumnName("genre_cat_id");
            entity.Property(e => e.OrganiserId).HasColumnName("organiser_id");
            entity.Property(e => e.Price)
                .HasPrecision(10, 2)
                .HasColumnName("price");
            entity.Property(e => e.VenueId).HasColumnName("venue_id");

            entity.HasOne(d => d.GenreCat).WithMany(p => p.Events)
                .HasForeignKey(d => d.GenreCatId)
                .HasConstraintName("genre_cat_id_fk");

            entity.HasOne(d => d.Organiser).WithMany(p => p.Events)
                .HasForeignKey(d => d.OrganiserId)
                .HasConstraintName("organizer_id_fk");

            entity.HasOne(d => d.Venue).WithMany(p => p.Events)
                .HasForeignKey(d => d.VenueId)
                .HasConstraintName("fk_venue_id");
        });

        modelBuilder.Entity<EventArtist>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("event_artist");

            entity.HasIndex(e => e.ArtistId, "artist_id_fk_idx");

            entity.HasIndex(e => e.EventId, "event_id_fk_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ArtistId).HasColumnName("artist_id");
            entity.Property(e => e.EventId).HasColumnName("event_id");

            entity.HasOne(d => d.Artist).WithMany(p => p.EventArtists)
                .HasForeignKey(d => d.ArtistId)
                .HasConstraintName("artist_id_fk2");

            entity.HasOne(d => d.Event).WithMany(p => p.EventArtists)
                .HasForeignKey(d => d.EventId)
                .HasConstraintName("event_id_fk");
        });

        modelBuilder.Entity<GenreCategory>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("genre_category");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(100)
                .HasColumnName("category_name");
            entity.Property(e => e.CategoryType)
                .HasMaxLength(255)
                .HasColumnName("category_type");
        });

        modelBuilder.Entity<Location>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("location");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.AreaName)
                .HasMaxLength(100)
                .HasColumnName("area_name");
            entity.Property(e => e.CityName)
                .HasMaxLength(100)
                .HasColumnName("city_name");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("login");

            entity.HasIndex(e => e.UserTypeId, "fk_utid");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .HasColumnName("password");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.UserTypeId).HasColumnName("user_type_id");
            entity.Property(e => e.Username)
                .HasMaxLength(100)
                .HasColumnName("username");

            entity.HasOne(d => d.UserType).WithMany(p => p.Logins)
                .HasForeignKey(d => d.UserTypeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_utid");
        });

        modelBuilder.Entity<Organizer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("organizer");

            entity.HasIndex(e => e.ContactNo, "contact_no_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Email, "email_UNIQUE").IsUnique();

            entity.HasIndex(e => e.LicenceNo, "licence_no_UNIQUE").IsUnique();

            entity.HasIndex(e => e.LoginId, "organiser_fk_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CompanyName)
                .HasMaxLength(100)
                .HasColumnName("company_name");
            entity.Property(e => e.ContactNo)
                .HasMaxLength(13)
                .HasColumnName("contact_no");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.LicenceNo)
                .HasMaxLength(100)
                .HasColumnName("licence_no");
            entity.Property(e => e.LoginId).HasColumnName("login_id");

            entity.HasOne(d => d.Login).WithMany(p => p.Organizers)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("organizer_fk");
        });

        modelBuilder.Entity<Seat>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("seat");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.SColumn).HasColumnName("s_column");
            entity.Property(e => e.SRow)
                .HasMaxLength(20)
                .HasColumnName("s_row");
            entity.Property(e => e.VenueId).HasColumnName("venue_id");
        });

        modelBuilder.Entity<SeatBooking>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("seat_booking");

            entity.HasIndex(e => e.BookingId, "bookin_fk_idx");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("id");
            entity.Property(e => e.BookingId).HasColumnName("booking_id");
            entity.Property(e => e.SeatId).HasColumnName("seat_id");

            entity.HasOne(d => d.Booking).WithMany(p => p.SeatBookings)
                .HasForeignKey(d => d.BookingId)
                .HasConstraintName("bookin_fk");

            entity.HasOne(d => d.IdNavigation).WithOne(p => p.SeatBooking)
                .HasForeignKey<SeatBooking>(d => d.Id)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("seat_fk");
        });

        modelBuilder.Entity<TicketBooking>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("ticket_booking");

            entity.HasIndex(e => e.CustomerId, "customer_id_fk1_idx");

            entity.HasIndex(e => e.EventId, "event-id_fk3_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BookingDate).HasColumnName("booking_date");
            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.EventId).HasColumnName("event_id");
            entity.Property(e => e.PaymentMethod)
                .HasMaxLength(100)
                .HasColumnName("payment_method");
            entity.Property(e => e.PaymentStatus)
                .HasMaxLength(100)
                .HasColumnName("payment_status");
            entity.Property(e => e.Quantity)
                .HasDefaultValueSql("'1'")
                .HasColumnName("quantity");
            entity.Property(e => e.TotalAmount)
                .HasPrecision(12, 2)
                .HasColumnName("total_amount");

            entity.HasOne(d => d.Customer).WithMany(p => p.TicketBookings)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("customer_id_fk1");

            entity.HasOne(d => d.Event).WithMany(p => p.TicketBookings)
                .HasForeignKey(d => d.EventId)
                .HasConstraintName("event-id_fk3");
        });

        modelBuilder.Entity<UserType>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("user_type");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.UserType1)
                .HasMaxLength(100)
                .HasColumnName("user_type");
        });

        modelBuilder.Entity<Venue>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("venue");

            entity.HasIndex(e => e.LocationId, "location_fk_idx");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Capacity).HasColumnName("capacity");
            entity.Property(e => e.Description)
                .HasMaxLength(500)
                .HasColumnName("description");
            entity.Property(e => e.LocationId).HasColumnName("location_id");
            entity.Property(e => e.VenueName)
                .HasMaxLength(100)
                .HasColumnName("venue_name");

            entity.HasOne(d => d.Location).WithMany(p => p.Venues)
                .HasForeignKey(d => d.LocationId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("location_fk");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
