USE [CustomerReact]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 30/07/2023 03:43:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[Codigo] [bigint] IDENTITY(1,1) NOT NULL,
	[TipoDocumento] [nvarchar](max) NOT NULL,
	[NumeroDocumento] [bigint] NOT NULL,
	[Nombres] [nvarchar](30) NOT NULL,
	[Apellido_1] [nvarchar](30) NOT NULL,
	[Apellido_2] [nvarchar](30) NOT NULL,
	[Genero] [nvarchar](max) NOT NULL,
	[FechaNacimiento] [datetime2](7) NOT NULL,
	[Direcciones] [nvarchar](100) NOT NULL,
	[Telefonos] [nvarchar](100) NOT NULL,
	[Emails] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[Codigo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Generos]    Script Date: 30/07/2023 03:43:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Generos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](20) NULL,
 CONSTRAINT [PK_Generos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Customers] ON 

INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (2, N'Cedula Ciudadanía (CC)', 56343443446, N'LUCIA HELENA', N'MACHADO', N'HERNANDEZ', N'M', CAST(N'1990-05-21T00:00:00.0000000' AS DateTime2), N'DIAGONAL 34', N'4543654 4543654', N'f@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (3, N'Cedula Ciudadanía (CC)', 33777009004, N'JUAN KARLOS', N'TAMAYO', N'LORGIA', N'OTRO', CAST(N'2023-05-21T00:00:00.0000000' AS DateTime2), N'CARRERA 56', N'454543543', N'f@gmail.com s@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (6, N'Cedula Ciudadanía (CC)', 33445555664, N'JUAN CARLOS', N'CASTAÑO', N'GIL', N'M', CAST(N'1990-05-21T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'23444242', N'd@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (7, N'Cedula Ciudadanía (CC)', 80802378893, N'JUAN ALBERTO', N'FALLA', N'RUA', N'M', CAST(N'1990-05-21T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'989809', N'r@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (8, N'Tarjeta Identidad (TI)', 45445566754, N'MARIA', N'GIRALDO', N'BENITEZ', N'F', CAST(N'2015-12-24T00:00:00.0000000' AS DateTime2), N'CALLE 77', N'4445465', N'maria@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (9, N'Cedula Ciudadanía (CC)', 33909008887, N'JUANES', N'ARON', N'PEREA', N'M', CAST(N'1990-05-21T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'23444242', N'd@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (10, N'Registro Civil (RC)', 33444666658, N'JUAN ZAMIR', N'ROCHA', N'PEREZ', N'M', CAST(N'2023-05-24T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'2345465', N'd@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (11, N'Tarjeta Identidad (TI)', 33445877898, N'JUAN HERNAN', N'GIL', N'GOES', N'M', CAST(N'2015-05-24T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'2345465 4543654', N'd@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (12, N'Tarjeta Identidad (TI)', 33445566778, N'MARIA HERLINDA', N'BOLAÑOS', N'JUAREZ', N'F', CAST(N'2014-12-24T00:00:00.0000000' AS DateTime2), N'CALLE 77', N'4445465', N'maria@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (17, N'Cedula Ciudadanía (CC)', 33445555888, N'JUANA ANA', N'GALLO', N'QUINTERO', N'M', CAST(N'2000-05-21T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'23444242', N'd@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (21, N'Cedula Ciudadanía (CC)', 56343443422, N'MARGARITA FLOR', N'GALLARDO', N'FALLA', N'M', CAST(N'2022-05-21T00:00:00.0000000' AS DateTime2), N'DIAGONAL 34', N'4543654', N'f@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (25, N'Cedula Ciudadanía (CC)', 80802378800, N'ANAMAR', N'LOPEZ', N'PEREZ', N'FEMENINO', CAST(N'2022-05-21T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'989809', N'r@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (27, N'Cedula Ciudadanía (CC)', 80802370000, N'ROSA MARIA', N'LOPEZ', N'BELTRAN', N'M', CAST(N'2000-05-21T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'989809', N'r@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (28, N'Cedula Ciudadanía (CC)', 80802000000, N'ROSA LIND', N'REYES', N'REYES', N'M', CAST(N'2022-05-21T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'989809', N'r@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (30, N'Cedula Ciudadanía (CC)', 80800000001, N'FABIOLA TERESA', N'NOREÑA', N'GOMEZ', N'OTRO', CAST(N'2000-05-21T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'989809', N'r@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (31, N'Registro Civil (RC)', 89080321, N'FRANCY', N'GIRALDO', N'NOREÑA', N'FEMENINO', CAST(N'1980-05-29T00:00:00.0000000' AS DateTime2), N'CALLE 50, CARRERA 5', N'1234, 567, 890', N'email@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (32, N'Cedula Ciudadanía (CC)', 56343449999, N'ANA LUCIA', N'MACHADO', N'MACHADO', N'MASCULINO', CAST(N'1999-05-21T00:00:00.0000000' AS DateTime2), N'DIAGONAL 34', N'4543654', N'f@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (33, N'Cedula Ciudadanía (CC)', 33909007777, N'JUANES ESTEBAN', N'ARON', N'PEREA', N'M', CAST(N'1990-05-21T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'23444242', N'FJDOFJDIO')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (35, N'Cedula Ciudadanía (CC)', 33909008888, N'JUANES ESTEBAN', N'ARON', N'PEREA', N'M', CAST(N'1990-05-21T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'23444242', N'FJDOFJDIO')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (39, N'Cedula Ciudadanía (CC)', 45435549933, N'MARIO ALBERTO', N'LUJAN', N'LOPEZ', N'M', CAST(N'2000-05-21T00:00:00.0000000' AS DateTime2), N'CARRERA 32', N'543543', N's@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (43, N'CC', 80980980909, N'AMARANTO 123', N'PEREA', N'LOPEZ', N'FEMENINO', CAST(N'2000-09-10T00:00:00.0000000' AS DateTime2), N'CALLE 45', N'787987797', N'amarantop@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (44, N'TI', 83928309, N'CARLOS', N'ARAZA', N'ROMERO', N'OTRO', CAST(N'1978-09-09T00:00:00.0000000' AS DateTime2), N'CRA 34', N'32131231', N'c@gmail.com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (45, N'CE', 89380932, N'DARIO', N'PAEZ', N'GALLO', N'FEMENINO', CAST(N'1954-09-10T00:00:00.0000000' AS DateTime2), N'CALLE 65', N'22124441, 234343434, 432234', N'd@gmail.com, p@hotmail,com')
INSERT [dbo].[Customers] ([Codigo], [TipoDocumento], [NumeroDocumento], [Nombres], [Apellido_1], [Apellido_2], [Genero], [FechaNacimiento], [Direcciones], [Telefonos], [Emails]) VALUES (47, N'CC', 5453235, N'Jorge', N'GIRALDO', N'Machado', N'Masculino', CAST(N'1978-09-09T00:00:00.0000000' AS DateTime2), N'calle 50 # 33-53', N'3017712455', N'machadoggg@gmail.com')
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET IDENTITY_INSERT [dbo].[Generos] ON 

INSERT [dbo].[Generos] ([Id], [Nombre]) VALUES (1, N'MASCULINO')
INSERT [dbo].[Generos] ([Id], [Nombre]) VALUES (2, N'FEMENINO')
INSERT [dbo].[Generos] ([Id], [Nombre]) VALUES (3, N'OTRO')
SET IDENTITY_INSERT [dbo].[Generos] OFF
GO
