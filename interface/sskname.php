<?php
    include('./conn.php');
    $in= $_GET['in'];
    $sql = "SELECT * FROM `product` WHERE  title like '%$in%'";

    $res = $mysqli->query($sql);
    
    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;
    
    $mysqli->close();
?>