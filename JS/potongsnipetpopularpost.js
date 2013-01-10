//<![CDATA[
// potong snipet popular post
$('.popular-posts ul li .item-snippet').each(function(){
  var txt=$(this).text().substr(0,70);
  var j=txt.lastIndexOf(' ');
  if(j>42)
     $(this).text(txt.substr(0,j).replace(/[?,!\.-:;]*$/,'...'));
});
//]]>