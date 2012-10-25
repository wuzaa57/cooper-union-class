Storage Notes
===========================================================

```
//Storage
	//More information can be found here: https://devcenter.heroku.com/articles/mongolab
	heroku addons:add  mongolab

	//Get your mongodb username and password
	heroku config

	//Login to heroku.com and manage your mongodb
	https://dashboard.heroku.com/apps/everyplace/resources


//collections->add

//click on collections

//install sudo gem install rerun
rerun foreman start

//throw os x notifications
//http://osxdaily.com/2012/08/03/send-an-alert-to-notification-center-from-the-command-line-in-os-x/

sudo gem install terminal-notifier
terminial-notifier -message "hello world"

//command-line posting
curl -X POST -H "Content-Type:application/json" https://www.mongolab.com/api/1/databases/heroku_app7564546/collections/twitter?apiKey=5088aa82e4b0a116b09050a1 -d '{"asdf":true}'

//read
curl -X GET https://www.mongolab.com/api/1/databases/heroku_app7564546/collections/twitter?apiKey=5088aa82e4b0a116b09050a1

//create table?
curl -X POST -H "Content-Type:application/json" https://www.mongolab.com/api/1/databases/heroku_app7564546/collections/random?apiKey=5088aa82e4b0a116b09050a1 -d '{"randomItem":123}'

//get tables
curl -X GET -H "Content-Type:application/json" https://www.mongolab.com/api/1/databases/heroku_app7564546/collections/random?apiKey=5088aa82e4b0a116b09050a1

```