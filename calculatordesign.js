 const divElement= document.getElementById("box");
    
 let colorSelect = document.getElementById('select');

colorSelect.addEventListener('change', function() {
  
  let selectedColor = colorSelect.value;
  output.style.color = selectedColor;
  select2.style.backgroundColor=selectedColor;
  document.getElementById('button').style.color=selectedColor;
  for( a=0;a<20;a++){
    divElement.children[a].style.color=selectedColor;
    colorSelect.style.backgroundColor=selectedColor;
      
  };
  for(let i=0; i<20; i++){
    divElement.children[i].addEventListener('click', function (){
    
    divElement.children[i].style.color = "#43463D";
    divElement.children[i].style.backgroundColor = selectedColor;
  
    
      setTimeout(
        function(){
          divElement.children[i].style.color = selectedColor;
          divElement.children[i].style.backgroundColor = "#43464D";
          divElement.children[i].style.boxShadow = "inset 17px 17px 40px black";
        },300)
    }
    )}
    
});

const select2= document.getElementById('select2');

select2.addEventListener('change', 
function(){
  document.getElementById('body').style.fontFamily=select2.value;
  select2.style.fontFamily=select2.value;
  select.style.fontFamily=select2.value;
});

divElement.children[19].addEventListener('dblclick', 
function(){
  document.getElementById('settings').style.display='block';
  document.getElementById('box').style.opacity=0.05;
  document.getElementById('output').style.opacity=0.05;
  divElement.style.pointerEvents='none';
});

document.getElementById('button').addEventListener('click',
function(){
  document.getElementById('settings').style.display='none';
  document.getElementById('box').style.opacity=1;
  document.getElementById('output').style.opacity=1;
  divElement.style.pointerEvents='auto';
})