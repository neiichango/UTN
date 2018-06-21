<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>

<header>
	<h1 class="text">Web Storage y Multimedia</h1>
	<nav>
		<ul>
			<li><a href="indexSesion.php" class="text">Sesion y Variables de Sesion</a></li>
			<li><a href="indexCookies.html" class="text">Cookies</a></li>
			<li><a href="indexWebStorage.html" class="text">HTML5 Web Storage</a></li></ol>
			<li><a href="index.html" class="text">Multimedia</a></li>
		</ul>
	</nav>
</header>

<h2>Variables de Sesion</h2>


<?php
$_SESSION["favcolor"] = "green";
$_SESSION["favanimal"] = "cat";
// Echo session variables that were set on previous page
echo "Favorite color is " . $_SESSION["favcolor"];
?>

<p>el codigo usado</p>
<img src="images/sesion.JPG" alt="codigo de sesion">
<br>
<footer>
	<a href="Media/practica.docx" download>Descargar Practica</a>
	<a href="Media/presentacion.pptx" download>Descargar Presentacion</a>
</footer>
</body>
</html>