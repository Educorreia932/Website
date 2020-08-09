<?php
    error_reporting(E_ALL);

    $port = 3000    ; // Port the node app listens to
    $address = 'https://educorreia932.dev/'; // IP the node app is on

    // Create socket
    $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
    if ($socket === false) {
        echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
    }

    // Connect to node app
    $result = socket_connect($socket, $address, $port);
    if ($result === false) 
        echo "socket_connect() failed.\nReason: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";

    // Data we want to send
    $data = array('itemid' => '1234567', 'steamid' => '769591951959', 'otherinfo' => 'hi there');

    // Prepares to transmit it
    $encdata = json_encode($data);

    socket_write($socket, $encdata, strlen($encdata));

    socket_close($socket);

    echo 'Sent data\n';
?>