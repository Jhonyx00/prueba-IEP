const definitions = {
    1: {
        1: {
            title: "Persuasorio",
            definition: "Que tiene la capacidad de convencer o influir en otros mediante argumentos convincentes y habilidades de comunicación efectiva"
        },
        2: {
            title: "Amable",
            definition: "Que muestra cortesía, gentileza y disposición favorable hacia otros, tratándolos con bondad y consideración"
        },
        3: {
            title: "Modesto",
            definition: "Que no presume de sus cualidades o logros, mantiene humildad y sencillez en su comportamiento y actitudes"
        },
        4: {
            title: "Único",
            definition: "Que es singular, excepcional o diferente a todos los demás, sin igual en sus características o cualidades"
        },
    },
    2: {
        1: {
            title: "Hostil",
            definition: "Que muestra antagonismo, agresividad o actitud desfavorable hacia otros, creando un ambiente de confrontación"
        },
        2: {
            title: "Divertido",
            definition: "Que causa alegría, entretenimiento o diversión, capaz de hacer reír o pasar un buen rato a otros"
        },
        3: {
            title: "Conformista",
            definition: "Que acepta y se adapta fácilmente a las normas, reglas y expectativas sociales establecidas sin cuestionarlas"
        },
        4: {
            title: "Miedoso",
            definition: "Que experimenta temor frecuentemente, tiende a preocuparse por peligros reales o imaginarios y evita situaciones arriesgadas"
        },
    },
    3: {
        1: {
            title: "Grato",
            definition: "Que resulta agradable, placentero y satisfactorio en el trato o en las experiencias que proporciona"
        },
        2: {
            title: "Sumiso",
            definition: " Que se subordina fácilmente a la autoridad de otros, acata órdenes sin resistencia y evita confrontaciones"
        },
        3: {
            title: "Perseverante",
            definition: "Que mantiene constancia y determinación en sus esfuerzos, no se rinde ante las dificultades y continúa hasta lograr sus objetivos"
        },
        4: {
            title: "Guapo",
            definition: "Que posee atractivo físico, belleza o apariencia agradable que resulta visualmente placentera"
        },
    },
    4: {
        1: {
            title: "Precavido",
            definition: "Que actúa con cuidado y previsión, considera los riesgos antes de tomar decisiones y toma medidas preventivas"
        },
        2: {
            title: "Decidido",
            definition: "Que muestra firmeza y determinación en sus decisiones y acciones, sin vacilar ante la adversidad"
        },
        3: {
            title: "Convencedor",
            definition: "Que tiene la habilidad de persuadir y lograr que otros adopten su punto de vista o propuesta"
        },
        4: {
            title: "Bondadoso",
            definition: "Que actúa con generosidad y consideración hacia los demás, mostrando empatía y compasión"
        },
    },
    5: {
        1: {
            title: "Manso",
            definition: "Que es dócil, tranquilo y pacífico en su carácter, no muestra agresividad y es fácil de tratar"
        },
        2: {
            title: "Audaz",
            definition: "Que muestra valentía y determinación para enfrentar situaciones difíciles o arriesgadas"
        },
        3: {
            title: "Fiel",
            definition: "Que actúa con lealtad y compromiso hacia personas, causas o principios"
        },
        4: {
            title: "Cautivante",
            definition: "Que atrae y fascina a otros con su personalidad, encanto o habilidades, generando admiración y atención"
        },
    },
    6: {
        1: {
            title: "Preparado",
            definition: "Que está listo, capacitado y bien equipado para enfrentar situaciones o desafíos específicos"
        },
        2: {
            title: "Anheloso",
            definition: "Que siente un fuerte deseo o aspiración hacia algo, mostrando interés y entusiasmo"
        },
        3: {
            title: "Coherente",
            definition: "Que mantiene consistencia lógica en sus ideas, acciones y palabras, sin contradicciones evidentes"
        },
        4: {
            title: "Apasionado",
            definition: "Que muestra entusiasmo intenso, fervor y dedicación emocional hacia sus intereses o actividades"
        },
    },
    7: {
        1: {
            title: "Determinado",
            definition: "Que posee firmeza de propósito, resolución inquebrantable y no se deja desviar de sus objetivos"
        },
        2: {
            title: "Amplitud de Criterio",
            definition: "Que actúa con apertura mental, considerando diferentes perspectivas y opiniones antes de tomar decisiones"
        },
        3: {
            title: "Condescendiente",
            definition: "Que muestra una actitud de superioridad aparente al tratar con otros, aunque aparente ser amable o comprensivo"
        },
        4: {
            title: "Enérgico",
            definition: "Que muestra vitalidad, dinamismo y fuerza en sus acciones, con alta capacidad de actividad y movimiento"
        },
    },
    8: {
        1: {
            title: "Seguro",
            definition: "Que confía en sí mismo, sus habilidades y decisiones, muestra autoconfianza y firmeza en su comportamiento"
        },
        2: {
            title: "Empático",
            definition: "Que comprende y comparte los sentimientos de los demás, mostrando sensibilidad y apoyo"
        },
        3: {
            title: "Transigente",
            definition: "Que actúa con flexibilidad y disposición para llegar a acuerdos, sin imponer su punto de vista"
        },
        4: {
            title: "Positivo",
            definition: "Que muestra una actitud optimista y constructiva, enfocándose en soluciones y oportunidades"
        },
    },
    9: {
        1: {
            title: "Imparcial",
            definition: "Que juzga y actúa sin favoritismo, manteniendo neutralidad y objetividad en sus decisiones y opiniones"
        },
        2: {
            title: "Meticuloso",
            definition: "Que presta atención a los detalles y actúa con cuidado y precisión en sus tareas"
        },
        3: {
            title: "Ansioso",
            definition: "Que muestra inquietud o preocupación por situaciones futuras, a menudo anticipando problemas o dificultades"
        },
        4: {
            title: "Alegre",
            definition: "Que muestra una actitud optimista y constructiva, enfocándose en soluciones y oportunidades"
        },
    },
    10: {
        1: {
            title: "Autocontrolado",
            definition: "Que mantiene dominio sobre sus emociones, impulsos y reacciones, mostrando disciplina personal"
        },
        2: {
            title: "Dadivoso",
            definition: "Que muestra generosidad y disposición para ayudar a los demás, compartiendo recursos y tiempo"
        },
        3: {
            title: "Animado",
            definition: "Que muestra vivacidad, entusiasmo y energía positiva, capaz de motivar y alegrar a otros"
        },
        4: {
            title: "Insistente",
            definition: "Que persiste en sus ideas y propuestas, buscando la mejora continua y la superación de obstáculos"
        },
    },
    11: {
        1: {
            title: "Contendiente",
            definition: "Que muestra espíritu competitivo, está dispuesto a luchar o competir por sus objetivos y posiciones"
        },
        2: {
            title: "Jubiloso",
            definition: "Que muestra alegría y satisfacción, disfrutando de los momentos felices y compartiéndolos con los demás"
        },
        3: {
            title: "Atento",
            definition: "Que muestra interés y consideración por los demás, escuchando activamente y respondiendo con empatía"
        },
        4: {
            title: "Equilibrado",
            definition: "Que mantiene estabilidad emocional y mental, muestra moderación y armonía en sus aspectos de vida"
        },
    },
    12: {
        1: {
            title: "Ejemplar",
            definition: "Que sirve como modelo a seguir debido a su excelente comportamiento, moral y conducta intachable"
        },
        2: {
            title: "Afable",
            definition: "Que muestra amabilidad, cortesía y respeto hacia los demás"
        },
        3: {
            title: "Conformista",
            definition: "Que acepta y se adapta fácilmente a las normas establecidas sin cuestionarlas"
        },
        4: {
            title: "Estoico",
            definition: "Que muestra fortaleza y resiliencia ante la adversidad, manteniendo la calma y el autocontrol"
        },
    },
    13: {
        1: {
            title: "Dispuesto",
            definition: "Que muestra disposición favorable, está preparado y tiene la intención de actuar o participar"
        },
        2: {
            title: "Delicado",
            definition: "Que actúa con sutileza, refinamiento y cuidado especial, especialmente en situaciones sensibles"
        },
        3: {
            title: "Indomable",
            definition: "Que no puede ser controlado, domado o sometido fácilmente, mantiene su espíritu libre e independiente"
        },
        4: {
            title: "Travieso",
            definition: "Que tiene tendencia a hacer travesuras o bromas, muestra picardía inocente y espíritu juguetón"
        },
    },
    14: {
        1: {
            title: "Correcto",
            definition: "Que actúa de acuerdo con las normas morales, sociales o procedimentales apropiadas y aceptadas"
        },
        2: {
            title: "Proactivo",
            definition: "Que muestra iniciativa y anticipación en la identificación y solución de problemas"
        },
        3: {
            title: "Positivo",
            definition: "Que mantiene una actitud optimista y constructiva hacia las experiencias de la vida"
        },
        4: {
            title: "Cooperativo",
            definition: "Que trabaja bien con otros y contribuye al logro de objetivos comunes"
        },
    },
    15: {
        1: {
            title: "Valeroso",
            definition: "Que muestra valor, coraje y determinación para enfrentar peligros, dificultades o desafíos"
        },
        2: {
            title: "Motivador",
            definition: "Que inspira y alienta a otros a alcanzar sus metas y mejorar su desempeño"
        },
        3: {
            title: "Subordinado",
            definition: "Que acepta y mantiene una posición de dependencia o inferioridad jerárquica respecto a otros"
        },
        4: {
            title: "Introvertido",
            definition: "Que tiende a ser reservado y a enfocarse en sus pensamientos y sentimientos internos"
        },
    },
    16: {
        1: {
            title: "Versátil",
            definition: "Que es capaz de adaptarse a diferentes situaciones y roles con facilidad"
        },

        2: {
            title: "Polémico",
            definition: "Que tiende a generar controversia, debate o discusión debido a sus opiniones o acciones provocativas"
        },
        3: {
            title: "Apático",
            definition: "Que muestra indiferencia o falta de interés hacia las cosas"
        },
        4: {
            title: "Despreocupado",
            definition: "Que vive sin preocupaciones excesivas, mantiene una actitud relajada y libre de ansiedades"
        },

    },
    17: {
        1: {
            title: "Sociable",
            definition: "Que disfruta de la compañía de otros, busca activamente la interacción social y se siente cómodo en grupos"
        },
        2: {
            title: "Tolerante",
            definition: "Que muestra respeto y aceptación hacia las diferencias de opinión, creencias y comportamientos de otros"
        },
        3: {
            title: "Confiado",
            definition: "Que muestra fe en sí mismo y en otros, cree en las capacidades propias y ajenas sin desconfianza excesiva"
        },
        4: {
            title: "Moderado",
            definition: "Que actúa con mesura y prudencia, evitando extremos y buscando un equilibrio"
        },
    },
    18: {
        1: {
            title: "Satisfecho",
            definition: "Que siente contentamiento y complacencia con su situación actual, logros y estado de vida"
        },
        2: {
            title: "Fiable",
            definition: "Que es digno de confianza y cumple con sus promesas y compromisos"
        },
        3: {
            title: "Sereno",
            definition: "Que mantiene la calma y la tranquilidad en situaciones difíciles, sin dejarse llevar por la ansiedad"
        },
        4: {
            title: "Optimista",
            definition: "Que espera lo mejor y tiene una actitud positiva ante la vida"
        },
    },
    19: {

        1: {
            title: "Temerario",
            definition: "Que actúa sin considerar las consecuencias, asumiendo riesgos innecesarios"
        },
        2: {
            title: "Abierto",
            definition: "Que muestra disposición para escuchar y considerar nuevas ideas y perspectivas"
        },
        3: {
            title: "Cálido",
            definition: "Que transmite afecto, cordialidad y cercanía emocional, crea un ambiente acogedor y confortable"
        },
        4: {
            title: "Prudente",
            definition: "Que actúa con sabiduría práctica, considera cuidadosamente las consecuencias antes de tomar decisiones"
        },
    },
    20: {
        1: {
            title: "Benévolo",
            definition: "Que tiene buenas intenciones hacia otros, muestra bondad y deseo de promover el bienestar ajeno"
        },
        2: {
            title: "Estético",
            definition: "Que muestra belleza, tiene buen gusto artístico y valora los aspectos visuales y armoniosos de la vida"
        },
        3: {
            title: "Enérgico",
            definition: "Que muestra vitalidad, dinamismo y fuerza en sus acciones y comportamientos"
        },
        4: {
            title: "Extrovertido",
            definition: "Que se siente cómodo en situaciones sociales, disfruta interactuando con los demás y es expresivo"
        },
    },
    21: {
        1: {
            title: "Locuaz",
            definition: "Que habla mucho y con facilidad, tiene tendencia a ser comunicativo y expresivo verbalmente"
        },
        2: {
            title: "Regulado",
            definition: "Que mantiene orden, disciplina y control en su comportamiento, sigue reglas y procedimientos establecidos"
        },
        3: {
            title: "Ortodoxo",
            definition: "Que se adhiere estrictamente a creencias, doctrinas o prácticas tradicionales y establecidas"
        },
        4: {
            title: "Determinado",
            definition: "Que actúa con firmeza y decisión, persiste en sus objetivos y no se deja desanimar fácilmente"
        },
    },
    22: {
        1: {
            title: "Reprimido",
            definition: "Que contiene o suprime sus emociones, impulsos o expresiones naturales de manera excesiva"
        },
        2: {
            title: "Preciso",
            definition: "Que actúa con claridad y exactitud, evitando ambigüedades y errores"
        },

        3: {
            title: "Directo",
            definition: "Que se expresa y actúa de manera clara, franca y sin rodeos, va directamente al punto"
        },
        4: {
            title: "Buen Camarada",
            definition: "Que es un compañero leal, solidario y confiable, mantiene buenas relaciones de amistad y apoyo"
        },
    },
    23: {
        1: {
            title: "Políticamente Correcto",
            definition: "Que se adhiere a lenguaje y comportamientos que evitan ofender a grupos minoritarios o marginados"
        },
        2: {
            title: "Arriesgado",
            definition: "Que toma decisiones audaces y se expone a situaciones inciertas, asumiendo riesgos calculados"
        },
        3: {
            title: "Distinguido",
            definition: "Que posee elegancia, refinamiento y clase que lo hace destacar positivamente entre otros"
        },
        4: {
            title: "Complacido",
            definition: "Que siente satisfacción y agrado con una situación, resultado o estado de cosas particular"
        },
    },
    24: {
        1: {
            title: "Hiperactivo",
            definition: "Que muestra niveles excesivos de actividad, energía y movimiento, dificultad para mantenerse quieto"
        },
        2: {
            title: "Famoso",
            definition: "Que es ampliamente conocido y reconocido por el público debido a logros, talentos o notoriedad"
        },
        3: {
            title: "Vecino Considerado",
            definition: "Que muestra respeto, cortesía y consideración hacia las personas que viven en su proximidad"
        },
        4: {
            title: "Fiel",
            definition: "Que mantiene lealtad, compromiso y constancia en relaciones, promesas y principios"
        },
    }
}


