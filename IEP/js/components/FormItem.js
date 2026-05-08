class FormItem {
    constructor({ id, content, definitions = {}, helpBtn = {}, title, showId }) {
        this.element = null;
        this.id = id;

        this.wordsSection = null;

        this.title = document.createElement("h6");
        this.title.classList.add("m-0");
        this.title.textContent = showId ? `${title} ${id}` : `${title}`;

        this.header = document.createElement("div");
        this.header.classList.add("d-flex", "align-items-center", "gap-2")
        this.header.appendChild(this.title);

        if (helpBtn) {
            this.helpBtn = document.createElement("button");
            this.helpBtn.type = "button";
            this.helpBtn.textContent = "?";
            this.helpBtn.classList.add("help-btn", "m-0");
            this.helpBtn.title = helpBtn.title;
            this.helpBtn.setAttribute("data-bs-toggle", "modal");
            this.helpBtn.setAttribute("data-bs-target", `#modal-${this.id}`);
            this.header.appendChild(this.helpBtn);
        }

        this.element = document.createElement("div");
        this.element.classList.add("form-item", "row-title", "p-3", "d-flex", "flex-column", "rounded-4", "text-black", "gap-3");
        this.element.appendChild(this.header);
        this.element.setAttribute("data-block-id", id);

        const wordsSection = new WordsSection(content, responses, "data");
        this.element.appendChild(wordsSection.element);

        this.wordsSection = wordsSection;

        if (helpBtn) { this.buildDefinitionCard(definitions); }
    }

    buildDefinitionCard(definitions) {
        new ModalCard({
            definitions: definitions,
            id: this.id,
            title: "Definiciones - Bloque",
            showId: true,
            parent: this.element,
            responses: responses
        });
    }

    // get element() { return this.element; }
}