<?php
include_once "db.php";

if(isset($_POST['lot'])) {
  $camera = mysqli_real_escape_string($db, $_POST['camera']);
  $lot = mysqli_real_escape_string($db, $_POST['lot']);
  $plate = mysqli_real_escape_string($db, $_POST['plate']);
  $color = mysqli_real_escape_string($db, $_POST['color']);

  // $response = array('log' => false, 'status' => false);
  // $response = json_encode($response);

  // $sql = "SELECT * FROM parkinglog WHERE plate = '$plate' ORDER BY dateTime DESC LIMIT 1";
  // $result = mysqli_query($db, $sql);
  // $latestVal = mysqli_fetch_array($result);

  $sql = "INSERT INTO parkinglog (camera, lot, plate, color, dateTime) VALUES ('$camera', '$lot', '$plate', '$color', now())";
  $result1 = mysqli_query($db, $sql);

  // $sql = "INSERT INTO lotstatus (camera, lot, isOccupied, dateTime) VALUES ('$camera', '$lot', TRUE, now())";
  // $result2 = mysqli_query($db, $sql);

  $response = array('log' => $result1);
  echo json_encode($response);
  mysqli_close($db);
}
?>