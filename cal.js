const input= document.getElementsByName('input');
const divElemet= document.getElementById("box");

const output=document.getElementById('output');
const array=['','/','*','','7','8','9','-','4','5','6','+','1','2','3','.','(',')','0','']
for(let c=0;c<20;c++){
  divElemet.children[c].addEventListener('click', function() {
      output.innerText+=array[c];
 
  })
}
const equals= document.getElementById('b20');
equals.addEventListener('click', function(){
 
  const ans= eval(output.innerText)
  output.innerText=ans;
  if (output.innerText=='undefined') {
    output.innerHTML='';
  };
  if (output.innerHTML.length>8) {
    output.innerText=(ans).toExponential(7);
  };
})

const clear= document.getElementById('b1');
clear.addEventListener('click', function(){
  output.innerText='';
})
const del= document.getElementById('b4');
del.addEventListener('click', function(){
  output.innerHTML=output.innerText.slice(0,-1);

});

setInterval(
  function() {
  const le=output.innerHTML[output.innerText.length-1];
  const te=output.innerHTML[output.innerText.length-2];
    if(le==null || le=='/' || le=='*' || le=='+' || le=='-' || le=='.' || le=='('){
      divElemet.children[1].style.pointerEvents='none';
    }
    else {
      divElemet.children[1].style.pointerEvents='auto';
    };
    
    if(le==null || le=='/' || le=='*' || le=='+' || le=='-' || le=='.' || le=='('){
      divElemet.children[2].style.pointerEvents='none';
    }
    else {
      divElemet.children[2].style.pointerEvents='auto';
    };
    
       if(le=='+' || le=='-' || le=='.'){
      divElemet.children[7].style.pointerEvents='none';
    }
    else {
      divElemet.children[7].style.pointerEvents='auto';
    };
    
     if(le==null || le=='/' || le=='*' || le=='+' || le=='-' || le=='.' || le=='('){
      divElemet.children[11].style.pointerEvents='none';
    }
    else {
      divElemet.children[11].style.pointerEvents='auto';
    };  
       if(le=='.' || te=='.'){
      divElemet.children[15].style.pointerEvents='none';
    }
    else {
      divElemet.children[15].style.pointerEvents='auto';
    };
    
    if(le==null || le=='.'){
      divElemet.children[17].style.pointerEvents='none';
    }
    else {
      divElemet.children[17].style.pointerEvents='auto';
    };
  }
  ,1)