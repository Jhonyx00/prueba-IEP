/**
 * Esta clase crea un componente que contiene n cantidad de palabras, cada una con dos checkbox con su label asociado
 */

class WordsSection {
    static id = 0;

    #element = null;
    /**
     * @param {*} questions - Objeto que contiene las palabras.
     * 
     */
    #VALUE_MAP = {
        1: "a",
        [-1]: "b",
    }
    constructor(questions, responses, className = "no-data") {
        this.#element = document.createElement("div");
        this.#element.classList.add("d-flex", "row-container", "gap-2", "flex-column", "mx-auto", "align-items-center");

        this.checkboxes = {};
        // this.checkboxesArrays = {};

        // Inicializar el objeto de checkboxes con las posibles respuestas, ej: {a:{}, b:{}}
        Object.keys(responses).forEach(key => this.checkboxes[key] = {});

        questions.forEach((question, index) => {
            const rowItem = new RowItem(question);
            this.#element.appendChild(rowItem.element);

            const inputContainer = document.createElement("div");
            inputContainer.classList.add("input-container", "d-flex", "justify-content-evenly", "gap-2", "flex-wrap");

            // ids del objeto de respuestas.
            const responsesIds = Object.keys(responses);
            rowItem.appendChild(inputContainer); ////////////////////////////////////////////////

            Object.entries(responses).forEach(([key, value], i) => {
                const inputLabelContainer = document.createElement("div");
                inputLabelContainer.classList.add("input-label-container", "d-flex", "jusfity-content-center", "align-items-center", "gap-2");

                const checkboxName = `${this.plainText(question)}`;
                const uniqueId = `${checkboxName}-${this.#VALUE_MAP[key]}-${WordsSection.id}`;

                const inputCheck = document.createElement("input");
                inputCheck.type = "checkbox";
                inputCheck.name = RowItem.id;
                inputCheck.value = key;
                inputCheck.id = uniqueId;

                inputCheck.classList.add("custom-checkbox", "rounded", className);
                inputCheck.setAttribute("data-group", key);
                inputCheck.setAttribute("data-id", index);

                // arreglo que indica los ids de los checkbox que deben deseleccionarse al seleccionarse alguno.
                const exclusionMp = responsesIds.filter(val => val !== responsesIds[i]);
                this.checkboxes[key][index] = { key: key, element: inputCheck, exclusionMp: exclusionMp };
                inputCheck.addEventListener("click", this.handleClick.bind(this));

                const label = document.createElement("label");
                label.textContent = value;
                label.setAttribute("for", uniqueId);

                inputLabelContainer.appendChild(inputCheck);
                inputLabelContainer.appendChild(label);

                inputContainer.appendChild(inputLabelContainer);
            });
        });

        // Almacenar los arreglos de checkboxes para su consulta (mantener solo uno seleccionado, en filas y columnas).
        Object.entries(this.checkboxes).forEach(([key, value]) => {
            const checkBoxElement = Object.values(value);
            this.checkboxes[key] = checkBoxElement;
        });
        WordsSection.id++;
    }

    /**
     * Remueve los acentos de la cadena de texto
     * 
     * @param {string} str - La cadena 
     * @returns La nueva cadena sin acentos
     */
    plainText(str) {
        return str.toLowerCase().replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u");
    }

    /**
     * Gestiona la logica del click de los input checkbox: 
     * solo puede haber uno seleccionado a la vez en la linea vertical.
     * solo puede haber uno seleccionado a la vez en la fila horizontal.
     * 
     * @param {*} dataId - Clave de acceso al objeto de checkboxes para dos respuestas: (0, 1), para 3: (0, 1, 2)
     * @param {*} selectedCheckbox - Objeto checkBox (id, HTMLElement) seleccionado
     */
    handleSelectedCheckbox(dataId, selectedCheckbox) {
        // verifica columnas.
        this.checkboxes[selectedCheckbox.key].forEach(checkbox => {
            if (checkbox !== selectedCheckbox) checkbox.element.checked = false;
        });
        // verificar filas.
        selectedCheckbox.exclusionMp.forEach(element => {
            this.checkboxes[element][dataId].element.checked = false;
        });
    }

    /**
     * Gestiona el evento click del checkbox.
     * Accede a ambos grupos de checkbox para dejar solo el seleccionado actual.
     *  
     * @param {*} e - MouseEvent 
     */

    handleClick(e) {
        const dataGroup = e.target.dataset.group;
        const dataId = e.target.dataset.id;
        const element = this.checkboxes[dataGroup][dataId];
        this.handleSelectedCheckbox(dataId, element);
    }

    /*
     * Obtiene el elemento html padre (contenedor con las palabras y sus grupos de checkbox)
    */
    get element() { return this.#element; }
}