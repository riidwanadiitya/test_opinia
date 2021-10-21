<?php

echo "Soal No. 1<br>";

$angka = "1,3,5,7,9,11,13,15";

$array_angka = explode(",", $angka);

foreach ($array_angka as $key => $value) {
	echo $value;
	echo "<br>";
}