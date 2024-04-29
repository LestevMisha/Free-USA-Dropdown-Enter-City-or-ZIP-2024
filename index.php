<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USA Dropdown</title>
    <style>
        .relative {
            position: relative;
        }

        li {
            cursor: pointer;
        }
    </style>
</head>

<body>

    <div class="relative">
        <input class="address_autocomplete" maxlength="256" type="text">
        <ul class="address_autocomplete_list">
        </ul>
    </div>

    <!-- Main script -->
    <script defer src="./main.js"></script>

</body>

</html>