class Table {
    constructor({ parent, head, body }) {
        const contentRow = new ContentRow(head, true);
        parent.appendChild(contentRow.contentRow);

        body.forEach((fields) => {
            parent.appendChild(new CategoryContainer(fields).categoryContainer)
        });
    }
}