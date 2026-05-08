class DataLabel {
    constructor(title, textData) {
        this.element = document.createElement("p");
        this.element.classList.add("m-0");

        const dataSpan = document.createElement("span");
        dataSpan.classList.add("data-span", "fw-bold");
        dataSpan.textContent = `${title}: `;

        const contentSpan = document.createElement("span");
        contentSpan.textContent = title === "Edad" ? `${textData} años` : `${textData}`;

        this.element.appendChild(dataSpan);
        this.element.appendChild(contentSpan);
    }

    insertTo(parent) {
        parent.appendChild(this.element);
    }
}