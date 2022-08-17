<? if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //check $_POST vars are set, exit if any missing
    if (!isset($_POST["your-name"]) || !isset($_POST["email"]))
    {
        $output = json_encode(array(
            'success' => false
        ));
        die($output);
    }

    //Sanitize input data using PHP filter_var().
    $username = filter_var(trim($_POST["your-name"]) , FILTER_SANITIZE_STRING);
    $useremail = filter_var(trim($_POST["email"]) , FILTER_SANITIZE_EMAIL);
    $phone = filter_var(trim($_POST["phone"]) , FILTER_SANITIZE_EMAIL);
    $city = filter_var(trim($_POST["city"]) , FILTER_SANITIZE_STRING);
    $text = filter_var(trim($_POST["message"]) , FILTER_SANITIZE_STRING);

    $to = "nanjing@club.robbo.world, marketing@robbo.world"; //Replace with recipient email address
    //proceed with PHP email.
    $headers = array(
        'From' => 'no-reply@robboclub.cn',
        'X-Mailer' => 'PHP/' . phpversion()
    );

    $message = "";

    if ($username) {
        $message .= "Name - " . $username . "\n";
    }

    if ($useremail) {
        $message .= "E-mail - " . $useremail . "\n";
    }

    if ($phone) {
        $message .= "Phone - " . $phone . "\n";
    }

    if ($city) {
        $message .= "City - " . $city . "\n";
    }

    if ($text) {
        $message .= "Message - " . $text . "\n";
    }

    $subject = "New message from ROBBO Club China";

    $sentMail = mail($to, $subject, $message, $headers);

    if (!$sentMail) {
        $output = json_encode(array(
            'message' => $message,
            'name' => $username,
            'useremail' => $useremail,
            'phone' => $phone,
            'city' => $city,
            'text' => $text,
            'success' => false
        ));
        die($output);
    } else {
        $output = json_encode(array(
            'message' => $message,
            'name' => $username,
            'useremail' => $useremail,
            'phone' => $phone,
            'city' => $city,
            'success' => true
        ));
        die($output);
    }
}