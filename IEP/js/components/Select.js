class Select extends BaseForm {
    #element = null;
    #name = "";

    constructor({
        groupKey,
        label,
        errorMjs,
        placeholder,
        name,
        classList,
        options,
        formatedTextCallback,
        validationCallback,
        isRequired
    }) {
        super({
            name,
            label,
            errorMjs,
            classList,
            formatedTextCallback,
            validationCallback,
            isRequired
        });

        this.#element = document.createElement("select");
        this.#element.classList.add("form-control");
        this.#element.name = `${groupKey}[${name}]`;
        this.#element.id = name;
        this.#name = name;
        super.container.appendChild(this.#element);

        const allOptions = [placeholder, ...options];

        allOptions.forEach((option, index) => {
            const optionElement = document.createElement("option");
            optionElement.value = index === 0 ? "" : option;
            optionElement.textContent = option;
            this.#element.appendChild(optionElement);
        });

        this.#element.addEventListener("change", () => super.validate());
    }

    get element() {
        return this.#element;
    }

    get name() {
        return this.#name;
    }
}