jQuery(function($){function t(t){return t=t.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g,function(t){return'<a href="'+t+'" >'+t+"</a>"}),t=t.replace(/\B@([_a-z0-9]+)/gi,function(t){return'<a href="http://twitter.com/'+t.substring(1)+'" style="font-weight:lighter;" >'+t.charAt(0)+t.substring(1)+"</a>"})}function e(t){var e=t.split(" ");t=e[1]+" "+e[2]+", "+e[5]+" "+e[3];var r=Date.parse(t),a=arguments.length>1?arguments[1]:new Date,i=parseInt((a.getTime()-r)/1e3);return i+=60*a.getTimezoneOffset(),i<60?"less than a minute ago":i<120?"about a minute ago":i<3600?parseInt(i/60).toString()+" minutes ago":i<7200?"about an hour ago":i<86400?"about "+parseInt(i/3600).toString()+" hours ago":i<172800?"1 day ago":parseInt(i/86400).toString()+" days ago"}var r=$(".twitter-feed"),a=r.attr("data-count"),i="Dan Fisher",s=!1,n=!0,o=!0,_=!0,d=!0,f=!1,h="",w="";w+='<div class="twitter-feed__preloader">Please wait...</div>',r.html(""+w),$.getJSON("php/get-tweets.php",function(r){for(var i="",s=1,n=0;n<r.length;n++){var o=r[n].user.name,_=r[n].user.screen_name,d=r[n].user.profile_image_url_https,f=r[n].text,h=!1,w=!1,u=r[n].id_str;void 0!==r[n].retweeted_status&&(d=r[n].retweeted_status.user.profile_image_url_https,o=r[n].retweeted_status.user.name,_=r[n].retweeted_status.user.screen_name,u=r[n].retweeted_status.id_str,h=!0),"@"==r[n].text.substr(0,1)&&(w=!0),0==w&&r[n].text.length>1&&s<=a&&(f=t(f),1==s&&(i+=""),i+='<li class="twitter-feed__item">',i+='<header class="twitter-feed__header">',i+='<figure class="twitter-feed__thumb">',i+='<a href="https://twitter.com/'+_+'" target="_blank"><img src="'+d+'"images/twitter-feed-icon.png" width="40" height="40" alt="Avatar" /></a>',i+="</figure>",i+='<div class="twitter-feed__info">',i+='<h5 class="twitter-feed__name">'+o+"</h5>",i+='<h6 class="twitter-feed__username"><a href="https://twitter.com/'+_+'" target="_blank">@'+_+"</a></h6>",i+="</div>",i+="</header>",i+='<div class="twitter-feed__body">'+f+"</div>",i+='<footer class="twitter-feed__footer">',i+='<div class="twitter-feed__timestamp">',i+='<a href="https://twitter.com/'+_+"/status/"+u+'">'+e(r[n].created_at)+"</a>",i+="</div>",i+='<div class="twitter-feed__actions">',i+='<a href="https://twitter.com/intent/tweet?in_reply_to='+u+'" class="twitter-feed__reply"></a>',i+='<a href="https://twitter.com/intent/retweet?tweet_id='+u+'" class="twitter-feed__retweet"></a>',i+='<a href="https://twitter.com/intent/favorite?tweet_id='+u+'" class="twitter-feed__favorite"></a>',i+="</div>",i+="</footer>",i+="</li>",s++)}$(".twitter-feed").html(i),$(".twitter-feed__actions a").click(function(){var t=$(this).attr("href");return window.open(t,"tweet action window","width=580,height=500"),!1})})});