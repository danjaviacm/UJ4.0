let ocupations = [
    "Abogado",
    "Abogado Civilista",
    "Abogado Constitucionalista",
    "Abogado De Familia",
    "Abogado Derecho Administrativo",
    "Abogado Laborista",
    "Actuaci\u00f3n",
    "Administraci\u00f3n",
    "Administrador De Empresas",
    "Administrador De Seguros",
    "Administrador Educativo",
    "Administrador O Ejecutivo De La Salud",
    "Administrador O Ejecutivo Del Sector De Comercio Exterior",
    "Administrador O Ejecutivo Del Sector Financiero",
    "Administrador O Personal De Museos",
    "Agente Finca Raiz",
    "Agentes De Transito",
    "Agentes Vendedores  (Seguros, Viajes, Etc.)",
    "Agentes Viajeros En General",
    "Agricultor Propietario Administradores (Sin labor de oficina)",
    "Agricultura",
    "Agrimensores",
    "Agr\u00f3logo",
    "Agronomos",
    "Agrucultor En El Campo",
    "Alauador O Perito De Bienes Raices",
    "Alba\u00f1il",
    "Alcalde",
    "Almacenista",
    "Almacenistas O Bodegeros (Librerias, Cigarrerias, Almacenes)",
    "Almacenistas O Bodegueros (Almacenes De Repuestos, Ferreteria)",
    "Amansadores",
    "Analista",
    "Analista En General",
    "Anestesistas",
    "Apicultores",
    "Arquitectos (Con Labores Exclusivas De Oficina)",
    "Arrieros, Vaqueros Y Trabajadores En Establos",
    "Artesan\u00eda",
    "Artistas",
    "Artistas Extras",
    "Ascensorista",
    "Asesor",
    "Asesores De Impuestos",
    "Asesor Tributario",
    "Asistente",
    "Auditires Con Viajes",
    "Auditor",
    "Auditores (Con Labores Exclusivas De Oficina)",
    "Auditores Con Viajes",
    "Auxiliar",
    "Auxiliar de vuelo",
    "Avaluador Perito",
    "Avicultores",
    "Bacteriologos Y Laboratoristas",
    "Banquero",
    "Beneficiario Educativos",
    "Bibliotecario",
    "Bi\u00f3logo",
    "Bombero",
    "Botanicos",
    "Botones",
    "Braceros",
    "Cadenero",
    "Caficultores  (En El Campo)",
    "Cajero",
    "Camarero",
    "Camilleros",
    "Capataces",
    "Capataces, Maquinistas Y Obreros En General",
    "Capitanes, Tecnicos Y Pilotos",
    "Carniceros (En Fama)",
    "Catedraticos",
    "Cerrajeros",
    "Cheff De Cocina Primera Categoria",
    "Circos",
    "Cobrador",
    "Cobradores Ambulantes",
    "Comerciante",
    "Comerciante Ambulante En General",
    "Comerciante En Joyas (Ambulante)",
    "Comerciantes Ambulantes En General",
    "Comerciantes De Ganado En Haciendas Y Ferias",
    "Comerciantes En General",
    "Comercio Exterior o Negocios Internacionales",
    "Compositor",
    "Comunicaci\u00f3n",
    "Comunicador Social",
    "Concejal",
    "Conductor",
    "Conductores De Bulldozers",
    "Conductores De Buses Urbanos O Interurbanos",
    "Conductores De Carros Blindados Y Radiopatrullas",
    "Conductores De Gruas",
    "Conductores De Moto Como Medio De Trabajo",
    "Conductores De Moto Como Medio De Transporte",
    "Conductores De Moto Eventual",
    "Conductores De Taxis",
    "Conductores De Volquetas",
    "Conductores O Tripulantes De Ferrocarriles Autoferros O Metro",
    "Constructor Contratista (Con Labor Manual)",
    "Consultor",
    "Consultor Gerencial",
    "Contador",
    "Contadur\u00eda",
    "Contratistas Constructor (Sin Labor Manual)",
    "Coordinador",
    "Corredor De Bolsa",
    "Cosmetologas",
    "Decorador",
    "Delineantes",
    "Dependientes Con Manejo De Caja (Librerias, Cigarrerias, Almac\u00e9n)",
    "Dependientes En Establecimientos Al Por Mayor Y Al Detal",
    "Deporte profesional",
    "Deportista Profesional",
    "Derecho",
    "Despachador",
    "Dibujante",
    "Dietista",
    "Diplomaticos",
    "Director",
    "Director De Colegio O Universidad",
    "Dise\u00f1ador",
    "Dise\u00f1ador De Interiores",
    "Dise\u00f1ador De Ropa",
    "Dise\u00f1ador Grafico",
    "Dise\u00f1ador Industrial",
    "Dise\u00f1ador Textilero",
    "Distribuidor Autorizado",
    "Distribuidor De Alimentos",
    "Distribuidor De Equipos De Conmutacion",
    "Distribuidor De Equipos De Ortopedia",
    "Docente o Profesor",
    "Docentes En La Fer",
    "Ebanistas Y Carpinteros",
    "Economista",
    "Editor",
    "Educaci\u00f3n",
    "Ejecutivo",
    "Electricistas  (Con Trabajo En Postes Y Torres)",
    "Electricistas Manejando Hasta 250 Volt",
    "Electricistas Manejando Mas De 250 Volt",
    "Electricistas Manejando Mas De 300 Voltios",
    "Electricistas Redes Telefonicas Y Telegraficas",
    "Empleados Clase A",
    "Empleados Clase B",
    "Empleados Clase C",
    "Empleados De Administracion Teatros Cines Radio T.V ",
    "Empleados De Industrias Manufactureras Productos Alimenticio",
    "Empleados De Oficina ( Excluye Operarios)",
    "Empleados De Servicio En Colegios Y Universidades",
    "Empleados De Servicios",
    "Empleados En General",
    "Empleados En General De Pensiones Y Residencias De Segunda C",
    "Empleados En Reparacion De Bicicletas",
    "Empleados En Reparacion De Equipos De Oficina",
    "Empleados En Reparacion De Radios Y Televisores",
    "Encuadernadores",
    "Enfermeras  (En Manicomios)",
    "Enfermeras  (Salvo En Manicomios)",
    "Enfermer\u00eda",
    "Enfermero",
    "Enfermeros (As) Salvo En Manicomios",
    "Entrenador o Capacitador",
    "Escritoras (Es)",
    "Escultores",
    "Espeleologos",
    "Estadistico",
    "Estudiante",
    "Estudiantes En General",
    "Etnologos",
    "Fabricante De Joyas",
    "Farmaceutas",
    "Financiero",
    "Finanzas",
    "Fisico",
    "Fisioterapista",
    "Floristas",
    "Fonoaudiologo",
    "Fotografos",
    "Fotografos Ambulantes",
    "Fotografos En Estudio",
    "Fotografos Periodistas",
    "Funcionarios Alcaldia",
    "Ganader\u00eda",
    "Geologos",
    "Gerencia",
    "Gerente",
    "Guardas De Aduana",
    "Guias De Turismo",
    "Higienista Oral",
    "Hogar (Pensionados)",
    "Hornamentadores Hierro Aluminio Acero Etc",
    "Hoteler\u00eda",
    "Hoteleria Y Turismo",
    "Impresor",
    "Ingenier\u00eda",
    "Ingeniero",
    "Ingeniero Civil ( Sintrabajo En Obra)",
    "Ingeniero De Alimentos (Labor Exclusiva De Oficina)",
    "Ingeniero De Petroleos ( Con Labores Exclusivas De Oficina)",
    "Ingeniero De Radio Y Tv (Control Master Unicamente)",
    "Ingeniero Electrico (Sin Trabajo En Obras)",
    "Ingeniero Electronico ( Sin Trabajo De Obra)",
    "Ingeniero Geologo (Labor Exclusiva De Oficina)",
    "Ingeniero Industrial",
    "Ingeniero Mecanico ( Sin Trabajo Manual)",
    "Ingeniero Sanitario (Sin Trabajo En Obra)",
    "Ingenieros Calculistas ( Con Labores Exclusivas De Oficina)",
    "Ingenieros Constructores Carreteras Puentes Muelles Y Repres",
    "Ingenieros Constructores Redes Electricas Telefonicas Y Televisi\u00f3n",
    "Ingenieros De Sistemas",
    "Ingenieros Directores (En La Obra)",
    "Ingenieros Forestales (Con Labor Manual)",
    "Ingenieros Tecnicos ( Sin Visitas A Minas)",
    "Ingenieros Y Arquitectos Constructores De Edificios",
    "Ingenieros Y Personal De Administracion Minas Canteras Gases",
    "Ingeniero Textil (Sin Trabajo En Obra)",
    "Inspector De Riesgos",
    "Inspectores De Aereonautica Civil (Sin Labor Manual Y Viajes)",
    "Inspectores De La Aereonautica Civil ( Con Labores Exclusivas de oficina)",
    "Inspectores De La Aeronautica Civil (Con Labor Manual Y Viajes)",
    "Instrumentador",
    "Instrumentadoras",
    "Interventor",
    "Jardineros",
    "Jefe",
    "Jockeys",
    "Joyeros",
    "Jueces",
    "Limpiadores De Ventanas En Edificios Altos",
    "Locutor",
    "Maestros De Obra",
    "Marineros",
    "Masajistas",
    "Matarifes",
    "Mayordomos, Capataces, Peones Y Obreros",
    "Mec\u00e1nica",
    "Mecanicos Dentales",
    "Medicina",
    "M\u00e9dico",
    "Medicos Cirujanos",
    "Medicos En General Y Especialistas ( No Cirujanos)",
    "Medicos Radiologos",
    "Mensajero",
    "Mensajeros En Bicicleta",
    "Mercadeo",
    "Mercadotecnista",
    "Mesero",
    "Mesonero",
    "Metereologos",
    "Microbiologos",
    "Mineros, Capataces, Maquinistas, Obreros, Peones Y Otros",
    "Modelos",
    "Modistas",
    "M\u00fasica",
    "Musicos De Conjunto O De Orquesta En Local, Con O Sin Venta",
    "Musicos De Orquesta Sinfonica De Camara O Ensamble",
    "Notarios",
    "Nutricionista",
    "Obreros En General",
    "Obreros Usando Maquinaria",
    "Odontologo",
    "Odontologo Especializado",
    "Oficinistas En General",
    "Oftalmologo",
    "Operadores De Television En Estudio",
    "Operadores De Torno, Broca, Sierra",
    "Operario",
    "Operarios Bronce, Cobre, Plomo, Manganeso, Zinc, Etc.",
    "Operarios Hierro, Aluminio, Acero, Etc.",
    "Optometras",
    "Pagador",
    "Paramedico",
    "Pedagogo",
    "Peluquero",
    "Pensionado",
    "Periodistas",
    "Personal De Administracion En Las Plantas De Produccion En M",
    "Personal De Mantenimiento, Capataces Y Obreros En General",
    "Personal De Promocion Publicitaria En Las Calles",
    "Personal De Promocion Publicitaria En Las Calles (Librerias)",
    "Personero",
    "Pescadores En Mar",
    "Pescadores En Rios Y Lagos",
    "Pesca Submarina",
    "Pilotos Y Demas Personal De Vuelo  (Empresas Medianas)",
    "Pilotos Y Demas Personal De Vuelo  (Grandes Empresas)",
    "Pintor Artistico",
    "Pintores Artistas",
    "Pintores De Fachadas Utilizando Andamios",
    "Pintores De Interiores",
    "Piscicultores",
    "Pisicultores",
    "Plomeros",
    "Polic\u00eda",
    "Policias Y Personal Del Ejercito",
    "Porteros Y Celadores",
    "Presidente",
    "Primera Categoria: Propietarios Con Labor Exclusiva De Oficina",
    "Profesional",
    "Profesores De Automovilismo",
    "Profesores De Educacion Fisica",
    "Profesores En Colegios Y Universidades",
    "Programador",
    "Programador De Computadores",
    "Promotor",
    "Prop: Admin: Y Dem\u00e1s Empleados Hoteles Restaurantes Cafe",
    "Prop. De Vidrieria (Labores De Oficina Unicamente)",
    "Propietario Administrador O Empleado De Prenderia",
    "Propietario Administrador O Empleado De Taberna Primera Categoria",
    "Propietario Administrador O Empleado En Apuestas O Chance",
    "Propietario De Cafeterias Y Panaderias Con Manejo Exclusivo",
    "Propietario De Ladrillera",
    "Propietario De Otros Talleres Administradores (Sin Labor Man",
    "Propietario De Sastreria",
    "Propietario De Viveros (Con Labor Manual)",
    "Propietario O Admin. De Papeler\u00eda/Librera (Sin Labor Manual)",
    "Propietario O Administrador De Agencias De Empleo.(Slm)",
    "Propietario O Administrador De Anticuarios.(Slm)",
    "Propietario O Administrador De Fabrica De Calzado (Slm)",
    "Propietario O Administrador De Joyeria",
    "Propietario O Administradores De Academias De Baile",
    "Propietarios Administradores  (Con Labor Manual)",
    "Propietarios Administradores De Almacenes De Repuestos Ferreter\u00eda",
    "Propietarios Administradores De Imprenta Litografia Tipograf",
    "Propietarios Administradores De Taller De Mecanica Pesada",
    "Propietarios Administradores En Oficina  (Sin Labor Manual)",
    "Propietarios Administradores  (Labor Manual)",
    "Propietarios Administradores  (Sin Labor Manual)",
    "Propietarios, Administradores Y Demas Empleados  (Con Labores de oficina)",
    "Propietarios Administradores Y Empleados Lavanderias",
    "Propietarios Cafeterias Y Panaderias Sin Atencion Al Publico",
    "Propietarios De Agencias Viajes Y Turismo",
    "Propietarios De Joyeria  (Sin Labor Manual) Con Permanencia",
    "Propietarios De Negocios Comerciales Con Labor Exclusiva De",
    "Propietarios De Viveros  (Sin Labor Manual)",
    "Propietarios Estacion De Servicio (Con Labor Manual)",
    "Propietarios O Administradores De Agencias (Cobranzas Finca",
    "Propietarios O Administradores De Industrias Manufactureras",
    "Propietarios O Administradores De Marqueterias.(Slm)",
    "Propietarios O Administradores De Parqueaderos",
    "Propietarios O Administradores Estaciones De Servicios Gasol",
    "Propietarios O Administradores Lavanderias Y Tintorerias (Ofi)",
    "Propietarios O Administradores Talleres Mecanica Liviana",
    "Propietarios O Administradores Y Supervisores De Industrias",
    "Propietarios O Administradores Y Supervisores Industrias Man",
    "Propietarios Viveros (Sin Labor Manual)",
    "Propietarios Y Administradores",
    "Propietarios Y Administradores De Almacenes (Calzado, Mueble)",
    "Propietarios Y Administradores De Parqueaderos",
    "Propietarios Y Administradores De Taller Mecanica Pesada (La",
    "Propietarios Y Dependientes En Establecimientos Al Por Mayor",
    "Propietarios Y Empleados En General",
    "Propietarios Y/O Dependientes En Puestos De San Andresito",
    "Propietario Taller ( Sin Labor Manual)",
    "Prop. O Admin. De Almacen De Instrumentos Musicales",
    "Prop. O Admin. De Fabrica De Cepillos Y Escobas.(Slm)",
    "Prop: O Admin:Hoteles Restaurantes Cafeterias Panader\u00edas",
    "Prop: O Admin: Hoteles Restaurantes Cafeterias Y Pastelerias",
    "Prop. O Admini.De Deposito De Materiales De Construccion.",
    "Prop: O Administr: Empresas De Transportes Pasajeros Y Carga",
    "Protesista Dental",
    "Proyectista De Cines (Salas De Cine De Primera Categoria)",
    "Psicologo",
    "Psiquiatras",
    "Publicidad",
    "Quimicos",
    "Quimicos Con Acidos Y Explosivos",
    "Quimicos (Sin Trabajo Laboratorio)",
    "Radioperadores",
    "Recaudador",
    "Recepcionista",
    "Relaciones P\u00fablicas",
    "Relacionista Publico",
    "Religioso",
    "Relojero",
    "Rentista de Capital",
    "Reportero",
    "Representante de Ventas",
    "Revisor",
    "Revisor Fiscal",
    "Sacerdotes",
    "Salvavidas En Piscinas",
    "Salvavidas En Rios Y Mares",
    "Sastres",
    "Secretaria",
    "Segunda Categoria: Propietarios Y Empleados En General",
    "Serenateros",
    "Sicoorientador",
    "Siquiatra",
    "Sociologo",
    "Software",
    "Soldadores",
    "Supervisiones Industriales Manufactureras (Sin Labor Manual)",
    "Supervisores Artes Graficas (Sin Usar Maquinaria)",
    "Supervisores  (Sin Labor Manual)",
    "Supervisores Talleres Mecanica Pesada (Sin Labor Manual)",
    "Talabartero",
    "Tapiceros",
    "Taquillero",
    "T\u00e9cnico",
    "Tecnico De Aviacion (Sin Efectuar Viajes Ni Purebas)",
    "Tecnico No Agropecuario O Electricista",
    "Tecnico Reparacion Maquinas Tipograficas",
    "Tecnico Reparacion Maquinas Tipograficas, Impresoras De Sistemas",
    "Tecnicos Operarios (Escenaristas Decoradores Operarios)",
    "Tecnicos Radiologos",
    "Tecnicos Y Obreros En General",
    "Tecnologo (No Agropecuario O Electricista)",
    "Teologo",
    "Terapista De Lenguaje",
    "Terapista Ocupacional",
    "Tesorero",
    "Todos Los Cargos De La Empresa",
    "Topografo",
    "Trabajadores Manuales Art\u00edsticos (Artes Gr\u00e1ficas)",
    "Trabajador Social",
    "Tractoristas Y Operadores De Maquinaria Agricola",
    "Trader",
    "Traductor",
    "Vendedor De Equipos De Oficina Y Computadores",
    "Vendedor De Seguros",
    "Vendedores De Flores (No Floricultores)",
    "Vendedores O Distribuidores De Electrodomesticos (Slm)",
    "Ventas",
    "Veterinarios En Ciudad  (Perros, Gatos, Pajaros)",
    "Veterinarios En Finca  (Vacas, Caballos, Porcinos)",
    "Vidrieros (No Instaladores)",
    "Visitadores Medicos",
    "Visitador M\u00e9dico",
    "Web Master",
    "Zapateros",
    "Zootecnistas",
    "Otro"
]

export default ocupations