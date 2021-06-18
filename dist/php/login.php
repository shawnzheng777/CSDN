<?php
$username=$_GET['username']?$_GET['username']:"";
$password=$_GET['password']?$_GET['password']:"";
$mail=$_GET['email']?$_GET['email']:"";
$nickname=$_GET['nickname']?$_GET['nickname']:"";
$link=mysqli_connect('127.0.0.1','root','root','sz-2105');
$sql="INSERT INTO `users`(`name`,`nickname`,`mail`,`password`)VALUE('$username','$nickname','$mail','$password') ";
$res=mysqli_query($link,$sql);
if($res){
    echo "1";
}