<?php
include_once "db.php";

if(isset($_POST['lot'])) {
  $camera = mysqli_real_escape_string($db, $_POST['camera']);
  $lot = mysqli_real_escape_string($db, $_POST['lot']);
  $isOccupied = mysqli_real_escape_string($db, $_POST['isOccupied']);


  // $response = array('log' => false, 'status' => false);
  // $response = json_encode($response);

  // $sql = "SELECT * FROM parkinglog WHERE plate = '$plate' ORDER BY dateTime DESC LIMIT 1";
  // $result = mysqli_query($db, $sql);
  // $latestVal = mysqli_fetch_array($result);


  $sql = "UPDATE lotstatus SET isOccupied = $isOccupied WHERE (camera = '$camera' AND lot = '$lot')";
  $result = mysqli_query($db, $sql);

  $response = array('status' => $result);
  echo json_encode($response);
  mysqli_close($db);
}
