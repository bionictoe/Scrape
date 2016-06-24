var Xray = require('x-ray');
var x = Xray();    
url = 'https://en.wikipedia.org/wiki/It%27s_Always_Sunny_in_Philadelphia';
tag = '.mw-body p';
 
x(url, tag)(function(err, tag) 
{
  console.log(tag) // Google
  $( "div.wikiinfo" ).html();
})