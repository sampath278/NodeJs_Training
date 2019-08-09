<div class="container col-sm-6">
    <h2>Armstrong Number</h2>
    <div class="jumbotron col-sm-6 pull-center">
        <form action="/armstrong" method="post">
            <div>
                <label>Enter a number</label>
                <input type="text" name="number"/>
            </div>
            <div>
                <input class="btn btn-primary" type="submit" value="Check"/>
            </div>
        </form>
        <p>{{armstrong}}</p>
    </div>
</div>