class Card {
    constructor({ title, data, parent, groupId }) {
        this.element = document.createElement("div");
        this.element.classList.add("data-card", "p-2", "p-sm-3", "bg-white", "d-flex", "flex-column", "gap-2", "rounded-4", "text-center");

        this.element.setAttribute("data-group-id", groupId);

        const titleElemnt = document.createElement("span");
        titleElemnt.textContent = title;
        titleElemnt.classList.add("fw-bold");

        const dataElement = document.createElement("p");
        dataElement.classList.add("m-0");
        dataElement.textContent = data;

        this.element.appendChild(titleElemnt);
        this.element.appendChild(dataElement);

        parent.appendChild(this.element);
    }
}