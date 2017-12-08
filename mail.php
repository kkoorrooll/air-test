<?php

$recepient = "shulyak.sasha31@gmail.com";
$sitename = "Relict Company";

$name = trim($_POST["name"]);
$number = trim($_POST["number"]);

$message = "Имя: $name \nТелефон: $number";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");