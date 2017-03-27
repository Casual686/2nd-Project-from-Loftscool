<?php
mb_internal_encoding("UTF-8");



// if($_POST['submit']){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $street = $_POST['adresse'];
    $home = $_POST['home'];
    $block = $_POST['block'];
    $flat = $_POST['flat'];
    $floor = $_POST['floor'];
    $text =  '\n Имя заказчика: '.$name
                .'\n Телефон: '.$phone
                .'\n Улица: '.$street
                .'\n Дом: '.$home
                .'\n Корпус: '.$block
                .'\n Квартира: '.$flat
                .'\n Этаж: '.$floor;


    mail("sshell686@gmail.com", "Поступил новый заказ", $text);
    echo json_encode($_REQUEST);


// }



?>
