const tweetsArr = [];
//main element
const tweetsContainer = document.getElementById("tweets-container");
const tweetBtn = document.getElementById("submit");
const form = document.getElementById("form");

const like = document.getElementById("like");
const retweet = document.getElementById("retweet");







form.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let tweet = document.getElementById("tweet").value;
    
    tweetsContainer.insertBefore((createNewTweet(name,tweet,tweetsArr.length)), tweetsContainer.firstChild);    
    tweetsArr[tweetsArr.length]=({name,tweet});
 
    document.getElementById("name").value = "";
    document.getElementById("tweet").value="";
});

tweetsContainer.addEventListener('click',function(e){
    
    if(e.target && e.target.className== 'like material-icons-outlined'){
        console.log(window.getComputedStyle(e.target).getPropertyValue('color'));

            if(window.getComputedStyle(e.target).getPropertyValue('color') == "rgb(122, 124, 146)"){
                e.target.style.color = "red";
            }else{
                e.target.style.color = "rgb(122, 124, 146)";

            }
     }
     else if (e.target && e.target.className== 'retweet material-icons-outlined'){

        let index = e.target.getAttribute("id");
        
        let name = tweetsArr[index].name;
        let tweet = tweetsArr[index].tweet;
        tweetsContainer.insertBefore(createNewTweet(name,tweet,tweetsArr.length), tweetsContainer.firstChild); 
        tweetsArr[tweetsArr.length]=({name,tweet});   
        console.log(tweetsArr[index]);
        
     }
 });





function createNewTweet(name, tweet,index){
    const feedTweet = document.createElement("div");
    feedTweet.className = "feed-tweet";

    
    //user img
    feedTweet.appendChild(createUserImg());

    //tweet details
    feedTweet.appendChild(createTweetDetails(name, tweet,index));

    return feedTweet;
}



function createUserImg(){

    const userImg =  document.createElement("img");
    userImg.className = "tweet-img";
    userImg.src = "./images/user.PNG";
    return userImg;
   
}

function createTweetDetails(name, tweet,index){

    const feedTweetDetails = document.createElement("div");
    feedTweetDetails.className ="feed-tweet-details";

    //user details
    feedTweetDetails.appendChild(createUserDetails(name));
    
    //tweetText
    feedTweetDetails.appendChild( createTweetText(tweet));
   
    //tweet icons
    feedTweetDetails.appendChild(createTweetIcons(index)); 

    return feedTweetDetails;
}



function  createUserDetails(name){
    const userDetails = document.createElement("div");
    const userName = document.createElement("a");
    const moreHorizIcon = document.createElement("i");
    
    userDetails.className = "user-details";
    userName.className = "user-name";
    moreHorizIcon.className = "material-icons-outlined";
    
    userName.innerText = name;
    moreHorizIcon.innerText = "more_horiz";
    
    userDetails.appendChild(userName);
    userDetails.appendChild(moreHorizIcon);

    return userDetails;

}





function createTweetText(tweet){
    const tweetText = document.createElement("div");
    const userTweet = document.createElement("p");

    tweetText.className = "tweet-text";
    userTweet.className = "user-tweet";

    userTweet.innerText = tweet;

    tweetText.appendChild(userTweet);

    return tweetText;
}










function createTweetIcons(index){
    //create
    const tweetIcons = document.createElement("div");
    const restartAltIcon = document.createElement("i");
    const chatBubbleOutlineIcon = document.createElement("i");
    const favoriteBorderIcon = document.createElement("i");
    const uploadIcon = document.createElement("i");

    //classes
    tweetIcons.className ="tweet-icons";
    restartAltIcon.className = "retweet material-icons-outlined";
    chatBubbleOutlineIcon.className = "material-icons-outlined";
    favoriteBorderIcon.className = "like material-icons-outlined";
    uploadIcon.className = "material-icons-outlined";

    favoriteBorderIcon.setAttribute("id","like");

    restartAltIcon.id = `${index}`;

    //values
    restartAltIcon.innerText = "restart_alt";
    chatBubbleOutlineIcon.innerText = "chat_bubble_outline";
    favoriteBorderIcon.innerText = "favorite_border";
    uploadIcon.innerText = "upload";

    tweetIcons.append(restartAltIcon,chatBubbleOutlineIcon,favoriteBorderIcon,uploadIcon);
    return tweetIcons;
}

