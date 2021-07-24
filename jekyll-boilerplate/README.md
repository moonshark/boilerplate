# Node, NPM, Bower, Jekyll Versions

If you are having trouble building the frontend then please check you are using the correct versions of the following:

* Node - 6.11.4 - `node -v`
* NPM - 3.10.10 - `npm -v`
* Bower - 1.8.8 - `bower -v`
* Jekyll - 3.4.4 - `jekyll -v`
* Ruby - ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x86_64-darwin19] ' `ruby -v`

Make sure that if you need to change any of the above versions to always delete the **node_modules** or **bower_components** folder and then run `npm install` or `bower install` again

# Issues running Grunt

Below you will find various issues that can occur when running `grunt`. To help you out I have listed the below bugs and possible fixes.

### Assemble issues with build

If when trying to build a website built in assemble and you get
>> Warning: Unexpected token ... Used --force, continuing.

Then you need to do the following.

* Delete the `node_modules` folder
* Change the `grunt-assemble` in the package.json file to this `"grunt-assemble": "^0.6.3"`,

## Modernizr Grunt Error 

>>Running "modernizr:dist" (modernizr) task
Warning: Unexpected token ... Used --force, continuing.

This is because the Node version is most likely `6.11.4` and this has issues with this version. You can either change the node to `8.9.4` or add a force on and off before each modernizr call in the default.hbs file.

Please let me (Chris) know if any projects are doing this and I will look at adding this into the build.

```
grunt.registerTask('forceOn', 'turns the --force option ON',
	function() {
		if (!grunt.option('force')) {
			grunt.config.set('forceStatus', true);
			grunt.option('force', true);
		}
});

grunt.registerTask('forceOff', 'turns the --force option Off',
	function() {
		if (grunt.config.get('forceStatus')) {
			grunt.option('force', false);
		}
});

grunt.registerTask('default', ['forceOn', 'modernizr', 'forceOff']);
```

You can do it so it does not use force like above, but this means changing the package.json file. Change the modernizr version and add in customizr

```
"grunt-modernizr": "1.0.2"
},
"devDependencies": {
    "customizr": "1.1.0"
  }
```

## Sass Compile Error

>> Loading "sass.js" tasks...ERROR
>> Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (59)
>> For more information on which environments are supported please see:
>> https://github.com/sass/node-sass/releases/tag/v3.13.1
Warning: Task "sass" not found. Use --force to continue.

Running this fixes it: `npm rebuild node-sass`

## Missing Helper

>> Warning: Missing helper: "is" Use --force to continue.

Change the version of assemble to `"grunt-assemble": "0.4.0"`,

---

## Shrinkwrap

This is used so anyone else using the project can use the correct package versions. 

**All projects should have this file setup. If you do not see this please let me know and I can add it in.**

* Delete `package-lock.json`
* `npm shrinkwrap --dev`. This will use all of the `devDependencies` in package.json. 
* `npm shrinkwrap` will get all of the `dependencies` in package.json
* Delete `node_modules` folder
* `npm install`

---

# First Setup Jekyll

This new build uses Jekyll, https://jekyllrb.com/docs/installation/

## Installation on a Windows Machine
https://jekyllrb.com/docs/windows/

Window's can cause issue's, so you may need to do the following:

Install Ruby - https://rubyinstaller.org/downloads/

Then try:

    ruby-v

If it brings error's about SSL, then copy

https://raw.githubusercontent.com/rubygems/rubygems/master/lib/rubygems/ssl_certs/index.rubygems.org/GlobalSignRootCA.pem

into C:\Ruby23-x64\lib\ruby\2.3.0\rubygems\ssl_certs

Then go to : http://bundler.io/

    gem install bundler

Followed by:

    bundle install

Now try

    jekyll-v

If all good, do the normal bower install, npm install and grunt, then done.

This looks a good link, which could help the above if this does not help:
https://davidburela.wordpress.com/2015/11/28/easily-install-jekyll-on-windows-with-3-command-prompt-entries-and-chocolatey/

