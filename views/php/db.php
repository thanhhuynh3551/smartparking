<?php
  define('DB_SERVER', 'localhost');
  define('DB_USERNAME', 'thanhhn');
  define('DB_PASSWORD', 'thanh@1234');
  define('DB_DATABASE', 'smartparking');
  date_default_timezone_set("Asia/Ho_Chi_Minh");
  $db = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
  if(!$db){
    echo "Error: " . mysqli_connect_errno();
  }  
  mysqli_query($db, "SET time_zone = '+7:00'");
?>