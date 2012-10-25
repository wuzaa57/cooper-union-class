Fancy Installation Instructions for the Cooper Lab
===========================================================

```
//Create Keys
ssh-keygen -t rsa

//Login to Heroku
heroku login

//Clear your previous keys
heroku keys:clear
heroku keys:add //Choose the id_rsa key.


//Go to the directory you checked out your git files
cd ~/desktop/cooper-union-erin/

//Create a new heroku instance
heroku create

//Push your code to heroku
git push heroku master
```

Additional Useful Heroku Commands
===========================================================

```
//After creation, rename your app to something you care about
heroku apps:rename <new app name>

//Rather than create a new app each time, re-open one that you've named correctly.
heroku git:remote --app <app name>
```

Running your application locally on your personal machine
===========================================================

```
//assuming you have node installed, install the dependencies for this particular application
npm install

//launch the local node application, by default at http://localhost:5000
foreman start

```


Reference for Markdown
------------------------
* http://github.github.com/github-flavored-markdown/
* http://github.github.com/github-flavored-markdown/sample_content.html