---

## Installation on a MAC

Check to see if Jekyll is installed, should be version 3.4.3. 

    jekyll -v

If not, install it.

    jekyll install

Then may need to do

    bundle install

If getting an error when you try jekyll -v, such as

```
/Library/Ruby/Gems/2.3.0/gems/bundler-2.1.4/lib/bundler/runtime.rb:312:in `check_for_activated_spec!': You have already activated liquid 4.0.0, but your Gemfile requires liquid 3.0.6. Prepending `bundle exec` to your command may solve this. (Gem::LoadError)
	from /Library/Ruby/Gems/2.3.0/gems/bundler-2.1.4/lib/bundler/runtime.rb:31:in `block in setup'
	from /Library/Ruby/Gems/2.3.0/gems/bundler-2.1.4/lib/bundler/spec_set.rb:147:in `each'
	from /Library/Ruby/Gems/2.3.0/gems/bundler-2.1.4/lib/bundler/spec_set.rb:147:in `each'
	from /Library/Ruby/Gems/2.3.0/gems/bundler-2.1.4/lib/bundler/runtime.rb:26:in `map'
	from /Library/Ruby/Gems/2.3.0/gems/bundler-2.1.4/lib/bundler/runtime.rb:26:in `setup'
	from /Library/Ruby/Gems/2.3.0/gems/bundler-2.1.4/lib/bundler.rb:149:in `setup'
	from /Library/Ruby/Gems/2.3.0/gems/jekyll-3.8.4/lib/jekyll/plugin_manager.rb:50:in `require_from_bundler'
	from /Library/Ruby/Gems/2.3.0/gems/jekyll-3.8.4/exe/jekyll:11:in `<top (required)>'
	from /usr/local/bin/jekyll:22:in `load'
	from /usr/local/bin/jekyll:22:in `<main>'
```

Try running:  `bundle clean --force`

You can also run `bundle exec jekyll-v` and also `bundle exec grunt`

## Installation/Setup

To create a new site you will need to open a terminal and run the following commands::

The Gemfile has the jekyll version, edit this if you want to use a different Jekyll.

    npm install

##Compiling the files

Then once it is installed, just run the following if you are backend so it gets the final files. These concats the js and minifies it into all.min.js instead of using each individual one. 

No need to run bower install anymore as the grunt plugins does this, gets the required files and then deletes the folder after it is used.

    grunt beBuild

If you are working on the local build, then just run, this will watch files and not uglify or concat the js to speed up the build each time.

    grunt

---

## AMP Pages

For blog and news pages, we have a AMP template. Edit the current amp.html within the pages, if you need more that one AMP page styled then just create a new page and make sure the template used in the top of the page is 'AMP'. The CSS is inline on AMP pages, and no JS is allowed. For a full breakdown of what you can and cannot use, please see here: https://ampbyexample.com/

---

## Jekyll 

Find out what version of jekyll you have

    jekyll -v

If nothing is installed, then install it.
https://jekyllrb.com/docs/installation/

If running and get an error, first find out what version of Jekyll

    -jekyll -v

and then going into the Gemfile and comparing. If your Jekyll version is less then do the following:

    bundle install

This should fix the issue.

---

## Front End Notes

See seperate FrontEndNotes.md

---

## Versions

21/4/16 - Added the sprite retina mixins back in. Added modernizr into the site so not pulling a dead URL in the console. Changed svgNew to svg.

01/07/2017 - Changed over to using Jekyll from Assemble. 

9/10/2017 - Updated setup, split front end notes out

29/03/2017 - Updates to the grunt build using bowercopy.js instead of bower_concat so we have more control over which files to take from bower_components. Also added in the datepicker as standard that we use with a modal for mobile. Removed retina JS as this caused errors in the console as was not used on the main site.

09/06/2020 - Add in Node, Grunt common bugs and ways to fix this.