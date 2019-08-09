<html>
    <head>
        <title>Login Here</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>

    <body class="container">
        <div class="page-header">
            <h1>Assignment 6</h1>
        </div>

        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/verifyJwt">Verify JWT</a></li>
                        <li><a href="/table">Table</a></li>
                        <li><a href="/frequency">Frequency Calculator</a></li>
                        <li><a href="/armstrong">Armstrong</a></li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        <li><a style="pointer-events: {{disable}};" href="/login">{{login}}</a></li>
                        <li><a href="/logout">{{logout}}</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <nav class="container">
            {{{body}}}
        </nav>
    </body>
</html>