using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Customers.Models;

public partial class CustomerReactContext : DbContext
{
    public CustomerReactContext()
    {
    }

    public CustomerReactContext(DbContextOptions<CustomerReactContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Genero> Generos { get; set; }

    public virtual DbSet<TipoDocumento> TipoDocumentos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-LVJNNNI\\SQLEXPRESS; DataBase=CustomerReact;Integrated Security=true;Encrypt=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Codigo);

            entity.Property(e => e.Apellido1)
                .HasMaxLength(30)
                .HasColumnName("Apellido_1");
            entity.Property(e => e.Apellido2)
                .HasMaxLength(30)
                .HasColumnName("Apellido_2");
            entity.Property(e => e.Direcciones).HasMaxLength(100);
            entity.Property(e => e.Emails).HasMaxLength(100);
            entity.Property(e => e.Nombres).HasMaxLength(30);
            entity.Property(e => e.Telefonos).HasMaxLength(100);
        });

        modelBuilder.Entity<Genero>(entity =>
        {
            entity.Property(e => e.Nombre)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TipoDocumento>(entity =>
        {
            entity.ToTable("TipoDocumento");

            entity.Property(e => e.Codigo)
                .HasMaxLength(2)
                .IsUnicode(false)
                .HasColumnName("codigo");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
