<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="Capital Hunters MX">
  <title>Registro del Candidato - Evaluación Psicométrica</title>
  <link rel="shortcut icon" href="img/logo-ct.png" />

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <!-- CSS -->
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/register.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/responsive-text.css">

  <!-- Javascript -->
  <script src="js/components/CustomFooter.js"></script>
  <script src="js/components/RegisterForm.js"></script>  
  <script src="js/components/BaseForm.js"></script>
  <script src="js/components/Input.js"></script>
  <script src="js/components/Select.js"></script>
  
  <script src="js/data/callbacks.js"></script>
  <script src="js/data/formData.js"></script>
</head>

<body class="cover-container bg-black d-flex w-100 p-3 p-sm-4 flex-column gap-3 gap-sm-4" id="cover-container">
  <main id="main">
    <div class="p-3 p-sm-4 rounded-4 bg-white gap-3 gap-sm-4 main-container d-flex flex-column justify-content-center"
      id="main-container">
      <div class="d-flex flex-column align-items-center gap-3 gap-sm-4">
        <img src="img/logo-negro-hor.png" alt="Capital Hunters MX" class="img-fluid logo">
        <h5 class="title text-center m-0">Registro del candidato</h5>
      </div>

      <p class="question text-center m-0">Complete el siguiente formulario para iniciar la evaluación psicométrica</p>
    </div>
</main>

<script>
    const mainContainer = document.getElementById("main-container");
    const registerForm = new RegisterForm("processRegister.php", "candidato", formData);
    mainContainer.appendChild(registerForm.element);

    const footer = new CustomFooter();
    document.body.appendChild(footer.element);
</script>
</body>

</html>