<?php

require 'database.php';

// Extract, validate and sanitize the id.
if($_GET['id_catalog'] !== null){
    $id_catalog = ($_GET['id_catalog']);
}

if(!$id_catalog)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM 'catalogs' WHERE 'id_catalog' ='{$id_catalog}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}