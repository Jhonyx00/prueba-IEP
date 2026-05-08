class CustomFooter {
    #BASE_TEXT = "Derechos registrados por";
    #LINK_TEXT = "CORPORATIVO CAPITAL MX";

    #element = null;

    constructor() {
        this.#element = document.createElement("footer");
        this.#element.classList.add("footer-text", "text-white-50", "text-end")

        this.#element.textContent = `${this.#BASE_TEXT}`;
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = ` ${this.#LINK_TEXT} ${new Date().getFullYear()}`;

        this.#element.appendChild(a);
    }

    get element() {
        return this.#element;
    }
}