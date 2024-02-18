<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $rating = htmlspecialchars($_POST['rating']);
    $opinion = htmlspecialchars($_POST['opinion']);

    // Write feedback to CSV file
    $data = array($rating, $opinion);
    $file = fopen("feedback.csv", "a");
    if ($file) {
        fputcsv($file, $data);
        fclose($file);
    } else {
        // Handle file writing error
        // Example: error_log("Failed to open feedback.csv for writing.");
    }

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
    $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($http_status == 201) {
        // Issue created successfully
        http_response_code(200);
    } else {
        // Issue creation failed
        http_response_code(500);
        // Log or handle the response and error
        // Example: error_log("GitHub API request failed: $response");
    }
}
error_reporting(E_ALL);
ini_set('display_errors', 1);

?>

