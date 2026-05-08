const getLevel = (value) => {
    if (value >= 70) { return "Alto"; }
    else if (value >= 30) { return "Medio"; }
    else { return "Bajo"; }
}

const getValuesFromObject = (key, data) => {
    const values = {};
    Object.entries(data).forEach(d => {
        if (d[0].includes(key)) { values[d[0]] = d[1]; };
    });
    return values;
}

const sortValues = (values) => {
    return Object.entries(values).sort((a, b) => b[1] - a[1]);
}

const hideCards = (key, dataCards) => {
    for (const card of dataCards) {
        card.classList.remove("hidden");
        const dataGroupId = card.dataset.groupId;
        if (dataGroupId === key) {
            card.classList.remove("hidden");
        }
        else {
            card.classList.add("hidden");
        }
    }
}

const resetCardsVisibility = (dataCards) => {
    for (const card of dataCards) {
        card.classList.remove("hidden");
    }
    for (const container of Object.values(containers)) {
        container.classList.remove("hidden");
    }
}

const hideCardsByKey = (key, dataCards, containers) => {
    selected = key;
    for (const container of Object.values(containers)) {
        container.classList.remove("hidden");
        const dataGroupId = container.dataset.groupid;
        if (dataGroupId === key) {
            container.classList.remove("hidden");
        }
        else {
            container.classList.add("hidden");
        }
    }
}