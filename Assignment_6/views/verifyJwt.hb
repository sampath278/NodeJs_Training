<div class="container col-sm-6">
    <h2>Jwt Token Verification</h2>
    <div class="jumbotron col pull-center">
        <form action="/verifyjwt" method="post">
            <div>
                <label>Enter Jwt Token</label>
                <textarea name="jwtToken" rows="5" cols="50"> </textarea>
            </div>
            <div>
                <input class="btn btn-primary" type="submit" value="Verify"/>
            </div>
        </form>
        <p>{{jwtValid}}</p>
    </div>
</div>