<?php
$link=mysqli_connect('127.0.0.1','root','root','sz-2105');

$username=$_GET['username'];
$sql="SELECT * FROM `users` WHERE `name`='$username'";
$res=mysqli_query($link,$sql);
$row=mysqli_fetch_assoc($res);
if($row){
   echo '1';
}
// 验证用户名