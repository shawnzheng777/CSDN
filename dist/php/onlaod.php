<?php
$username=$_GET['username'];
$password=$_GET['password'];
$link=mysqli_connect('127.0.0.1','root','root','sz-2105');
$sql="SELECT * FROM `users` WHERE `name`='$username' ";
$res=mysqli_query($link,$sql);
$row=mysqli_fetch_assoc($res);
$arr=[];
// die;

if(!$row){
    $arr=['sta'=>'0','msg'=>'用户名不存在']; 
}else if($row['password']!==$password){
        $arr=['sta'=>'0','msg'=>'密码错误'];      
    }else {
        $arr=['sta'=>'1','msg'=>'登陆成功'];
    }
echo json_encode($arr); 