<?php
$link=mysqli_connect('127.0.0.1','root','root','sz-2105');
$sql="SELECT * FROM `vip`";
$res=mysqli_query($link,$sql);
$arr=[];
while($row=mysqli_fetch_assoc($res)){
    array_push($arr,$row);
}
echo json_encode($arr);