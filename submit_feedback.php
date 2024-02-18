<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rating = $_POST['rating'];
    $opinion = $_POST['opinion'];

    // Write feedback to CSV file
    $data = array($rating, $opinion);
    $file = fopen("feedback.csv", "a");
    fputcsv($file, $data);
    fclose($file);

    // Create a GitHub issue
    $username = 'panditadata';
    $repo = 'panditadata.github.io';
    $title = 'Feedback from website user';
    $body = "Rating: $rating\nOpinion: $opinion";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.github.com/repos/$username/$repo/issues");
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($ch, CURLOPT_USERAGENT, 'PHP');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array('title' => $title, 'body' => $body)));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    if ($response) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
}
error_reporting(E_ALL);
ini_set('display_errors', 1);

?>
