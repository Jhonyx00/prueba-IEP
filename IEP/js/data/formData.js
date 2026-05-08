
/**
 * Datos para el formulario de registro.
 * 
 */
const formData = [
    {
        data: {
            category: "input",
            label: "Nombre completo",
            type: "text",
            errorMjs: "El nombre es obligatorio y debe tener al menos 3 caracteres.",
            name: "nombre",
            classList: ["col-12"],
            placeholder: "Ingrese su nombre completo",
        },
        callbacks: {
            formatedTextCallback: onlyLetters,
            validationCallback: min3
        }
    },
    {
        data: {
            category: "select",
            label: "Escolaridad",
            errorMjs: "Debe seleccionar un nivel de escolaridad",
            classList: ["col-12", "col-sm-6"],
            name: "escolaridad",
            placeholder: "Seleccione su nivel de estudios",
            options: [
                "Primaria",
                "Secundaria",
                "Preparatoria",
                "Técnico",
                "Licenciatura",
                "Maestría",
                "Doctorado",
                "Otro"
            ],
        },
        callbacks: {
            formatedTextCallback: onlyLetters,
            validationCallback: notEmpty
        }
    },
    {
        data: {
            category: "input",
            label: "Edad",
            name: "edad",
            errorMjs: "La edad debe ser entre 16 y 100 años.",
            classList: ["col-12", "col-sm-6"],
            min: 16,
            max: 100,
            placeholder: "Seleccione su edad",
        },
        callbacks: {
            formatedTextCallback: onlyNumbers,
            validationCallback: validAge
        }
    },
    {
        data: {
            category: "input",
            label: "Contacto",
            name: "contacto",
            errorMjs: "El contacto debe tener al menos 8 dígitos.",
            classList: ["col-12", "col-sm-6"],
            type: "text",
            placeholder: "Ingrese su número de teléfono"
        },
        callbacks: {
            formatedTextCallback: onlyNumbers,
            validationCallback: min8
        }
    },
    {
        data: {
            category: "input",
            label: "Ciudad",
            name: "ciudad",
            errorMjs: "La ciudad debe tener al menos 2 caracteres.",
            classList: ["col-12", "col-sm-6"],
            type: "text",
            placeholder: "Ingrese su ciudad"
        },
        callbacks: {
            formatedTextCallback: onlyLetters,
            validationCallback: min2
        }
    },
    {
        data: {
            category: "select",
            options: [
                "Aguascalientes",
                "Baja California",
                "Baja California Sur",
                "Campeche",
                "Chiapas",
                "Chihuahua",
                "Ciudad de México",
                "Coahuila",
                "Colima",
                "Durango",
                "Estado de México",
                "Guanajuato",
                "Guerrero",
                "Hidalgo",
                "Jalisco",
                "Michoacán",
                "Morelos",
                "Nayarit",
                "Nuevo León",
                "Oaxaca",
                "Puebla",
                "Querétaro",
                "Quintana Roo",
                "San Luis Potosí",
                "Sinaloa",
                "Sonora",
                "Tabasco",
                "Tamaulipas",
                "Tlaxcala",
                "Veracruz",
                "Yucatán",
                "Zacatecas"
            ],
            name: "estado",
            label: "Estado",
            errorMjs: "Debe seleccionar un estado",
            classList: ["col-12", "col-sm-6"],
            placeholder: "Ingrese su estado"
        },
        callbacks: {
            formatedTextCallback: onlyLetters,
            validationCallback: notEmpty
        }
    },
    {
        data: {
            category: "select",
            label: "Género",
            name: "genero",
            errorMjs: "Debe seleccionar un género",
            classList: ["col-12", "col-sm-6"],
            options: [
                "Masculino",
                "Femenino",
                "Prefiero no responder"
            ],
            placeholder: "Seleccione su género"
        },
        callbacks: {
            formatedTextCallback: onlyLetters,
            validationCallback: notEmpty
        }
    },
    {
        data: {
            category: "select",
            classList: ["col-12"],
            label: "Estado civil",
            name: "est_civil",
            errorMjs: "Debe seleccionar un estado civil",
            options: [
                "Soltero(a)",
                "Casado(a)",
                "Divorciado(a)",
                "Viudo",
                "Otro"
            ],
            placeholder: "Seleccione su estado civil"
        },
        callbacks: {
            formatedTextCallback: onlyLetters,
            validationCallback: notEmpty
        }
    },
    {
        data: {
            category: "input",
            label: "Empresa",
            name: "empresa",
            errorMjs: "Debe ingresar una empresa.",
            classList: ["col-12", "col-sm-6"],
            type: "text",
            placeholder: "Ingrese su empresa"
        },
        callbacks: {
            formatedTextCallback: onlyLetters,
            validationCallback: min2
        }
    },
    {
        data: {
            category: "input",
            classList: ["col-12", "col-sm-6"],
            label: "Puesto",
            name: "puesto",
            type: "text",
            errorMjs: "Debe ingresar su puesto.",
            placeholder: "Ingrese su puesto"
        },
        callbacks: {
            formatedTextCallback: onlyLetters,
            validationCallback: notEmpty
        }
    },
    {
        data: {
            category: "input",
            label: "Área de trabajo",
            name: "area_trabajo",
            classList: ["col-12"],
            type: "text",
            errorMjs: "Debe ingresar su área de trabajo.",
            name: "area_trabajo",
            placeholder: "Ingrese su área de trabajo"
        },
        callbacks: {
            formatedTextCallback: onlyLetters,
            validationCallback: notEmpty
        }
    },
];
