<?php
if (!isset($_POST['xml'])) {
    die('No xml given');
}

$xmlData = $_POST['xml'];
header('Content-Type: application/xml; charset=utf-8');
print $xmlData;
