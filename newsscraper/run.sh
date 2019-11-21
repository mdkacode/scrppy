#!/bin/bash
while true;
do
node node/xml.js > nodeApp.log
sleep 5
scrapy crawl newsScrap -o items.json > scrapp.log
sleep 1800;
done
