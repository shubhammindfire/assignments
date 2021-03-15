<!DOCTYPE HTML>
<html>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Form validation assignment</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>

<body>

  <div class="container p-4">
    <h2>Registration Form</h2>

    <!--
- Name (textfield)
- Date of Birth (datepicker)
- Gender (radio buttons)
- Email Address (email)
- Contact Number (number)
- Skills (checkbox)
- Profile Photo (file)
- About (textarea)
- Address (textarea)
- Educational Qualification (single selection dropdown)
- Interests Area (multi selection dropdown)
- Professional Links (textfield)
-->

    <form class="needs-validation" action="check.php" method="POST" novalidate>
      <!-- name -->
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" required />
        <?php if (isset($nerror)) { ?>
          <p><?php echo $nerror ?></p>
        <?php } ?>
        <div class="valid-feedback <?php if (isset($nameValid) && $nameValid === 'Valid') echo "d-block" ?>" id="name-valid">Valid.</div>
        <div class="invalid-feedback <?php if (isset($nameInvalid) && $nameInvalid !== '') echo "d-block" ?>" id="name-invalid">
          <?php if (isset($nameInvalid) && $nameInvalid !== '') echo $nameInvalid ?>
        </div>
      </div>
      <!-- Date of birth -->
      <div class="form-group">
        <label for="dob">Date of birth: </label>
        <input type="date" id="dob" name="dob" />
        <div class="valid-feedback" id="dob-valid">Valid.</div>
        <div class="invalid-feedback" id="dob-invalid">
          Please fill out this field.
        </div>
      </div>
      <!-- gender -->
      <div class="form-group">
        <label for="gender">Gender:</label><br />
        <div class="form-check-inline">
          <label class="form-check-label" for="male">
            <input type="radio" class="form-check-input" id="male" name="optradio" value="male" checked />Male
          </label>
        </div>
        <div class="form-check-inline">
          <label class="form-check-label" for="female">
            <input type="radio" class="form-check-input" id="female" name="optradio" value="female" />Female
          </label>
        </div>
        <div class="form-check-inline">
          <label class="form-check-label" for="others">
            <input type="radio" class="form-check-input" id="others" name="optradio" value="others" />Others
          </label>
        </div>
      </div>
      <!-- Email -->
      <div class="form-group">
        <label for="email">Email: </label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required />
        <div class="valid-feedback <?php if (isset($emailValid) && $emailValid !== '') echo "d-block" ?>" id="email-valid">Valid.</div>
        <div class="invalid-feedback <?php if (isset($emailInvalid) && $emailInvalid !== '') echo "d-block" ?>" id="email-invalid">
          <?php if (isset($emailInvalid) && $emailInvalid !== '') echo $emailInvalid ?>
        </div>
      </div>

      <!-- Contact number -->
      <div class="form-group">
        <label for="contact">Contact Number: </label>
        <input type="tel" class="form-control" id="contact" placeholder="Enter contact number" name="contact" required />
        <div class="valid-feedback" id="contact-valid">Valid.</div>
        <div class="invalid-feedback" id="contact-invalid">
          Please fill out this field.
        </div>
      </div>
      <!-- Skills -->
      <div class="form-group">
        <label for="skills">Skills: </label>
        <div class="checkbox">
          <label><input type="checkbox" value="react" />React</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" value="angular" />Angular</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" value="product design" />Product Design</label>
        </div>
      </div>

      <!-- Profile photo -->
      <div class="form-group">
        <label for="profile">Profile Photo: </label>
        <input type="file" class="form-control-file" id="profile" accept="image/*" />
      </div>
      <!-- About  -->
      <div class="form-group">
        <label for="about">About: </label>
        <textarea class="form-control" id="about" rows="3"></textarea>
      </div>
      <!-- Address -->
      <div class="form-group">
        <label for="address">Address: </label>
        <textarea class="form-control" id="address" rows="3"></textarea>
      </div>
      <!-- Educational Qualification -->
      <div class="form-group">
        <label for="education">Educational Qualification: </label>
        <select class="form-control" id="education">
          <option>Bachelors</option>
          <option>Masters</option>
          <option>PhD</option>
        </select>
      </div>
      <!-- Interests -->
      <div class="form-group">
        <label for="interests">Interests: </label>
        <select multiple class="form-control" id="interests">
          <option>Web Dev</option>
          <option>Mobile Dev</option>
          <option>Data Science</option>
          <option>Machine Learning</option>
          <option>Design</option>
        </select>
      </div>
      <!-- Professional links -->
      <div class="form-group">
        <label for="links">Professional links: </label>
        <input type="text" class="form-control" id="links" placeholder="Enter Professional Links" name="links" required />
      </div>

      <!-- I agree -->
      <div class="form-group form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="iagree" id="iagree" required />
          I agree on all the conditions
          <div class="valid-feedback" id="agree-valid">
            Valid.
          </div>
          <div class="invalid-feedback" id="agree-invalid">
            Check this checkbox to continue.
          </div>
        </label>
      </div>

      <!-- submit -->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  <!-- <?php
        // define variables and set to empty values
        // $name = $dob = $gender = $email = $contact = $skills = $profile = $about = $address = $education = $interests = $links = $agree = "";

        // if ($_SERVER["REQUEST_METHOD"] == "POST") {
        //   $name = test_input($_POST["name"]);
        //   // $dob = test_input($_POST["dob"]);
        //   // $gender = test_input($_POST["gender"]);
        //   // $email = test_input($_POST["email"]);
        //   // $contact = test_input($_POST["contact"]);
        //   // $skills = test_input($_POST["skills"]);
        //   // $profile = test_input($_POST["profile"]);
        //   // $about = test_input($_POST["about"]);
        //   // $address = test_input($_POST["address"]);
        //   // $education = test_input($_POST["education"]);
        // }


        // function test_input($data)
        // {
        //   $data = trim($data);
        //   $data = stripslashes($data);
        //   $data = htmlspecialchars($data);
        //   return $data;
        // }

        // echo "<h2>Your Input:</h2>";
        // echo $name;
        // echo "<br>";
        // echo $email;
        // echo "<br>";
        // echo $about;
        // echo "<br>";
        // echo $gender;
        // echo "<br>";


        // if ($name !== ''){
        //   //include('success.php');
        //   header("Location: success.php");
        //   //document.location.href='some/page';
        // }
        ?> -->

</html>