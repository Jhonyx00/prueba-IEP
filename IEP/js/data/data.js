const responses = {
    1: "Más",
    [-1]: "Menos",
}

const iepQuestions = {
    1: ["PERSUASORIO", "AMABLE", "MODESTO", "ÚNICO"],
    2: ["HOSTIL", "DIVERTIDO", "CONFORMISTA", "MIEDOSO"],
    // 3: ["GRATO", "SUMISO", "PERSEVERANTE", "GUAPO"],
    // 4: ["PRECAVIDO", "DECIDIDO", "CONVENCEDOR", "BONDADOSO"],
    // 5: ["MANSO", "AUDAZ", "FIEL", "CAUTIVANTE"],
    // 6: ["PREPARADO", "ANHELOSO", "COHERENTE", "APASIONADO"],
    // 7: ["DETERMINADO", "AMPLITUD DE CRITERIO", "CONDESCENDIENTE", "ENÉRGICO"],
    // 8: ["SEGURO", "EMPÁTICO", "TRANSIGENTE", "POSITIVO"],
    // 9: ["IMPARCIAL", "METICULOSO", "ANSIOSO", "ALEGRE"],
    // 10: ["AUTOCONTROLADO", "DADIVOSO", "ANIMADO", "INSISTENTE"],
    // 11: ["CONTENDIENTE", "JUBILOSO", "ATENTO", "EQUILIBRADO"],
    // 12: ["EJEMPLAR", "AFABLE", "CONFORMISTA", "ESTOICO"],
    // 13: ["DISPUESTO", "DELICADO", "INDOMABLE", "TRAVIESO"],
    // 14: ["CORRECTO", "PROACTIVO", "POSITIVO", "COOPERATIVO"],
    // 15: ["VALEROSO", "MOTIVADOR", "SUBORDINADO", "INTROVERTIDO"],
    // 16: ["VERSÁTIL", "POLÉMICO", "APÁTICO", "DESPREOCUPADO"],
    // 17: ["SOCIABLE", "TOLERANTE", "CONFIADO", "MODERADO"],
    // 18: ["SATISFECHO", "FIABLE", "SERENO", "OPTIMISTA"],
    // 19: ["TEMERARIO", "ABIERTO", "CÁLIDO", "PRUDENTE"],
    // 20: ["BENÉVOLO", "ESTÉTICO", "ENÉRGICO", "EXTROVERTIDO"],
    // 21: ["LOCUAZ", "REGULADO", "ORTODOXO", "DETERMINADO"],
    // 22: ["REPRIMIDO", "PRECISO", "DIRECTO", "BUEN CAMARADA"],
    // 23: ["POLÍTICAMENTE CORRECTO", "ARRIESGADO", "DISTINGUIDO", "COMPLACIDO"],
    // 24: ["HIPERACTIVO", "FAMOSO", "VECINO CONSIDERADO", "FIEL"]
}

const example = {
    words: ["Palabra_1", "Palabra_2", "Palabra_3", "Palabra_4",],
    description: `En esta prueba verás varios bloques compuestos por cuatro palabras.<br>
                Tu tarea es seleccionar dos de ellas en cada bloque:<br>
                1. La palabra que más te representa o con la que más te identificas.<br>
                2. La palabra que menos te representa o con la que menos te identificas.<br>
                No puedes elegir la misma palabra como “más” y “menos” al mismo tiempo. Si lo haces, la selección se
                desmarcará automáticamente.
                No hay respuestas correctas o incorrectas ni un límite de tiempo. Este test busca conocer mejor tu forma
                de ser, así que elige de forma espontánea, sin pensarlo demasiado.<br> La primera opción que te venga a
                la mente suele ser la más indicada.`
}