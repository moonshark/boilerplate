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

## Installation on a MAC

Check to see if Jekyll is installed, should be version 3.4.3. 

    jekyll -v

If not, install it.

    jekyll install

Then may need to do

    bundle install


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

## AMP Pages

For blog and news pages, we have a AMP template. Edit the current amp.html within the pages, if you need more that one AMP page styled then just create a new page and make sure the template used in the top of the page is 'AMP'. The CSS is inline on AMP pages, and no JS is allowed. For a full breakdown of what you can and cannot use, please see here: https://ampbyexample.com/

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

## Front End Notes

See seperate FrontEndNotes.md

## Versions

21/4/16 - Added the sprite retina mixins back in. Added modernizr into the site so not pulling a dead URL in the console. Changed svgNew to svg.

01/07/2017 - Changed over to using Jekyll from Assemble. 

9/10/2017 - Updated setup, split front end notes out

29/03/2017 - Updates to the grunt build using bowercopy.js instead of bower_concat so we have more control over which files to take from bower_components. Also added in the datepicker as standard that we use with a modal for mobile. Removed retina JS as this caused errors in the console as was not used on the main site.