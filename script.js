var quoteArray=[];
var index=0;      //index will always be 0 and we will store new quotes for example quoteArray[index]="what ever quote"
var textPosition=0
var flag=true;
var destination=document.getElementById('typedtext');
//quoteArray[index]="Hello g start quote";

window.addEventListener('load', typewriter);


function loadquote(){

//we need api reference anual to see the functionality which we can find from quoatable website.
    const url="https://api.quotable.io/random";

fetch(url)
//using promise we handle this 
.then(response =>{ 
    if(response.ok)  
    {
        //it returns the respose in json string. which we handle in next promise below
        return response.json();
       
   }
      
    else 
    {   alert('problem with load');
         console.log.Response.status;
    
    }
    
})
//
.then(data=>{ 
 quoteArray[index]=data.content; //handing of json data .content we found out from api reference and this content is the actual quote in the form of string. 
 
})
}
function typewriter()
{
    if(flag)
    {   
      loadquote();
      quoteArray[index]+='';
      flag=false;
         
    }
destination.innerHTML=quoteArray[index].substring(0,textPosition)+'<span>\u25AE<span>';

//following if statement acts like for loop until textposition++!=array length
if(textPosition++!=quoteArray[index].length){
    
    setTimeout('typewriter()',100);
}else
{
    quoteArray[index]='';
    setTimeout('typewriter()',3000);
    textPosition=0;
    flag=true;
}
}