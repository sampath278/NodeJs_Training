<div class="container row">
    <div class="container col-sm-6">
        <h2>Login</h2>
        <div class="jumbotron col-sm-6 pull-center">
            <form action="/login" method="post">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <input class="btn btn-primary" type="submit" value="Log In"/>
                </div>
            </form>
        </div>
    </div>

    <div class="container col-sm-6">
        <h2>Sign Up</h2>
        <div class="jumbotron col-sm-6 pull-center">
            <form action="/signup" method="post">
                <div>
                    <label>Email:</label>
                    <input type="text" name="email"/>
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <input class="btn btn-primary" type="submit" value="Sign up"/>
                </div>
            </form>
        </div>
    </div>
</div>
