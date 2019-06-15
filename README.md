# CareForBeer
Control of beer temperature for don't lose the most precious liquid created by men.</br>
<h3>Constraints</h3>
<ul>
<li>You must use JavaScript technology for most of the solution - <b>DONE</b></li>
<li>The solution must be implemented with an acceptable level of automated tests; we
should be able to verify it from the command line. - <b>DONE (..\CodeChallenge\CareForBeer\backend> npm test)</b></li>
<li>There must be a front-end component (ie. a web or command-line user interface of
some sort) as well as a back-end component. - <b>DONE</b></li>
<li>The back-end must use HTTP REST to communicate with the clients. - <b>DONE</b></li>
<li>You must not use a code generator (no create-react-app, Angular-CLI, Rails etc.); we
want to assess your software design skills. - <b>=( Ok but I was inspired by what react-create-app create for us, sorry.</b></li>
<li>You are free to use libraries, but not frameworks, for the same reason above. - <b>DONE... maybe</b></li>
<li>The solution must run via the command-line and we should be able to boot it with a
single command. The less dependencies on the operating system, the better. Once
the minimum requirements are met, we must be able to boot it with a one-liner. - <b>DONE (..\CodeChallenge\CareForBeer\frontend> npm test)</b></li>
<li>A database server isn’t required, if needed, mock the data in any application layer. - <b>MOCK in server package</b></li>
</ul>
<h3>Instructions</h3>
<ol>
<li>Use your time to deliver a solution that showcases your coding skills and the level of
quality you expect (but no need to gold plate it). <b>=)</b></li>
<li>In a real-life scenario, you would ask questions to clarify any doubts but for this
challenge, document the questions you would ask and provide your own answers in
the readme file. - <b>Section Question Below</b></li>
<li>Once complete, send us a link to the package for download (if you are using a private
repository in BitBucket/GitHub please share it with talent@pragma.team) <b>https://github.com/DanielFernandesRodrigues/CareForBeer</b></li>
<li>What are the highlights of your logic/code writing style? - <b>I like to separate the project in layers that are usually de point of entry, the service that controll acess to the next layer and has some business logic, the repository that access the data origin and domain that has the models and more business logic basead in DDD.</b></li>
<li>What could have been done in a better way? What would you do in version 2.0? - <b>Where do I start? I don't know how yet but I want try to put each layer in different packages and use IoC. I realy should have used websockets.</b></li>
<li>What were the questions you would ask and your own answers/assumptions? - <b>Section Question Below</b></li>
<li>Any other notes you feel relevant for the evaluation of your solution. - <b>I really like beer, thank you so much. It was fun.</b></li>
</ol>
<h3>Questions</h3>
<ol>
<li>What mark color you want for temperatures outside of range? - <b>Red, and green if inside the range.</b></li>
<li>Would not it be interesting to have a yellow mark if it was at the temperature limit? - <b>Of course, please do this.</b></li>
<li>You will want tests on client side? If you want, we need more time. - <b>Yes, but planning this to be done in the next sprint.</b></li>
<li>The main developer didn't finish the implementation using websocket. Can you wait this a little bit more? - <b>Sure, offer some Stout to him and everything will work out.</b></li>
</ol>
