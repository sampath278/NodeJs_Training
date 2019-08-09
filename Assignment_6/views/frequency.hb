<div class="container col-sm-6">
    <h2>Frequency Calculator</h2>
    <div class="jumbotron col pull-center">
        <form action="/frequency" method="post">
            <br>
                <label>Enter a sentence</label></br>
                <textarea name="sentence" rows="5" cols="50"> </textarea>
            <div>
                <input class="btn btn-primary" type="submit" value="Calculate Frequency"/>
            </div>
        </form>
    </div>
    <div class="jumbotron col pull-center">
        <h3>Frequency of Characters</h3>
        <ul>
            {{#each freq}}
            <li>{{@key}} = {{this}}</li>
            {{/each}}
        </ul>
    </div>
</div>