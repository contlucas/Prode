/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

INSERT INTO [dbo].[Equipo](Nombre) 
	VALUES('River'),
		('Boca'),
		('Racing'),
		('Independiente')
GO

INSERT INTO [dbo].[Encuentro](IdLocal, IdVisitante, Fecha)
	VALUES(1, 2, 1),
		(3, 4, 1)
GO