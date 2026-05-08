class CategoryContainer {
    constructor(data) {
        this.categoryContainer = document.createElement("div"); // contenedor general de las tablas de cada categoria
        this.categoryContainer.classList.add("category-container", "d-flex", "flex-column");
        const contentRow = new ContentRow(data);
        this.categoryContainer.appendChild(contentRow.contentRow);
    }
}