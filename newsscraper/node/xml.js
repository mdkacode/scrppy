

var Sitemapper = require('sitemapper');
 var fs = require('fs');
var sitemap = new Sitemapper();
 
 var todayDate = new Date();
 var getYear = todayDate.getFullYear();
 var getMonth = todayDate.getUTCMonth()+1;
 var getDate = todayDate.getUTCDate();

sitemap.fetch(`https://www.thesun.co.uk/sitemap.xml?yyyy=${getYear}&mm=${getMonth}&dd=${getDate}`).then(function(sites) {
     const urls = sites.sites;
  console.log(urls.length);
  fs.writeFile("test.json", `{"sites":${JSON.stringify(urls)}}`, function(err) {

    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
});