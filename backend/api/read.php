<?php
/**
 * Returns the list of catalogs.
 */
require 'database.php';

$catalogs = [];
$sql = "SELECT * FROM catalogs";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $catalogs[$i]['id_catalog']    = $row['id_catalog'];
    $catalogs[$i]['catalog_name'] = $row['catalog_name'];
    $catalogs[$i]['availability'] = $row['availability'];
    $catalogs[$i]['catalog_price'] = $row['catalog_price'];
    $i++;
  }

  echo json_encode($catalogs);
}
else
{
  http_response_code(404);
}