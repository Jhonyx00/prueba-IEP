class Input extends BaseForm {
    #element = null;
    #name = "";

    constructor({
        groupKey,
        label,
        type = "text",
        errorMjs,
        placeholder,
        name,
        classList,
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

        this.#element = document.createElement("input");
        this.#element.classList.add("form-control");
        this.#element.type = type;
        this.#element.name = `${groupKey}[${name}]`;

        this.#element.id = name;
        this.#name = name;

        this.#element.placeholder = placeholder;
        super.container.appendChild(this.#element);

        this.#element.addEventListener("change", () => super.validate());
    }

    get name() {
        return this.#name;
    }

    get element() {
        return this.#element;
    }
}