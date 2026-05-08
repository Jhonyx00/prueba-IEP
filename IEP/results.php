<?php
    include "connection.php";
    include "data.php";

    $id_usuario = 8; // Cambiar este valor por el ID
    $datos_candidato = null;

    // Consulta de datos del candidato.
    $sql_candidato = "SELECT * FROM candidato WHERE candidato_id = ?";
    $candidateStmt = $connection->prepare($sql_candidato);
    $candidateStmt->bind_param("i", $id_usuario);
    $candidateStmt->execute();
    $candidateResult = $candidateStmt->get_result();

    if ($candidateResult->num_rows > 0) {
        $datos_candidato = $candidateResult->fetch_assoc();
    }

    $query = "SELECT Cm, Am, Pm, Im, Cl, Al, Pl, Il, Ct, At, Pt, It FROM iep WHERE id = ?";

    $stmt = $connection->prepare($query);
    $stmt->bind_param("s", $id_usuario);
    $stmt->execute();
    $resultado = $stmt->get_result();

    $datos = null;
    if ($resultado->num_rows > 0) {
        $datos = $resultado->fetch_assoc();
    }

    $stmt->close();
    $candidateStmt->close();
    $connection->close();
?>

<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Resultados - Test IEP</title>
    <link rel="shortcut icon" href="img/logo-ct.png" />

    <meta name="author" content="Capital Hunters MX">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/responsive-text.css">
    <link rel="stylesheet" href="css/resultados.css">

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="js/components/DataCard.js"></script>
    <script src="js/components/DataLabel.js"></script>
    <script src="js/helpers/functions.js"></script>
    <script src="js/components/Table.js"></script>
    <script src="js/components/Card.js"></script>
    <script src="js/components/ContentRow.js"></script>
    <script src="js/components/CardContainer.js"></script>
    <script src="js/components/CategoryContainer.js"></script>
    <script src="js/components/CustomFooter.js"></script>
</head>

