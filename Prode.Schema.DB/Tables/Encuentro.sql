CREATE TABLE [dbo].[Encuentro]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [IdLocal] INT NOT NULL, 
    [IdVisitante] INT NOT NULL, 
    [Fecha] INT NOT NULL, 
    [FechaAlta] DATETIME2 NOT NULL DEFAULT getdate(), 
    CONSTRAINT [FK_Encuentro_Equipo_Local] FOREIGN KEY ([IdLocal]) REFERENCES [Equipo]([Id]), 
    CONSTRAINT [FK_Encuentro_Equipo_Visitante] FOREIGN KEY ([IdVisitante]) REFERENCES [Equipo]([Id])
)
