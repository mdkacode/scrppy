from urllib.request import urlopen
from xml.etree.ElementTree import parse
var_url = urlopen('https://www.thesun.co.uk/sitemap.xml?yyyy=2019&mm=10&dd=12')
xmldoc = parse(var_url)

print (xmldoc.iterfind('urlset/url'))
for item in xmldoc.findall('urlset/url'):
    title = item.findtext('loc')
    date = item.findtext('loc')
    link = item.findtext('loc')

    print(title)
    print(date)
    print(link)
    print()
