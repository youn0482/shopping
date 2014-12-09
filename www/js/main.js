var myList = [];

//runs once the document has loaded
document.addEventListener("DOMContentLoaded", function(ev){
 
  //check to see if the grocery list exists
  if(localStorage.getItem("groceryList")){
    //turn the string into a numeric array
    myList = JSON.parse(localStorage.getItem("groceryList"));
    
  }
  
//execute the show list function.
  showList();
  
//add itme button 
  document.querySelector("#btnAdd").addEventListener("click", function(ev){
    ev.preventDefault();
    var newItem = document.querySelector("#item").value;
    myList.push( newItem );
    localStorage.setItem("groceryList", JSON.stringify(myList) );
    
    //reset the input box
    document.querySelector("#item").value = "";
    //convert from Array to String.
    showList();
    return false;
  });
    
    document.querySelector("#btnClear").addEventListener("click", function(ev){
        if (confirm("Clear your list?")) {
        // your deletion code
            localStorage.clear();
        
        showList();
        }
        
        return false;
  });
  
  
  //document.myForm.addEventListener("submit", function(ev){});
});

function removeItem(ev){
  //this.firstChild.nodeValue
  //ev.currentTarget.firstChild - the textNode inside the paragraph
  //ev.currentTarget.firstChild.nodeValue - the text inside the textNode
    var txt = ev.currentTarget.previousSibling.firstChild.nodeValue;
    var output = document.querySelector(".output");
    var dRay = output.childNodes;
    console.log(dRay);
    for(var i=0;i<myList.length;i++){
  	if(myList[i] == txt){
      //found the match
      myList.splice(i, 1);
     output.removeChild(dRay[i]);
        
    }
  }
    
  localStorage.setItem("groceryList", JSON.stringify(myList) );
}

function gotItem(ev){
    
    $(this).toggleClass("gotit");
  
}

function showList(){
    var output = document.querySelector(".output");
    
    
    output.innerHTML = "";
    for(var i=0;i<myList.length;i++){
        
        var listDiv = document.createElement("div");
        listDiv.className = "itemRow";
        
        var p = document.createElement("p");
        p.innerHTML = myList[i];
        var gone = document.createElement("div"); 
        gone.className = "delete";
        
        listDiv.appendChild(p);
        listDiv.appendChild(gone);

        output.appendChild(listDiv);
        
        p.addEventListener("click", gotItem);
        gone.addEventListener("click", removeItem);
    
    }
}