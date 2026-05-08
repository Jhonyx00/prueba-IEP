class DonutIcon {
    static id = 0;
    constructor({ name, url, gradient, base, hover, twice }) {
        DonutIcon.id++;
        const svgClass = `${name.replace(" ", "").toLowerCase()}`;
        // Circle constants.
        const cx = 18;
        const cy = 18;
        const strokeWidth = 18.5;
        const r = 100 / (Math.PI * 2); // 15.915494309189533576888376337251 aprox radio.

        // animation constants.
        const dur = 7; // seconds
        const repeatCount = "indefinite";

        this.element = document.createElement("div");
        this.element.classList.add("donut-icon-container", "m-auto", "bg-white", "overflow-hidden");

        // svg
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("viewBox", `0 0 36 36`);
        this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.svg.classList.add("donut-icon", `${svgClass}-icon`);

        this.element.appendChild(this.svg);
        // url
        this.a = document.createElementNS("http://www.w3.org/2000/svg", "a");
        this.a.setAttribute("href", url);
        this.a.setAttribute("target", "_blank");
        this.a.setAttribute("rel", "noopener noreferrer");

        // Defs
        this.defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

        // icon -----------------------------
        this.path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        this.path.setAttribute("d", base.d);
        this.path.setAttribute("fill", base.fill);
        this.path.setAttribute("class", "path");
        this.path.setAttribute("transform", base.transform);

        this.mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
        this.mask.id = `${svgClass}-mask`;
        this.whiteRect = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.whiteRect.setAttribute("stroke-width", `${strokeWidth}`);
        this.whiteRect.setAttribute("cx", `${cx}`);
        this.whiteRect.setAttribute("cy", `${cy}`);
        this.whiteRect.setAttribute("r", `${r + 1}`);
        this.whiteRect.setAttribute("stroke", "white");

        // Circle clip
        this.clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        this.clipPath.setAttribute("id", `circleClip${DonutIcon.id}`);

        this.blackRect = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.blackRect.setAttribute("stroke-width", `${strokeWidth}`);
        this.blackRect.setAttribute("cx", `${cx}`);
        this.blackRect.setAttribute("cy", `${cy}`);
        this.blackRect.setAttribute("r", `${1}`);

        this.mask.appendChild(this.whiteRect);
        this.mask.appendChild(this.blackRect);

        this.defs.appendChild(this.mask);

        // clickable area.
        this.clickArea = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.clickArea.setAttribute("stroke-width", `${strokeWidth}`);
        this.clickArea.setAttribute("cx", `${cx}`);
        this.clickArea.setAttribute("cy", `${cy}`);
        this.clickArea.setAttribute("r", `${r * 2}`);
        this.clickArea.setAttribute("fill", "white");
        this.clickArea.setAttribute("mask", `url(#${svgClass}-mask)`);

        // g
        this.parentG = document.createElementNS("http://www.w3.org/2000/svg", "g");

        // hover element
        this.childG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.childG.classList.add("icon-container");
        this.childG.appendChild(this.path);

        Object.values(hover.d).forEach(element => {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", element.d);
            path.setAttribute("fill", element.fill);
            path.setAttribute("transform", hover.transform);
            this.childG.appendChild(path);
        });

        this.a.appendChild(this.childG);
        this.a.appendChild(this.clickArea);

        // Circle clip
        this.donutClip = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.donutClip.setAttribute("cx", `${cx}`);
        this.donutClip.setAttribute("cy", `${cy}`);
        this.donutClip.setAttribute("r", `${r}`);

        this.animationTransform = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
        this.animationTransform.setAttribute("attributeName", "transform");
        this.animationTransform.setAttribute("type", "rotate");
        this.animationTransform.setAttribute("from", `${0} ${cx} ${cy}`);
        this.animationTransform.setAttribute("to", `${360} ${cx} ${cy}`);
        this.animationTransform.setAttribute("dur", `${dur}s`);
        this.animationTransform.setAttribute("repeatCount", `${repeatCount}`);

        // Circle base
        this.gradientDonut = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.gradientDonut.setAttribute("fill", `none`);
        this.gradientDonut.classList.add("back-donut");
        this.gradientDonut.setAttribute("stroke-width", `${strokeWidth}`);
        this.gradientDonut.setAttribute("stroke", "#000000ff");
        this.gradientDonut.setAttribute("clip-path", `url(#circleClip${DonutIcon.id})`);
        this.gradientDonut.setAttribute("r", `${r}`);
        this.gradientDonut.setAttribute("cx", `${cx}`);
        this.gradientDonut.setAttribute("cy", `${cy}`);

        // insercion
        this.parentG.appendChild(this.animationTransform);
        this.svg.appendChild(this.a);
        this.clipPath.appendChild(this.donutClip);
        this.defs.appendChild(this.clipPath);
        this.svg.appendChild(this.defs);
        this.svg.appendChild(this.gradientDonut);
        this.svg.appendChild(this.parentG);

        // insert twice.
        this.generatesString(name, 0);
        if (twice) { this.generatesString(name, 180); }

        // Gradient background-color.
        this.linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        this.linearGradient.id = `${svgClass}-gradient`;

        this.linearGradient.setAttribute("gradientTransform", "rotate(140, 0.5, 0.5)");
        this.linearGradient.setAttribute("x1", "135%");
        this.linearGradient.setAttribute("y1", "0%");
        this.linearGradient.setAttribute("x2", "-25%");
        this.linearGradient.setAttribute("y2", "0%");

        gradient.forEach(color => {
            const stopOffset = document.createElementNS("http://www.w3.org/2000/svg", "stop");
            stopOffset.setAttribute("offset", `${color.at}%`);
            stopOffset.setAttribute("stop-color", color.name);
            this.linearGradient.appendChild(stopOffset);
        });

        this.defs.appendChild(this.linearGradient);

        this.svg.addEventListener("mouseover", this.transform.bind(this));
        this.svg.addEventListener("mouseout", this.transform.bind(this));

        this.svg;
    }

    #hasTransform = false;
    transform() {
        if (this.#hasTransform === false) {
            this.childG.style.transform = "translate(50%, -50%)";
            this.path.classList.add("hidden");
        }
        else {
            this.childG.style.transform = "translate(0%, 0%)";
            this.path.classList.remove("hidden");
        }

        this.#hasTransform = !this.#hasTransform;
    }

    generatesString(name, start) {
        name.split("").forEach((char, index) => {
            // name
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", "50%");
            text.setAttribute("y", "20%");
            text.setAttribute("text-anchor", "middle");
            text.setAttribute("dominant-baseline", "middle");
            text.setAttribute("fill", "#fff");
            text.setAttribute("font-size", `4.5`);
            text.setAttribute("font-family", `sans-serif`);
            text.setAttribute("font-weight", `500`);
            text.setAttribute("transform", `rotate(${index * 20 + start} ${18} ${18})`);
            text.textContent = `${char}`;
            this.parentG.appendChild(text);
        });
    }

    insertTo(parent) {
        parent.appendChild(this.element);
    }
}