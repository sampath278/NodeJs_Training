<div class="container col-sm-6">
    <h2>Multiplication Table</h2>
    <div class="jumbotron col-sm-6 pull-center">
        <form action="/table" method="post">
            <div>
                <label>Enter a number</label>
                <input type="text" name="number"/>
            </div>
            <div>
                <input class="btn btn-primary" type="submit" value="Print Table"/>
            </div>
        </form>
        <ul>
            {{#each table}}
                <li>{{this}}</li>
            {{/each}}
        </ul>
    </div>
</div>