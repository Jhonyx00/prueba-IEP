class RowItem {
    static id = 0;
    constructor(question) {
        RowItem.id++;

        this.element = document.createElement("div");
        this.element.classList.add("d-flex", "gap-2", "gap-sm-4", "align-items-center", "justify-content-center", "row-item");

        const rowTitle = document.createElement("p");
        rowTitle.classList.add("row-word", "m-0");
        const text = question.replace("_", " ");
        rowTitle.textContent = this.capitalize(text);

        this.element.appendChild(rowTitle);
    }

    appendChild(element) {
        this.element.appendChild(element);
    }

    /**
     * Transforma a mayúscula la primera letra del texto y el resto en minúsculas.
     * 
     * @param {string} str - La cadena det texto
     * @returns La nueva cadena de texto transformada
    */
    capitalize(str) {
        const firstLetter = str.charAt(0).toUpperCase();
        return `${firstLetter}${str.toLowerCase().slice(1)}`;
    }
}