<?php
    include('./conn.php');
    $indexs = $_GET['indexs'];
    $sql = "SELECT * FROM `supers` WHERE indexs='$indexs'";
    $res = $mysqli->query($sql);
    
    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;
    
    $mysqli->close();
?>