var xhr = new XMLHttpRequest();
var data = 'xml=' + encodeURIComponent('<?xml version="1.0" encoding="UTF-8"?><rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0" ><channel><title>Hardwell On Air Official Podcast</title><link>http://www.djhardwell.com</link><language>en-us</language><copyright>&#x2117; &amp; &#xA9; 2012 Hardwell Productions B.V.</copyright><description>&quot;Hardwell On Air&quot; will give everyone&apos;s weekend that extra boost, by bringing that trendsetting and original Hardwell sound! Next to Hardwell&apos;s latest floorfillers, the show gives a platform to new DJ talent with the item &quot; Demo of the Week&quot;. Be sure to tune in!</description><lastBuildDate>Fri, 31 Aug 2012 10:00:00 GMT</lastBuildDate><pubDate>Fri, 31 Aug 2012 10:00:00 GMT</pubDate><docs>http://blogs.law.harvard.edu/tech/rss</docs><webMaster>mattijs@sortedmanagement.com </webMaster><itunes:subtitle></itunes:subtitle><itunes:author>Hardwell</itunes:author><itunes:summary>&quot;Hardwell On Air&quot; will give everyone&apos;s weekend that extra boost, by bringing that trendsetting and original Hardwell sound! Next to Hardwell&apos;s latest floorfillers, the show gives a platform to new DJ talent with the item &quot; Demo of the Week&quot;. Be sure to tune in!</itunes:summary><itunes:image href="http://podcast.djhardwell.com/hoa2013.jpg" /><itunes:owner><itunes:name>Hardwell</itunes:name><itunes:email>mattijs@sortedmanagement.com</itunes:email></itunes:owner><itunes:category text="Music"/><itunes:explicit>no</itunes:explicit><item><title>Hardwell On Air 134</title><itunes:author>Hardwell</itunes:author><itunes:subtitle>Subscribe now to receive new episodes automatically!</itunes:subtitle><itunes:summary>&quot;Hardwell On Air&quot; will give everyone&apos;s weekend that extra boost, by bringing that trendsetting and original Hardwell sound! Next to Hardwell &apos;s latest floorfillers, the show gives a platform to new DJ talent with the item &quot; Demo of the Week&quot;. Be sure to tune in!</itunes:summary><enclosure url="http://podcast.djhardwell.com/HardwellOnAir134.m4a" length="68709522" type="audio/mpeg" /><guid>http://podcast.djhardwell.com/HardwellOnAir134.m4a</guid><pubDate>Fri, 20 Sep 2013 21:59:59 GMT </pubDate><itunes:duration>00:57:19</itunes:duration><itunes:explicit>no</itunes:explicit><itunes:keywords>hardwell, on, air, i, am, hmh, kick, off, live, world, tour house, progressive, eclectic, beats, dj, dance, electro, chart, hit, mashup, recordings</itunes:keywords><itunes:image href="http://podcast.djhardwell.com/hoa134.jpg" /></item></channel></rss>');

xhr.open('POST', 'xml.php', true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("charset", "UTF-8");

xhr.onload = function(e) {
    var xml = this.responseXML;
    var xmlDoc = xml.documentElement;
    var root = xmlDoc.getElementsByTagName('channel');
    var nodes = root.item(0).childNodes;
    var parsed = {};
    var i, j;
    
    for (i=0; i < nodes.length; i++) {
        var node = nodes[i];
        var nodeName = node.nodeName;
        parsed[nodeName] = node.textContent; 
        
        // read attributes
        var numAttributes = node.attributes.length;
        if (numAttributes > 0) {
            for (j=0; j < numAttributes; j++) {
                var attribute = node.attributes.item(j);
                parsed[nodeName + "." + attribute.localName] = attribute.value;
            }
        }
        
    }
    console.log(parsed)
};
xhr.send(data);
