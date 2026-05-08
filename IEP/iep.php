<?php
session_start();

include "connection.php";

// redireccionar si no hay un registro
if (!isset($_SESSION["candidato"]) || !$_SESSION["candidato"]) {
  header("Location: index.php");
  exit;
}

$keys = [  
  "C" => ["M" => 0, "L" => 0, "T" => 0],// Conexión
  "A" => ["M" => 0, "L" => 0, "T" => 0],// Apego
  "P" => ["M" => 0, "L" => 0, "T" => 0],// Perseverancia
  "I" => ["M" => 0, "L" => 0, "T" => 0]// Impulso
];

function getCompetenceKey($value){
  return match ($value) {
     1,  6, 12, 15, 20, 22, 28, 29, 36, 39, 42, 45,
    52, 55, 58, 64, 65, 70, 75, 80, 81, 88, 91, 94 => "C", // C - Conexión

     3,  8, 10, 13, 17, 23, 26, 31, 34, 37, 44, 47,
    50, 53, 60, 61, 68, 71, 74, 78, 83, 86, 89, 96 => "A", // A - Apego

     2,  7,  9, 16, 19, 21, 27, 30, 33, 38, 43, 46,
    49, 56, 59, 63, 66, 69, 76, 77, 82, 85, 92, 95 => "P", // P - Perseverancia
    
     4,  5, 11, 14, 18, 24, 25, 32, 35, 40, 41, 48,
    51, 54, 57, 62, 67, 72, 73, 79, 84, 87, 90, 93 => "I", // I - Impulso 
  };
}

$contexts = ["-1" => "L", "1" => "M"];

if (isset($_POST['register'])) {
  foreach ($_POST as $key => $value) {
    if ($key !== "register") {
      $categoryKey = getCompetenceKey($key);
      $keys[$categoryKey][$contexts[$value]] += $value;
      $keys[$categoryKey]["T"] += $value;
    }
  }

    $sql_candidato = "INSERT INTO candidato (nombre, escolaridad, edad, contacto, ciudad, estado, genero, est_civil, empresa, puesto, area_trabajo) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt_candidato = $connection->prepare($sql_candidato);

    if (!$stmt_candidato) {
      throw new Exception('Error en prepare: ' . $connection->error);
    }
    

    // empresa, puesto, area_trabajo: cambiar por el dato real
    $stmt_candidato->bind_param(
      "ssissssssss",
      $_SESSION["candidato"]["nombre"],
      $_SESSION["candidato"]["escolaridad"],
      $_SESSION["candidato"]["edad"],
      $_SESSION["candidato"]["contacto"],
      $_SESSION["candidato"]["ciudad"],
      $_SESSION["candidato"]["estado"],
      $_SESSION["candidato"]["genero"],
      $_SESSION["candidato"]["est_civil"],
      $_SESSION["candidato"]["empresa"],
      $_SESSION["candidato"]["puesto"],
      $_SESSION["candidato"]["area_trabajo"],
    );

    $insertId = 0;

    if ($stmt_candidato->execute()) {
      $insertId = $connection->insert_id;
    } 
    
    else {
      throw new Exception('Error en execute: ' . $stmt_candidato->error);
    }
    
    // verificar si existe.
    if (!$insertId) return;

    $fields = "candidato_id, id, ";
    $values = "$insertId, $insertId, ";

    $sql = "INSERT INTO iep ($fields Cm, Am, Pm, Im, Cl, Al, Pl, Il, Ct, At, Pt, It)
                     VALUES ($values  ?,  ?,  ?,  ?,  ?,  ?,  ?,  ?,  ?,  ?,  ?,  ?)";

  $stmt = $connection->prepare($sql);
  
  $stmt->bind_param(
    "iiiiiiiiiiii",
    // M
    $keys["C"]["M"],
    $keys["A"]["M"],
    $keys["P"]["M"],
    $keys["I"]["M"],
    // L
    $keys["C"]["L"],
    $keys["A"]["L"],
    $keys["P"]["L"],
    $keys["I"]["L"],
    // T
    $keys["C"]["T"],
    $keys["A"]["T"],
    $keys["P"]["T"],
    $keys["I"]["T"],
  );

  if ($_SESSION["canAnswer"]) {
    if ($stmt->execute()) {
      header("Location: final.php");
      exit;
    } 
    else {
      echo "<div class='alert alert-danger'> Error al guardar en la base de datos. </div>";
    }
  }
  $stmt->close();
}
?>

<!doctype html>
<html lang="en" data-bs-theme="auto">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="Capital Hunters MX">
  <title>Inventario de Estilos Profesionales</title>
  <link rel="shortcut icon" href="img/logo-ct.png" />

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/responsive-text.css">
  <link rel="stylesheet" href="css/iep.css">
  <link rel="stylesheet" href="css/main.css">

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>

  <script src="js/data/data.js"></script>
  <script src="js/data/definitions.js"></script>

  <script src="js/components/RowItem.js"></script>
  <script src="js/components/WordsSection.js"></script>
  <script src="js/components/ModalCard.js"></script>
  <script src="js/components/CustomFooter.js"></script>
  <script src="js/components/FormItem.js"></script>
