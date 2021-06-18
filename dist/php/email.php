<?php
$link=mysqli_connect('127.0.0.1','root','root','sz-2105');

$email=$_GET['email'];
$sql2="SELECT * FROM `users` WHERE `mail`='$email'";
$res2=mysqli_query($link,$sql2);
$row2=mysqli_fetch_assoc($res2);
if($row2){
    echo '1';
}
// 验证邮箱