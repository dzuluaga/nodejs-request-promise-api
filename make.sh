#!/bin/sh

apigeetool deploynodeapp -u $ae_username -p $ae_password -o $org -e $env -n music-nodejs-request-promise-api -d . -m app.js -b /music-nodejs-request-promise-api -R --verbose --debug -U
echo "You can now test this API by using this URL in your browser: http://$org-$env.apigee.net/music-nodejs-request-promise-api?action=lyrics&artist=radiohead&fmt=json in cURL or your browser"

