class RegisterForm {
    #element = null;
    #registerButtonText = "Registrar y continuar con la evaluación";

    #groupKey = "";

    constructor(afterSubmitLocation, groupKey, data) {
        this.#groupKey = groupKey;
        this.#element = document.createElement("form");
        this.#element.classList.add("candidate-form", "d-flex", "flex-column", "gap-3", "gap-sm-4");

        this.formData = {};
        this.formGroups = [];

        this.validationCallback = data.validationCallback;

        this.#element.method = "post";
        this.#element.action = afterSubmitLocation;

        this.generalError = document.createElement("p");
        this.generalError.classList.add("d-none", "text-danger");

        this.formContainer = document.createElement("div");
        this.formContainer.classList.add("inputsContainer", "row", "row-gap-3", "w-100", "mx-auto");

        let formGroup;

        data.forEach(field => {
            const type = field.data.type;
            const name = field.data.name;
            const label = field.data.label;
            const errorMjs = field.data.errorMjs;
            const classList = field.data.classList;
            const placeholder = field.data.placeholder;
            const isRequired = field.data.isRequired || true;
            const validationCallback = field.callbacks.validationCallback;
            const formatedTextCallback = field.callbacks.formatedTextCallback;

            // select only.
            const options = field.data.options;

            switch (field.data.category) {
                case "input":
                    formGroup = new Input({
                        groupKey: this.#groupKey,
                        label: label,
                        type: type,
                        errorMjs: errorMjs,
                        placeholder: placeholder,
                        name: name,
                        classList: classList,
                        formatedTextCallback: formatedTextCallback,
                        validationCallback: validationCallback,
                        isRequired: isRequired,
                    });
                    break;

                case "select":
                    formGroup = new Select({
                        groupKey: this.#groupKey,
                        label: label,
                        errorMjs: errorMjs,
                        placeholder: placeholder,
                        name: name,
                        classList: classList,
                        options: options,
                        formatedTextCallback: formatedTextCallback,
                        validationCallback: validationCallback,
                        isRequired: isRequired,
                    });
                    break;
                default: break;
            }

            this.formContainer.appendChild(formGroup.container);
            this.#element.appendChild(this.formContainer);
            this.formGroups.push(formGroup);
        });

        this.submitBtn = document.createElement("button");
        this.submitBtn.type = "submit";
        this.submitBtn.name = "register";
        this.submitBtn.textContent = this.#registerButtonText;
        this.submitBtn.classList.add("accept-btn", "p-2", "text-white", "w-auto", "mx-auto", "rounded-3");

        // Botón de envío.
        this.#element.appendChild(this.submitBtn);
        console.log("sss");

        this.#element.addEventListener("submit", this.submit.bind(this));
    }

    get element() {
        return this.#element;
    }

    /**
     * Verifica si el formulario es válido al hacer un submit.
     * 
     * @param {SubmitEvent} e - Submit event. 
     */
    submit(e) {
        const errors = [];
        // e.preventDefault();
        console.log(this.formGroups);


        // Iterar sobre los campos para su validación individual.
        this.formGroups.forEach((formGroup, index) => {
            const isFieldValid = formGroup.validateBeforeSubmit();
            if (isFieldValid === false) {
                errors.push(index);
                this.formGroups[index].validate();
            }
            else {
                this.formData[formGroup.name] = this.formGroups[index].value;
            }
        });
        // Evitar el envío del formulario y enviar al usuario al primer campo inválido.
        // si no hay erorres todo esta bien.
        if (errors.length !== 0) {
            this.formGroups[errors[0]].element.scrollIntoView({ block: "center", behavior: "smooth" });
            e.preventDefault();
        }
    }
}