<?php
  session_start();
  $_SESSION = [];
  $_SESSION["canAnswer"] = false;
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <title>Inventario de Estilos Profesionales</title>
  <meta name="author" content="Capital Hunters MX">
  <link rel="shortcut icon" href="img/logo-ct.png" />

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

  <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/cover/">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">

  <link rel="stylesheet" href="css/final.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/responsive-text.css">

  <script src="js/data/svgIcons.js"></script>
  <script src="js/components/DonutIcon.js"></script>
  <script src="js/components/CustomFooter.js"></script>
</head>

<body class="bg-black cover-container d-flex p-3 p-sm-4 flex-column gap-3 gap-md-4 h-100">
  <main class="bg-white main m-auto text-center rounded-4 d-flex flex-column gap-3 gap-sm-4">
    <div class="p-3 p-sm-4 gap-3 gap-sm-4 bg-white rounded-4 main-container d-flex flex-column justify-content-center">
      <div class="d-flex flex-column align-items-center gap-3 gap-sm-4">
        <img src="img/capital-hunters-logo-negro-horizontal.png" alt="Capital Hunters MX" class="img-fluid logo" />
        <h5 class="titulo text-center rounded-4 m-0">Gracias por tu tiempo y por contestar con sinceridad.</h5>
      </div>
      <p class="pregunta text-center m-0">Síguenos en nuestras redes sociales</p>
      <div class="d-flex gap-md-3 btn-container rounded-4 flex-column flex-md-row" id="icon-container">
        <!-- dynamic -->
      </div>
    </div>
  </main>

  <script>
    const footer = new CustomFooter();
    document.body.appendChild(footer.element);

    const iconContainer = document.getElementById("icon-container");
    // crear e insertar cada icono del objeto al contenedor de iconos.
    svgIcons.forEach(icon => new DonutIcon(icon).insertTo(iconContainer));

  </script>
</body>

</html>