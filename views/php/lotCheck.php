<?php
include_once "db.php";

if (isset($_POST['lot'])) {
  $camera = mysqli_real_escape_string($db, $_POST['camera']);
  $lot = mysqli_real_escape_string($db, $_POST['lot']);

  $sql = "SELECT * FROM lotstatus WHERE (camera='$camera' AND lot='$lot') ORDER BY dateTime DESC LIMIT 1";
  $result = mysqli_query($db, $sql);

  $data = mysqli_fetch_assoc($result);
  echo json_encode($data);

  mysqli_close($db);
}

?>