<body class="bg-black cover-container d-flex p-3 p-sm-4 flex-column gap-3 gap-sm-4 h-100" id="cover-container">
    <main class="p-2 p-sm-3 gap-2 gap-sm-3 bg-white rounded-4 main-container d-flex flex-column justify-content-center"
        id="main-container">

        <div class="d-flex flex-column align-items-center gap-2 gap-sm-3">
            <img src="img/logo-negro-hor.png" alt="Capital Hunters MX" class="img-fluid logo">
            <h5 class="title text-center m-0">Resultados - Inventario de estilos profesionales</h5>
        </div>

        <?php if ($datos): ?>
            <div class="profile-card text-center p-4 text-white rounded-4 d-flex flex-column gap-2 gradient-bg" id="profile-type-container">
                <p class="profile-title m-0 label-text fw-bold" id="profile-type">Tipo de perfil: </p>
                <p class="profile-subtitle m-0 label-text" id="profile-desc">Desc</p>
            </div>

            <div class="row container-fluid mx-auto justify-content-center mini-chart-container h-250 rounded-4 p-2 p-sm-3" id="mini-chart-container">
                <div class="col-md-4 col-12 col-sm-8 d-flex flex-column gap-2" id="ct">
                    <p class="legend-title text-center m-0 text-black">Condiciones Normales</p>
                    <div class="chart-container g" id="t">
                        <canvas id="t-chart"></canvas>
                    </div>
                </div>
                <div class="col-md-4 col-12 col-sm-8 d-flex flex-column gap-2" id="cm">
                    <p class="legend-title text-center m-0 text-black">Con Motivación</p>
                    <div class="chart-container g" id="m">
                        <canvas id="m-chart"></canvas>
                    </div>
                </div>
                <div class="col-md-4 col-12 col-sm-8 d-flex flex-column gap-2" id="cl">
                    <p class="legend-title text-center m-0 text-black">Bajo Presión</p>
                    <div class="chart-container g" id="l">
                        <canvas id="l-chart"></canvas>
                    </div>
                </div>
            </div>

            <div class="r p-2 p-sm-3 rounded-4 d-flex flex-column gap-2 gap-sm-3">
                <p class="legend-title m-0 text-black text-center fw-bold">Gráfica comparativa bajo
                    circunstancias:
                </p>
                <div class="overflow-auto d-flex center">
                    <div class="combined-chart-container" id="c">
                        <canvas id="combined-chart"></canvas>
                    </div>
                </div>
            </div>
                 <!-- Legend Container -->
                <div class="legend-container rounded-4  p-2 p-sm-3 d-flex flex-column gap-2 gap-sm-3">
                    <p class="legend-title m-0">Resultados detallados</p>
                    <div class="overflow-auto">
                        <div class="d-flex flex-column result-container bg-white rounded-4 p-2 p-sm-3" id="result-container">
                        <!-- table head -->
                        <!-- Agregados dinámicamente -->
                    </div>
                </div>
                </div>

                <div class="d-flex flex-column gap-3" id="panel-container"> 
                    <div id="panel-btns" role="tablist" aria-label="Opciones de circunstancias" class="panel-switcher buttons d-flex gap-2 justify-content-center d-flex flex-wrap">
                        <button data-groupId="T" class="btn-active panel-btn btn border rounded-pill">Normal</button>
                        <button data-groupId="M" class="panel-btn btn border rounded-pill">Motivación</button>
                        <button data-groupId="L" class="panel-btn btn border rounded-pill">Presión</button>
                    </div>

                    <div class="data-container-2 d-flex flex-column gap-2 gap-sm-3 rounded-4 p-2 p-sm-3" id="data-container-2">
                        <div class="card-container rounded-4 gap-2 gap-sm-3" id="card-container"></div>
                    </div>
                </div>

            <button type="button" class="p-2 text-white accept-btn rounded-3 mx-auto" id="print-btn">Imprimir
                Resultados</button>

        <?php else: ?>
            <div class="alert alert-warning" role="alert">
                No se encontraron datos para el usuario ID: <?php echo $id_usuario; ?>
            </div>
        <?php endif; ?>

    </main>

    <script>
        // elements
        const printBtn = document.getElementById("print-btn");
        const cardContainer = document.getElementById("card-container");
        const mainContainer = document.getElementById("main-container");
        const coverContainer = document.getElementById("cover-container");
        const profileDescElement = document.getElementById("profile-desc");
        const profileTypeElement = document.getElementById("profile-type");
        const resultContainer = document.getElementById("result-container");
        const miniChartContainer = document.getElementById("mini-chart-container");
        const profileTypeContainerElement = document.getElementById("profile-type-container");

        const tCont = document.getElementById("t");
        const mCont = document.getElementById("m");
        const lCont = document.getElementById("l");
        const cCont = document.getElementById("c");

        const ctCont = document.getElementById("ct");
        const cmCont = document.getElementById("cm");
        const clCont = document.getElementById("cl");

        // canvas
        const tChartElement = document.getElementById("t-chart");
        const lChartElement = document.getElementById("l-chart");
        const mChartElement = document.getElementById("m-chart");
        const cChartElement = document.getElementById("combined-chart");

        // ctx
        const tChartCtx = tChartElement.getContext("2d");
        const mChartCtx = mChartElement.getContext("2d");
        const lChartCtx = lChartElement.getContext("2d");
        const combinedChartCtx = cChartElement.getContext("2d");
        
        const data = <?php echo json_encode($datos); ?>;
        const conversions = <?php echo json_encode($conversions); ?>;
        const descriptions = <?php echo json_encode($descriptions); ?>;
        const candidateData = <?php echo json_encode($datos_candidato) ?>;
        const singleDescriptions = <?php echo json_encode($descripcionesSingle); ?>;

        const footer = new CustomFooter();
        document.body.appendChild(footer.element);

        const dbDataMap = {
            nombre: "Nombre",
            escolaridad: "Escolaridad",
            edad: "Edad",
            contacto: "Número de contacto",
            ciudad: "Ciudad",
            estado: "Estado",
            genero: "Sexo",
            est_civil: "Estado civil",
            empresa: "Empresa",
            puesto: "Puesto",
            area_trabajo: "Área de trabajo"
        }

        const dataCard = new DataCard("Datos del candidato", candidateData);
        dataCard.insertBefore(mainContainer, profileTypeContainerElement);

        const tValues = getValuesFromObject("t", data);
        const mValues = getValuesFromObject("m", data);
        const lValues = getValuesFromObject("l", data);
        
        const sortedElements = {
            "M": sortValues(mValues),
            "L": sortValues(lValues),
            "T": sortValues(tValues)
        }

        let maxT = sortedElements["T"][0][0].replace("t", "");

        const singleKeys = Object.keys(singleDescriptions[maxT]);
        const profileData = descriptions[maxT];
        const lastElementIndex = sortedElements["T"].length - 1;
        const letters = ["M", "L", "T"];
        const minMaxValues = {};
   
        // Generar el objeto de minimos y maximos de acuerdo a las letras (M, L, T).
        letters.forEach(letter => {
            const auxObj = {};
            const lowerCaseLetter = letter.toLowerCase();
            for (let i = 0; i < singleKeys.length; i++) {
                i === 0 ? auxObj[i] = sortedElements[letter][lastElementIndex][0].replace(lowerCaseLetter,"")
                        : auxObj[i] = sortedElements[letter][0][0].replace(lowerCaseLetter, "");
            }
            minMaxValues[letter] = auxObj;
        });

        const dataContainer = document.getElementById("data-container-2");
        const mContainer = document.createElement("div");
        const mContainerLabel = document.createElement("span");

        mContainer.setAttribute("data-groupId","M");
        mContainer.classList.add("d-flex","gap-sm-3","gap-2", "flex-column");
        mContainerLabel.classList.add("legend-title");
        mContainerLabel.textContent = "Motivación";

        const tContainer = document.createElement("div");
        const tContainerLabel = document.createElement("span");
        tContainerLabel.classList.add("legend-title");
        tContainer.setAttribute("data-groupId","T");
        tContainer.classList.add("d-flex","gap-sm-3","gap-2", "flex-column");
        tContainerLabel.textContent = "Condiciones normales";

        const lContainer = document.createElement("div");
        const lContainerLabel = document.createElement("span");
        lContainerLabel.classList.add("legend-title");
        lContainer.classList.add("d-flex","gap-sm-3","gap-2", "flex-column");
        lContainer.setAttribute("data-groupId","L");
        lContainerLabel.textContent = "Presión";

        dataContainer.appendChild(mContainer);
        mContainer.appendChild(mContainerLabel);

        dataContainer.appendChild(lContainer);
        lContainer.appendChild(lContainerLabel);

        dataContainer.appendChild(tContainer);
        tContainer.appendChild(tContainerLabel);

        const containers = {
            "M" : mContainer,
            "L" : lContainer,
            "T" : tContainer,
        };
        
        letters.forEach(letter => {
            const container = containers[letter];
            for (let i = 0; i < singleKeys.length; i++) {
                const key = minMaxValues[letter][i];
                // genera una dos cards por cada letra, una con etiqueta "alta" y otra con etiqueta "baja"
                // en total 6 cards.  
                new Card({
                    title: `${key} - ${descriptions[key].title} (${singleKeys[i]})`,
                    data: singleDescriptions[key][singleKeys[i]],
                    parent: container,
                    groupId: letter
                });
            } 
        });
        
        const descriptionKeys = Object.keys(descriptions);
        const factors = Object.entries(descriptions);
        const dataMap = {};

        factors.forEach(factor => {
            const obj = {};
            letters.forEach(letter => {
                const key = data[`${factor[0]}${letter.toLowerCase()}`]; // normal
                const percentage = conversions[factor[0]]["T"][key]; // percentage
                obj[letter] = percentage;
            });
            dataMap[factor[0]] = obj;
        });

        const getData = (id) => {
            const data = {};
            Object.entries(dataMap).forEach(([key, value]) => {
                data[key] = value[id];
            });
            return data;
        }

        const tChartData = getData("T");
        const lChartData = getData("L");
        const mChartData = getData("M");

        const tCanvasValues = Object.values(tChartData);
        const lCanvasValues = Object.values(lChartData);
        const mCanvasValues = Object.values(mChartData);

        profileDescElement.textContent = profileData.description;
        profileTypeElement.textContent = `Tipo de perfil: ${profileData.title} (${maxT})`;

        const interpretions = <?php echo json_encode($interpretions); ?>;
        const descData = [];

        getSegmentElements = (sortedT, obj) => {
            const auxArr = []; // Resetear el arreglo auxiliar para almacenar las nuevas claves.
            if (sortedT.length !== 0) {
                sortedT.forEach(element => { // Almacenar las nuevas claves diferentes a la letra de mayor puntaje.
                    const normalizedLetter = element[0].replace("t", ""); // Quita la "t" del nombre del campo de la bd. 
                    if (normalizedLetter !== maxT) auxArr.push(normalizedLetter); // Asignar en caso de ser diferente letra, ejemplo: A/I, evita casos como A/A 
                });
                obj[maxT] = auxArr.map(l => `${maxT}/${l}`); // Formatear para que sea: letra_mayor + "/" + letra_menor y asignar el valor en la clave del actual máximo.
                maxT = auxArr[0]; // Asignar la nueva letra con el mayor puntaje.
                getSegmentElements(auxArr, obj); // Usar recursividad en caso de que siga habiendo elementos que reagrupar.
                return obj;
            }
        }

        const interpretionsKeys = getSegmentElements(sortedElements["T"], {});
        Object.entries(interpretionsKeys).forEach(([key, value]) => {            
            value.forEach(element => {
                const interpretation = interpretions[element];
                const newElement = element.split("/");                

                let title = "";

                newElement.forEach((letter, index) => {
                    const text = descriptions[letter].title;
                    const preText = `${letter} - ${text}`;
                    title += index === 0 ? `${preText} / `: `${preText}`;
                });
            
                const card = new Card({
                    title: title,
                    data: interpretation,
                    parent: cardContainer,
                    groupId: "T"
                });
            });
        });

        let selected = "T";
        const dataCards = document.getElementsByClassName("data-card");
        const panelBtnsContainer = document.getElementById("panel-btns");

        for (const element of Object.values(containers)) {
            const dataGroupId = element.dataset.groupid;
            if (dataGroupId !== "T") {
                element.classList.add("hidden");
            }
        }
        
        const panelBtns = document.getElementsByClassName("panel-btn");

        panelBtnsContainer.addEventListener("click", (e) => {
            const dataGroupId = e.target.dataset.groupid;
            if (!dataGroupId) return;
            for (const pabelBtn of panelBtns) { pabelBtn.classList.remove("btn-active"); }
            e.target.classList.add("btn-active");
            hideCardsByKey(dataGroupId, dataCards, containers);
            hideCards(dataGroupId, dataCards);
        });
    
        const tableContent = factors.map(factor => {
            const more = data[`${factor[0]}m`]; // mas
            const less = data[`${factor[0]}l`]; // menos
            const total = data[`${factor[0]}t`]; // total
            const f = `${factor[0]} - ${factor[1].title}`; // factor
            const percentil = conversions[factor[0]]["T"][total]; // percentil
            const level = getLevel(percentil); // nivel
            
            return {
                0: f,
                1: more,
                2: less,
                3: total,
                4: percentil + "%",
                5: level
            }
        });

        const table = new Table({
            parent: resultContainer,
            head: ["Factor", "Más", "Menos", "Normal", "Percentil", "Nivel"],
            body: tableContent
        });

        const conbinedChartLabels = Object.values(descriptions).map((value) =>  {
            return value.title;
        });        

        const chartColors = ["#ffc107ff", "#007bffff", "#28a745ff", "#dc3545ff"];

        const tChart = new Chart(tChartCtx, {
            type: 'bar',
            data: {
                datasets: [{
                    categoryPercentage: 0.7,
                    data: tChartData,
                    backgroundColor: chartColors,
                    borderRadius: 10,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        callbacks: {
                            label: (context) => {
                                return `Totales: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 10,
                            color: '#666',
                            callback: l => l + '%' 
                        },
                        grid: {
                            color: 'rgba(0,0,0,0.2)'
                        },
                        title: {
                            display: true,
                            text: "Porcentaje",
                            font: { size: 14 }
                        },
                    },
                    x: {

                        ticks: {
                            color: '#666',
                            font: { size: 12 }
                        },
                        title: {
                            display: true,
                            text: "Factor",
                            font: { size: 14 }
                        },
                        grid: { display: false }
                    }
                }
            }
        });

        const lChart = new Chart(lChartCtx, {
            type: 'bar',
            data: {
                datasets: [{
                    categoryPercentage: 0.7,
                    data: lChartData,
                    backgroundColor: chartColors,
                    borderRadius: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        callbacks: {
                             label: (context) => {
                                return `Totales: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 10,
                            color: '#666',
                            callback: l => l + '%' 
                        },
                        grid: {
                            color: 'rgba(0,0,0,0.2)'
                        },
                        title: {
                            display: true,
                            text: "Porcentaje",
                            font: { size: 14 }
                        },
                    },
                    x: {
                        ticks: {
                            color: '#666',
                            font: { size: 12 }
                        },
                        title: {
                            display: true,
                            text: "Factor",
                            font: { size: 14 }
                        },
                        grid: { display: false }
                    }
                }
            }
        });

        const mChart = new Chart(mChartCtx, {
            type: 'bar',
            data: {
                datasets: [{
                    categoryPercentage: 0.7,
                    data: mChartData,
                    backgroundColor: chartColors,
                    borderRadius: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        callbacks: {
                            label: (context) => {
                                return `Totales: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 10,
                            color: '#666',
                            callback: l => l + '%'
                        },
                        grid: {
                            color: 'rgba(0,0,0,0.2)'
                        },
                        title: {
                            display: true,
                            text: "Porcentaje",
                            font: { size: 14 }
                        },
                    },
                    x: {
                        ticks: {
                            color: '#666',
                            font: { size: 12 }
                        },
                        title: {
                            display: true,
                            text: "Factor",
                            font: { size: 14 }
                        },
                        grid: { display: false }
                    }
                }
            }
        });
        
        const combinedChart = new Chart(combinedChartCtx, {
            type: 'line',
            data: {
                labels: conbinedChartLabels,
                datasets: [
                    {
                        label: 'Normales',
                        data: tCanvasValues,
                        borderColor: 'rgba(0, 178, 162, 1)',
                        backgroundColor: 'rgba(108, 208, 248, 0.38)',
                        tension: 0.3,
                        pointRadius: 5,
                        pointBackgroundColor: 'rgba(0, 178, 162, 1)',
                        borderWidth: 3,
                        fill: true
                    },
                    {
                        label: 'Con motivación',
                        data:mCanvasValues,
                        borderColor: 'rgba(254, 104, 0, 1)',
                        backgroundColor: 'rgba(226, 176, 40, 0.15)',
                        tension: 0.3,
                        pointRadius: 5,
                        pointBackgroundColor: 'rgba(254, 104, 0, 1)',
                        borderWidth: 3,
                        fill: true
                    },
                    {
                        label: 'Bajo presión',
                        data:lCanvasValues,
                        borderColor: 'rgba(183, 79, 254, 1)',
                        backgroundColor: 'rgba(155, 100, 160, 0.15)',
                        tension: 0.3,
                        pointRadius: 5,
                        pointBackgroundColor: 'rgba(183, 79, 254, 1)',
                        borderWidth: 3,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        backgroundColor: "black",
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        callbacks: {
                            label: (context) => {
                                return ` ${context.dataset.label}: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        offset: true, 
                        beginAtZero: true, max: 100, 
                        ticks: { stepSize: 10, 
                            callback: i => i + '%' 
                        }, 
                        title: {
                            display: true,
                            text: "Porcentaje",
                            font: { size: 14 }
                        },
                    },
                    x: { 
                        ticks: { 
                            maxRotation: 0,
                            minRotation: 0,
                        },
                        title: {
                            display: true,
                            text: "Factor",
                            font: { size: 14 }
                        }, 
                    }
                }
            }
        });

        // Chart image from the canvas.
        const cImage = new Image();
        const mImage = new Image();
        const lImage = new Image();
        const tImage = new Image();
        
        mImage.classList.add("chart-img", "w-100");
        lImage.classList.add("chart-img", "w-100");
        tImage.classList.add("chart-img", "w-100");
        cImage.classList.add("chart-img");

        // Events
        const handlePrint = (e) => {
            // remover el tooltip para evitar que aparezca en el pdf.
            tChart.options.plugins.tooltip.enabled = false;
            lChart.options.plugins.tooltip.enabled = false;
            mChart.options.plugins.tooltip.enabled = false;
            combinedChart.options.plugins.tooltip.enabled = false;

            printBtn.style.display = "none";
            mainContainer.classList.remove("p-sm-3", "p-2");
            coverContainer.classList.remove("p-3", "p-sm-4");

            mChartElement.remove();
            tChartElement.remove();
            lChartElement.remove();
            cChartElement.remove();

            const mIm = mChartElement.toDataURL("image/png", 1);
            const tIm = tChartElement.toDataURL("image/png", 1);
            const lIm = lChartElement.toDataURL("image/png", 1);
            const cIm = cChartElement.toDataURL("image/png", 1);

            miniChartContainer.classList.remove("h-250");
            miniChartContainer.classList.add("auto-height");

            tImage.onload = () => {
                mCont.appendChild(mImage);
                tCont.appendChild(tImage);
                lCont.appendChild(lImage);
                cCont.appendChild(cImage);
                print();
            }

            tImage.src = tIm;
            lImage.src = lIm;
            mImage.src = mIm;
            cImage.src = cIm;

            resetCardsVisibility(dataCards);
        }

        const handleAfterPrint = (e) => {
            printBtn.style.display = "flex";
            mainContainer.classList.add("p-sm-3", "p-2");
            coverContainer.classList.add("p-3", "p-sm-4");

            tImage.remove();
            lImage.remove();
            cImage.remove();
            mImage.remove();

            hideCardsByKey(selected, dataCards, containers);

            cCont.appendChild(cChartElement);
            mCont.appendChild(mChartElement);
            lCont.appendChild(lChartElement);
            tCont.appendChild(tChartElement);

            miniChartContainer.classList.remove("auto-height");
            miniChartContainer.classList.add("h-250");

            // habilitar el tooltip para que aparezca en la aplicacion. (al cancelar la impresion o después de imprimir).
            tChart.options.plugins.tooltip.enabled = true;
            lChart.options.plugins.tooltip.enabled = true;
            mChart.options.plugins.tooltip.enabled = true;
            combinedChart.options.plugins.tooltip.enabled = true;
        }
        printBtn.addEventListener("click", handlePrint);
        window.addEventListener("afterprint", handleAfterPrint);
    </script>
</body>
</html>