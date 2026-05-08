class DataCard {
    constructor(title, cardData) {
        this.element = document.createElement("div");
        this.element.classList.add(
            "p-3",
            "user-data",
            "rounded-4", "d-flex",
            "flex-column",
            "gap-3"
        );

        this.header = document.createElement("p");
        this.header.classList.add(
            "header",
            "text-center",
            "fw-bold",
            "m-0"
        );
        this.header.textContent = title;

        this.dataContainer = document.createElement("div");
        this.dataContainer.classList.add(
            "data-container",
            "d-grid",
            "gap-2"
        );

        this.element.appendChild(this.header);
        this.element.appendChild(this.dataContainer);

        Object.entries(cardData).forEach(([key, data]) => {
            const entry = dbDataMap[key];
            if (!entry) return;
            const dataLabel = new DataLabel(entry, data);
            dataLabel.insertTo(this.dataContainer);
        });
    }

    insertTo(parent) {
        parent.appendChild(this.element);
    }

    insertBefore(element1, element2) {
        element1.insertBefore(this.element, element2);
    }
}