</head>

<body class="cover-container bg-black d-flex p-3 p-sm-4 mx-auto flex-column gap-3 gap-sm-4">
    <main class="p-3 p-sm-4 gap-3 gap-sm-4 rounded-4 bg-white main-container d-flex flex-column justify-content-center" id="main-container">
      <div class="d-flex flex-column align-items-center gap-3 gap-sm-4">
        <img src="img/logo-negro-hor.png" alt="Capital Hunters MX" class="img-fluid logo" />
        <h5 class="titulo text-black text-center m-0">Inventario de Estilos Profesionales</h5>
      </div>

      <p class="m-0 pregunta text-center">
        <bold>En cada grupo de 4 palabras, selecciona cúal de ellas te describe más y cuál de ellas te describe
          menos.<br>
          No puedes elegir la misma palabra para ambas opciones ni más de una palabra por columna.<br>
          Responde con sinceridad y sin pensarlo demasiado.<br>
          No hay respuestas correctas o incorrectas, solo las que sean adecuadas para ti.</bold>
      </p>

      <form id="cleaverForm" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">

        <div class="d-flex flex-column gap-4" id="question-container">
          <!-- question block -->
          <div class="text-danger" id="mensaje-error" style="display: none;"></div>
        </div>

      </form>
    </main>

  <!-- </div> -->

  <script>
    const footer = new CustomFooter();
    document.body.appendChild(footer.element);

    const mainContainer = document.getElementById("main-container");

    const submitInput = document.createElement("input");
    submitInput.name = "register";
    submitInput.type = "submit";
    submitInput.value = "Siguiente";
    submitInput.classList.add("accept-btn", "btn", "rounded-3", "p-2", "mx-auto", "text-white");
    submitInput.id = "submit-input";

    const errorMsg = document.getElementById("mensaje-error");

    const questionContainer = document.getElementById("question-container");

    const formItemsMap = {};
    // generar los contenedores con 4 palabras.
    Object.entries(iepQuestions).forEach(([key, value],index) => {  
      const formItem = new FormItem({
        id: key,
        content: value, 
        definitions: definitions[key], 
        helpBtn: {title: "Ver definiciones"},
        showId: true,
        title:  "Bloque",
      });

      formItemsMap[index] = formItem;
      questionContainer.insertBefore(formItem.element, errorMsg);
    });

    const keys = <?php echo json_encode($keys); ?>;
    
    const exampleModal = new ModalCard({
        id: 0,
        description: example.description,
        title:"Ejemplo:",
        words: example.words,
        showId: false,
        parent: mainContainer,
        responses: responses
    });
      
    mainContainer.appendChild(exampleModal.element);
    
    document.addEventListener("DOMContentLoaded", () => {
       const modal = new bootstrap.Modal(document.getElementById("modal-0"));
       modal.show();
    });

    // const lastQuestionContainer = document.querySelector(".form-item:nth-child(24)");
    const lastQuestionContainer = document.querySelector(".form-item:nth-child(2)");
    lastQuestionContainer.appendChild(submitInput);
    
    document.getElementById('cleaverForm').addEventListener('submit',  (e) => {
      let error = false;
      let errorMessage = "";
      const noSelectedArr = [];
      
      for (let i = 0; i < Object.entries(formItemsMap).length; i++) {
          const noSelected = {max: 0, min: 0};
          const blockCheckBoxes = formItemsMap[i].wordsSection.checkboxes;
          const checkboxesElementsMax = Object.values(blockCheckBoxes["1"]);
          const checkboxesElementsMinus = Object.values(blockCheckBoxes["-1"]);

          checkboxesElementsMinus.forEach(input => {
            if (input.element.checked) {noSelected["min"]++;}
          });
            
          checkboxesElementsMax.forEach(input => {
            if (input.element.checked) {noSelected["max"]++;}
          });

          if (noSelected.max === 0 && noSelected.min === 0) {noSelectedArr.push(i);}}

          const noSelectedLength = noSelectedArr.length;
          const noSelectedMap = noSelectedArr.map(value => value + 1); // que coincida el numero de bloque con id del elemento.
          const str = `Debes seleccionad un Más y un Menos en `;
          const firstItem = formItemsMap[noSelectedArr[0]];

          if (noSelectedLength > 0) {
            if (noSelectedLength === 1) { errorMessage = str + `el bloque: ${noSelectedMap}.`; }
            else{ errorMessage = str + `los bloques: ${noSelectedMap}.`; }

            firstItem.element.scrollIntoView({behavior: 'smooth', block: 'center'});

            errorMsg.style.display = "block";
            errorMsg.textContent = errorMessage;
            e.preventDefault();
          }
    });
  </script>
</body>
</html>