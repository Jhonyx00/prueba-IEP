class DonutChart {
    // static id useful for each gradient id.
    static id = 0;
    constructor(value, colors, fixedSize = 0) {
        // we need to increase this value in order to assign a different id for each gradient id.
        DonutChart.id++;

        // svg
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("viewBox", `0 0 36 36`);
        this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        if (fixedSize !== 0) { this.svg.setAttribute("style", `width: ${fixedSize}px;`); }

        // Defs
        this.defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

        // Gradient background-color.
        this.linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        this.linearGradient.id = `gradient${DonutChart.id}`;

        this.linearGradient.setAttribute("gradientTransform", "rotate(45, 0.5, 0.5)");
        this.linearGradient.setAttribute("x1", "100%");
        this.linearGradient.setAttribute("y1", "0%");
        this.linearGradient.setAttribute("x2", "0%");
        this.linearGradient.setAttribute("y2", "0%");

        // create a stop for each color.
        colors.forEach(color => {
            const stopOffset = document.createElementNS("http://www.w3.org/2000/svg", "stop");
            stopOffset.setAttribute("offset", `${color.at}%`);
            stopOffset.setAttribute("stop-color", color.name);
            this.linearGradient.appendChild(stopOffset);
        });

        this.defs.appendChild(this.linearGradient);

        // Circle constants.
        const cx = 18;
        const cy = 18;
        const fontSize = 6;
        const strokeWidth = 10;
        const r = 100 / (Math.PI * 2); // 15.915494309189533576888376337251 aprox radio.

        const textYPos = 52.5;
        // const textYPos = 40;

        // Circle clip
        this.clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        this.clipPath.setAttribute("id", `circleClip${DonutChart.id}`);

        // Circle segment
        this.donutSegment = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.donutSegment.setAttribute("fill", `none`);
        this.donutSegment.setAttribute("stroke-width", `${strokeWidth}`);
        this.donutSegment.setAttribute("transform", `rotate(-90, ${cx}, ${cy})`); // The chart starts from top center.
        this.donutSegment.setAttribute("clip-path", `url(#circleClip${DonutChart.id})`);
        this.donutSegment.setAttribute("cx", `${cx}`);
        this.donutSegment.setAttribute("cy", `${cy}`);
        this.donutSegment.setAttribute("r", `${r}`);
        this.donutSegment.setAttribute("stroke", `url(#gradient${DonutChart.id})`);

        // Circle base
        this.donutBase = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.donutBase.setAttribute("fill", `none`);
        this.donutBase.setAttribute("stroke-width", `${strokeWidth}`);
        this.donutBase.setAttribute("stroke", "#dededeff");
        this.donutBase.setAttribute("clip-path", `url(#circleClip${DonutChart.id})`);
        this.donutBase.setAttribute("r", `${r}`);
        this.donutBase.setAttribute("cx", `${cx}`);
        this.donutBase.setAttribute("cy", `${cy}`);

        // Circle clip
        this.donutClip = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.donutClip.setAttribute("fill", `none`);
        this.donutClip.setAttribute("stroke-width", `${strokeWidth}`);
        this.donutClip.setAttribute("cx", `${cx}`);
        this.donutClip.setAttribute("cy", `${cy}`);
        this.donutClip.setAttribute("r", `${r}`);

        // Text
        this.text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        this.text.setAttribute("x", "50%");
        this.text.setAttribute("text-anchor", "middle");
        this.text.setAttribute("dominant-baseline", "middle");

        // this.text.setAttribute("y", "50%"); // Y-axis position.
        this.text.setAttribute("y", `${textYPos}%`); // Y-axis position.
        this.text.setAttribute("fill", "#000"); // Text color
        this.text.setAttribute("font-size", `${fontSize}`); // Text size
        this.text.textContent = `${value}%`;

        // insercion
        this.clipPath.appendChild(this.donutClip);
        this.defs.appendChild(this.clipPath);

        this.svg.appendChild(this.defs);
        this.svg.appendChild(this.donutBase);
        this.svg.appendChild(this.donutSegment);
        this.svg.appendChild(this.text);

        this.#setValue(value);
    }

    // Assign percentage value
    #setValue(value) {
        this.donutSegment.setAttribute("stroke-dasharray", `${value} 100`);
    }
}