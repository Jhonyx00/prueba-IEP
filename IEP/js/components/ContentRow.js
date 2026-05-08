class ContentRow {
    constructor(fields, header = false) {
        const fieldsArr = Object.values(fields);
        this.contentRow = document.createElement("div");

        const classList = ["content-row", "conclusion-text", "p-1", "w-100", "d-flex", "align-items-center", "gap-2", "gap-md-3", "flex-row"];

        if (header) { classList.push("fw-bold"); }

        this.contentRow.classList.add(...classList);

        const elementWidth = 100 / fieldsArr.length;

        fieldsArr.forEach(field => {
            const fieldElement = document.createElement("span");
            fieldElement.classList.add("text-center");
            fieldElement.style.width = `${elementWidth}%`;
            fieldElement.textContent = field;
            this.contentRow.appendChild(fieldElement);
        });
    }
}