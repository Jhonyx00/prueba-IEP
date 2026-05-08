
// callbacks para resultados

/**
 * Devuelve un arreglo con dos colores para estableer un gradiente en la gráfica de resultados.
 * 
 * @param {number} value - El valor obtenido en porcentaje del factor.
 * @returns {string[]} Un arreglo que contiene dos colores según la puntuación. 
 */
const colorCallback = (value => {
    if (value >= 0 && value <= 45) {
        return ["#ce0f0f", "#ff8400 "];
    }
    else if (value >= 46 && value <= 65) {
        return ["#f2c130", " #9EE493"];
    }
    else {
        return ["#7dc971", "#00a567"];
    }
});

/**
 * Establece una etiqueta de texto de acuerdo a los valores.
 * 
 * @param {number} value - El valor numérico de aceurdo al factor. 
 * @returns {string} La etiqueta string que define la calificación en el factor especificado.
 */
const interpretationCallback = (value) => {
    if (value >= 0 && value <= 19) {
        return "Deficiente";
    }
    else if (value >= 20 && value <= 44) {
        return "Inferior al promedio";
    }
    else if (value >= 45 && value <= 55) {
        return "Promedio bajo";
    }
    else if (value >= 56 && value <= 69) {
        return "Promedio";
    }
    else if (value >= 70 && value <= 78) {
        return "Promedio alto";
    }
    else if (value >= 79 && value <= 97) {
        return "Superior al promedio";
    }
    else if (value >= 98 && value <= 100) {
        return "Muy superior";
    }
    else return "";
}

/**
 * Callbacks para formulario de registro.
 * Recibe el texto del input y lo transforma en solo números o solo letras.
 * 
 * @param {string} value - El valor del input.
 * @returns {string} El resultado formateado por la expresión regular.
 */

// expresión regular para texto.
const onlyLetters = (value) => value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
// expresión regular para números.
const onlyNumbers = (value) => value.replace(/[^0-9\s\-\(\)\+]/g, '');

// callbacks de condición.
const notEmpty = (value) => value !== "";
const min3 = (value) => value.length >= 3;
const min8 = (value) => (value && value.length >= 8);
const min2 = (value) => (value && value.length >= 2);
const validAge = (value) => (value >= 16 && value && value <= 100);