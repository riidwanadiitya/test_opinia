<?php

$tanggal = "2020-05-01";

echo "Tanggal Asli: ".$tanggal."<br>";
echo "<br>";

// soal 2a
echo "Soal No. 2a<br>";
echo substr($tanggal, 5,2)."-".substr($tanggal, 2,2)."-".substr($tanggal, 8,2);
echo "<br>";
echo "<br>";

// soal 2b
echo "Soal No. 2b<br>";
echo date("m-y-d", strtotime($tanggal));
echo "<br>";
echo "<br>";

// soal 2c
echo "Soal No. 2c<br>";
echo "Format Y-m-d: ".date("Y-m-d", strtotime($tanggal." +6 month"));
echo "<br>";
echo "Format m-y-d: ".date("m-y-d", strtotime($tanggal." +6 month"));
echo "<br>";
echo "<br>";

// soal 2d
echo "Soal No. 2d<br>";
$my_birthday = "1996-07-25";
echo "My Birthday: ".$my_birthday."<br>";
$interval = date_diff(date_create($my_birthday), date_create($tanggal));
echo "Umur: ".$interval->y." tahun ".$interval->m." bulan ".$interval->d." hari<br>";
echo "<br>";
echo "<br>";
echo "<br>";