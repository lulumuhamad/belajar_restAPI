<?php 
// $mahasiswa = [
// 	[
// 		"nama" => "Lulu Muhamad",
// 		"NIM"	=> "14121042",
// 		"email"	=> "lulumuhamadulumudin@gmail.com"
// 	],
// 	[
// 		"nama" => "Lulu Muhamad",
// 		"NIM"	=> "14121042",
// 		"email"	=> "lulumuhamadulumudin@gmail.com"
// 	]
// 	];
$dbh = new PDO('mysql:host=localhost; dbname=belajar_restapi','root','');
$db= $dbh->prepare('SELECT * from mahasiswa');
$db->execute();
$mahasiswa= $db->fetchAll(PDO::FETCH_ASSOC);
//ini untuk array assoc
//var_dump($mahasiswa);

//ini untuk rubah ke json	
$data=json_encode($mahasiswa);
echo $data;

 ?>