class BaseForm {
    #value = "";
    #container = null;
    #errorMjsElement = null;
    #formatedTextCallback = null;
    #validationCallback = null;

    constructor({ name, label, errorMjs, classList, formatedTextCallback, validationCallback, isRequired }) {
        this.#formatedTextCallback = formatedTextCallback;
        this.#validationCallback = validationCallback;
        this.#init({ name, label, errorMjs, classList, isRequired });
    }

    #init({ name, label, errorMjs, classList, isRequired }) {
        this.#container = document.createElement("div");
        this.#container.classList.add("form-group", "d-flex", "flex-column", "gap-2", "text-start", ...classList ?? "");
        let requiredSign = null;

        if (isRequired) {
            requiredSign = document.createElement("span");
            requiredSign.textContent = ` *`;
            requiredSign.classList.add("text-danger");
        }

        const labelElement = document.createElement("label");
        labelElement.classList.add("form-label", "m-0", "rounded-3");
        labelElement.textContent = label;
        labelElement.appendChild(requiredSign);
        labelElement.setAttribute("for", name);

        this.#errorMjsElement = document.createElement("p");
        this.#errorMjsElement.classList.add("m-0", "text-danger", "d-none", "error-message");
        this.#errorMjsElement.textContent = errorMjs;

        this.#container.appendChild(labelElement);
        this.#container.appendChild(this.#errorMjsElement);
    }

    get value() {
        return this.#value;
    }

    get container() {
        return this.#container;
    }

    /**
     * Verifica si el formulario es valido basándose en el valor del campo específico.
     */
    validate() {
        this.#value = this.#formatedTextCallback(this.element.value); // "element" es el input correspondiente de la clase hija.
        this.#errorMjsElement.classList.remove("d-none");
        if (this.#validationCallback(this.#value)) {
            this.#errorMjsElement.classList.add("d-none");
        }
    }

    /**
     * Valida los campos del formulario antes de hacer el submit
     * @returns {boolean} Si el formulario es valido o no.
     */
    validateBeforeSubmit() {
        return this.#validationCallback(this.element.value) || false;
    }
}
