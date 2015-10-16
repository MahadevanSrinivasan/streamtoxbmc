/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
var regex = /'file': '(.+?)'/;
var url = document.URL;
var title = document.getElementsByTagName("title")[0].innerHTML;
var ein = /einthusan/;
var allmyv = /allmyvideos/;
var vidto = /vidto/;
var playedto = /played/;
var megafiles = /megafiles/;
var bestreams = /bestreams/;
var cbs = /cbs/;
var youtube = /youtube/;
var vidzi = /vidzi/;
var gorillavid = /gorillavid/;
var vodmine = /vodmine/;

if(allmyv.test(url))
    regex = /"file" : "(.+?)"/;
else if(vidto.test(url) || megafiles.test(url))
    regex = /file_link = '(.+?)'/;
else if(playedto.test(url) || bestreams.test(url) || gorillavid.test(url))
    regex = /file: "(.+?)"/;
else if(vidzi.test(url))
    regex = /file: "(.+?\.mp4)"/;
else if(cbs.test(url))
    regex = /video.settings.pid = '(.*?)';/;
else if(youtube.test(url))
    regex = /youtube/;
else if(vodmine.test(url))
    regex = /<source src="(.+?\.mp4)"/;

// Test the text of the body element against our regular expression.
if (regex.test(document.body.innerHTML)) {
  // The regular expression produced a match, so notify the background page.
  chrome.extension.sendRequest({msg:regex.exec(document.body.innerHTML), url:url, title:title}, function(response) {});
} else {
  // No match was found.
}

