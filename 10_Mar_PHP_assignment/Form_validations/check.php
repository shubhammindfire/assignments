
  <?php
    // define variables and set to empty values
    $name = $dob = $gender = $email = $contact = $skills = $profile = $about = $address = $education = $interests = $links = $agree = "";
    $nameValid = $dobValid = $genderValid = $emailValid = $contactValid = $skillsValid = $profileValid = $aboutValid = $addressValid = $educationValid = $interestsValid = $linksValid = $agreeValid = "";
    $nameInvalid = $dobInvalid = $genderInvalid = $emailInvalid = $contactInvalid = $skillsInvalid = $profileInvalid = $aboutInvalid = $addressInvalid = $educationInvalid = $interestsInvalid = $linksInvalid = $agreeInvalid = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = test_input($_POST["name"]);
        // $dob = test_input($_POST["dob"]);
        // $gender = test_input($_POST["gender"]);
        $email = test_input($_POST["email"]);
        // $contact = test_input($_POST["contact"]);
        // $skills = test_input($_POST["skills"]);
        // $profile = test_input($_POST["profile"]);
        // $about = test_input($_POST["about"]);
        // $address = test_input($_POST["address"]);
        // $education = test_input($_POST["education"]);
    }


    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // validate name
    if(empty($name) || $name === ''){
        $nameInvalid = "Please fill this field";
    }
    else{
        $nameValid = "Valid";
    }

    // $name = $dob = $gender = $email = $contact = $skills = $profile = $about = $address = $education = $interests = $links = $agree = "";

    // validate dob
    if(empty($dob) || $dob === ''){
        $dobInvalid = "Please fill this field";
    }

    // validate email
    if(empty($email) || $email === ''){
        $emailInvalid = "Please fill this field";
    }
    else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $emailInvalid = "Please enter a valid email";
    }
    else{
        $emailValid = "Valid";
    }

    // validate contact
    if(empty($contact) || $contact === ''){
        $contactInvalid = "Please fill this field";
    }

    echo '$name = ' . $name;
    echo '$nameInvalid = ' . $nameInvalid;
    echo '$nameValid = ' . $nameValid;
    echo '<br>$email = ' . $email;
    echo '$emailInvalid = ' . $emailInvalid;
    echo '$emailValid = ' . $emailValid;

    echo "<h2>Your Input:</h2>";
    echo $name;
    echo "<br>";
    echo $email;
    echo "<br>";
    echo $about;
    echo "<br>";
    echo $gender;
    echo "<br>";

    if (!empty($name)) {
        include('success.php');
    }

    include('index.php');
    ?>