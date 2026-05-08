class ModalCard {
    #element = null;
    static id;

    constructor({ definitions = {}, id, description = "", words = false, responses = {}, title = "", showId = true, parent }) {
        this.#element = document.createElement("div");
        this.#element.classList.add("modal", "fade");
        this.#element.tabIndex = -1;
        this.#element.id = `modal-${id}`;
        this.#element.setAttribute("aria-labelledby", `modal-label-${id}`);

        const modalDialog = document.createElement("div");
        modalDialog.classList.add("modal-dialog", "modal-dialog-centered", "modal-lg");

        this.#element.appendChild(modalDialog);

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content", "text-dark");

        modalDialog.appendChild(modalContent);

        const modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header");

        const modalBody = document.createElement("div");
        modalBody.classList.add("modal-body", "d-flex", "gap-3", "flex-column");

        const modalFooter = document.createElement("div");
        modalFooter.classList.add("modal-footer");

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        const modalTitle = document.createElement("h5");
        modalTitle.classList.add("modal-title");
        modalTitle.id = `modal-label-${id}`;
        modalTitle.textContent = showId ? `${title} ${id}` : `${title}`;

        const button = document.createElement("button");
        button.classList.add("btn-close");
        button.type = "button";
        button.setAttribute("data-bs-dismiss", "modal");
        button.setAttribute("aria-label", "Close");

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(button);

        if (definitions) {
            Object.values(definitions).forEach(definition => {
                const definitionItem = document.createElement("div");
                definitionItem.classList.add("definition-item", "d-flex", "flex-column", "gap-2", "m-0", "p-2", "p-sm-3", "rounded");

                const term = document.createElement("span");
                term.classList.add("definition-term", "fw-bold", "m-0");
                term.textContent = definition.title;

                const description = document.createElement("p");
                description.classList.add("definition-desc", "m-0");
                description.textContent = definition.definition;

                definitionItem.appendChild(term);
                definitionItem.appendChild(description);

                modalBody.appendChild(definitionItem);
            });
        }

        if (description) {
            const modalDescription = document.createElement("p");
            modalDescription.classList.add("modal-description", "m-0", "text-center");
            modalDescription.innerHTML = description;
            modalBody.appendChild(modalDescription);
        }

        if (words) {
            const wordsSection = new WordsSection(words, responses);
            modalBody.appendChild(wordsSection.element);
        }

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Cerrar";
        closeBtn.type = "button";
        closeBtn.classList.add("accept-btn", "m-0", "p-2", "rounded-3", "text-white");
        closeBtn.setAttribute("data-bs-dismiss", "modal");
        modalFooter.appendChild(closeBtn);

        parent.appendChild(this.#element);
    }

    get element() { return this.#element; }
}