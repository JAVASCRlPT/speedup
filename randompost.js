<ul id="random-posts"></ul>
<script>
//<![CDATA[
var homePage = "http://musikakuka.blogspot.com/",
numPosts = 5;
function randomPosts(a){if(document.getElementById("random-posts")){var e=shuffleArray(a.feed.entry),title,link,img,content="",ct=document.getElementById("random-posts");for(var i=0;i<numPosts;i++){for(var j=0;j<numPosts;j++){if(e[i].link[j].rel=="alternate"){link=e[i].link[j].href;break}}var title=e[i].title.$t;content+='<strong><li class="random-posts"><a href="'+link+'" title="'+title+'" target="_blank">'+title+'</a></li></strong>'}ct.innerHTML=content}}function shuffleArray(arr){var i=arr.length,j,temp;if(i===0)return false;while(--i){j=Math.floor(Math.random()*(i+1));temp=arr[i];arr[i]=arr[j];arr[j]=temp}return arr}var random_post=document.createElement('script');random_post.src=homePage+'/feeds/posts/summary?alt=json-in-script&orderby=published&max-results=999&callback=randomPosts';document.getElementsByTagName('head')[0].appendChild(random_post);
//]]>
</script>
