 function makeHotter(){
   let steps = Number(localStorage.getItem("steps"));
    localStorage.setItem("steps", steps+1);

    console.log("steps "+localStorage.getItem("steps"))

    if(localStorage.getItem("steps") == 3){
        document.getElementById("lives").innerHTML = "You managed to escape!";
const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lives: 0 })
};
fetch(`/resetLives/${localStorage.getItem("username")}/${localStorage.getItem("password")}`, requestOptions)
.then((data)=>{
    return data.json()
}).then((data)=>{
   console.log(data)
});

setTimeout(() => {
    localStorage.setItem("username","");
localStorage.setItem("password","");

localStorage.setItem("heatInSW", 0);
localStorage.setItem("heatInNW", 0);
localStorage.setItem("heatInSE", 0);
localStorage.setItem("heatInNE", 0);
localStorage.setItem("water", "none");
localStorage.setItem("yourWater", "none");

window.location = "/";
  }, 1000);


    }
   
    console.log("heat in NE"+localStorage.getItem("heatInNE"))
    console.log("heat in SE"+localStorage.getItem("heatInSE"))
    console.log("heat in NW"+localStorage.getItem("heatInNW"))
    console.log("heat in SW"+localStorage.getItem("heatInSW"))
    console.log("\n************\n")

    if (document.getElementById("currentRoom").innerHTML == "The South West Room"){
     if (localStorage.getItem("water") == "southWest"){
        localStorage.setItem("yourWater", "got");
        document.getElementById("waterItem").innerHTML = "You've got water"
     }
        document.getElementById("heat").innerHTML = "The heat is "+ localStorage.getItem("heatInSW");
    }else if (document.getElementById("currentRoom").innerHTML == "The South East Room"){
        if (localStorage.getItem("water") == "southEast"){
            localStorage.setItem("yourWater", "got");
            document.getElementById("waterItem").innerHTML = "You've got water"
         }
        document.getElementById("heat").innerHTML = "The heat is "+ localStorage.getItem("heatInSE");
    }else if (document.getElementById("currentRoom").innerHTML == "The North West Room"){
        if (localStorage.getItem("water") == "northWest"){
            localStorage.setItem("yourWater", "got");
            document.getElementById("waterItem").innerHTML = "You've got water"
         }
        document.getElementById("heat").innerHTML = "The heat is "+ localStorage.getItem("heatInNW");
    }else if (document.getElementById("currentRoom").innerHTML == "The North East Room"){
        if (localStorage.getItem("water") == "northEast"){
            localStorage.setItem("yourWater", "got");
            document.getElementById("waterItem").innerHTML = "You've got water"
         }
        document.getElementById("heat").innerHTML = "The heat is "+ localStorage.getItem("heatInNE");
    }
 
    let randNum = Math.floor(Math.random() * 4);

   

    if (randNum == 0){
        
        localStorage.setItem("volcanoBall", "southWest"); 
        localStorage.setItem("water", "northEast");
        if (document.getElementById("currentRoom").innerHTML == "The South West Room"){


            document.getElementById("volcanoBall").innerHTML = "The volcano ball is here! Water has appeared in room northEast";  

        } else{
            document.getElementById("volcanoBall").innerHTML = "The volcano ball is in room "+ localStorage.getItem("volcanoBall");
        }
        
        if (Number(localStorage.getItem("heatInSW")) <3){
            let heatInSW = (Number(localStorage.getItem("heatInSW")))+2;
            
            localStorage.setItem("heatInSW", heatInSW.toString()); 

            if ((Number(localStorage.getItem("heatInNW")) >0)){
                let heatInNW = (Number(localStorage.getItem("heatInNW")))-1;
                localStorage.setItem("heatInNW", heatInNW.toString()); 
            }

            if ((Number(localStorage.getItem("heatInNE")) >0)){
                let heatInNE = (Number(localStorage.getItem("heatInNE")))-1;
                localStorage.setItem("heatInNE", heatInNE.toString()); 
            }

            if ((Number(localStorage.getItem("heatInSE")) >0)){
                let heatInSE = (Number(localStorage.getItem("heatInSE")))-1;
                localStorage.setItem("heatInSE", heatInSE.toString()); 
            }
         
           

            
       
            
        }
      

        
       
    }else if (randNum == 1){
        localStorage.setItem("volcanoBall", "northWest");
        localStorage.setItem("water", "southEast");
        if (document.getElementById("currentRoom").innerHTML == "The North West Room"){


            document.getElementById("volcanoBall").innerHTML = "The volcano ball is here! Water has appeared in room southEast";  
        } else{
            document.getElementById("volcanoBall").innerHTML = "The volcano ball is in room "+ localStorage.getItem("volcanoBall");
        }

        if (Number(localStorage.getItem("heatInNW")) <3){
            let heatInNW = (Number(localStorage.getItem("heatInNW")))+2;
           
            localStorage.setItem("heatInNW", heatInNW.toString()); 

            
            if ((Number(localStorage.getItem("heatInSW")) >0)){
                let heatInSW = (Number(localStorage.getItem("heatInSW")))-1;
                localStorage.setItem("heatInSW", heatInSW.toString()); 
            }

            if ((Number(localStorage.getItem("heatInNE")) >0)){
                let heatInNE = (Number(localStorage.getItem("heatInNE")))-1;
                localStorage.setItem("heatInNE", heatInNE.toString()); 
            }

            if ((Number(localStorage.getItem("heatInSE")) >0)){
                let heatInSE = (Number(localStorage.getItem("heatInSE")))-1;
                localStorage.setItem("heatInSE", heatInSE.toString()); 
            }
        }

        

       
       
    }else if (randNum == 2){
        localStorage.setItem("volcanoBall", "northEast");
        localStorage.setItem("water", "southWest");
        if (document.getElementById("currentRoom").innerHTML == "The North East Room"){

     

            document.getElementById("volcanoBall").innerHTML = "The volcano ball is here! Water has appeared in room southWest";  
        } else{
            document.getElementById("volcanoBall").innerHTML = "The volcano ball is in room "+ localStorage.getItem("volcanoBall");
        }

        if (Number(localStorage.getItem("heatInNE")) <3){
            let heatInNE = (Number(localStorage.getItem("heatInNE")))+2;
          
            localStorage.setItem("heatInNE", heatInNE.toString()); 

            if ((Number(localStorage.getItem("heatInNW")) >0)){
                let heatInNW = (Number(localStorage.getItem("heatInNW")))-1;
                localStorage.setItem("heatInNW", heatInNW.toString()); 
            }

            if ((Number(localStorage.getItem("heatInSW")) >0)){
                let heatInSW = (Number(localStorage.getItem("heatInSW")))-1;
                localStorage.setItem("heatInSW", heatInSW.toString()); 
            }

            if ((Number(localStorage.getItem("heatInSE")) >0)){
                let heatInSE = (Number(localStorage.getItem("heatInSE")))-1;
                localStorage.setItem("heatInSE", heatInSE.toString()); 
            }
        }

        

        
        
    }else if (randNum == 3){
        localStorage.setItem("volcanoBall", "southEast");
        localStorage.setItem("water", "northWest");
        if (document.getElementById("currentRoom").innerHTML == "The South East Room"){
      

            document.getElementById("volcanoBall").innerHTML = "The volcano ball is here! Water has appeared in room northWest";  
        } else{
            document.getElementById("volcanoBall").innerHTML = "The volcano ball is in room "+ localStorage.getItem("volcanoBall");
        }

        if (Number(localStorage.getItem("heatInSE")) <3){
            let heatInSE = (Number(localStorage.getItem("heatInSE")))+2;
            
            localStorage.setItem("heatInSE", heatInSE.toString()); 

            if ((Number(localStorage.getItem("heatInNW")) >0)){
                let heatInNW = (Number(localStorage.getItem("heatInNW")))-1;
                localStorage.setItem("heatInNW", heatInNW.toString()); 
            }

            if ((Number(localStorage.getItem("heatInSW")) >0)){
                let heatInSW = (Number(localStorage.getItem("heatInSW")))-1;
                localStorage.setItem("heatInSW", heatInSW.toString()); 
            }

            if ((Number(localStorage.getItem("heatInNE")) >0)){
                let heatInNE = (Number(localStorage.getItem("heatInNE")))-1;
                localStorage.setItem("heatInNE", heatInNE.toString()); 
            }
        }

      

       
        
    }


    console.log("heat in NE"+localStorage.getItem("heatInNE"))
    console.log("heat in SE"+localStorage.getItem("heatInSE"))
    console.log("heat in NW"+localStorage.getItem("heatInNW"))
    console.log("heat in SW"+localStorage.getItem("heatInSW"))

    if (document.getElementById("currentRoom").innerHTML == "The South West Room"){
     
        document.getElementById("heat").innerHTML = "The heat is "+ localStorage.getItem("heatInSW");
    }else if (document.getElementById("currentRoom").innerHTML == "The South East Room"){
        document.getElementById("heat").innerHTML = "The heat is "+ localStorage.getItem("heatInSE");
    }else if (document.getElementById("currentRoom").innerHTML == "The North West Room"){
        document.getElementById("heat").innerHTML = "The heat is "+ localStorage.getItem("heatInNW");
    }else if (document.getElementById("currentRoom").innerHTML == "The North East Room"){
        document.getElementById("heat").innerHTML = "The heat is "+ localStorage.getItem("heatInNE");
    }

     loseLife();
     console.log("\n************\n")
     console.log(localStorage.getItem("yourWater"))
     console.log(localStorage.getItem("water"))
}

async function loseLifeQueries(){
    let numLives = await fetch(`/getLives/${localStorage.getItem("username")}/${localStorage.getItem("password")}`).then((data)=>{
        return data.json()
    });

  

    if(numLives.lives >1){
        let newLives = Number(JSON.stringify(numLives.lives))-1;

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lives: newLives })
        };
        fetch(`/loseLives/${localStorage.getItem("username")}/${localStorage.getItem("password")}`, requestOptions)
            .then((data)=>{
                return data.json()
            }).then((data)=>{
                document.getElementById("lives").innerHTML = "Number of lives: "+newLives;

            });
          
    }else{
document.getElementById("lives").innerHTML = "You're dead!";
const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lives: 0 })
};
fetch(`/resetLives/${localStorage.getItem("username")}/${localStorage.getItem("password")}`, requestOptions)
.then((data)=>{
    return data.json()
}).then((data)=>{
   console.log(data)
});

setTimeout(() => {
    localStorage.setItem("username","");
localStorage.setItem("password","");

localStorage.setItem("heatInSW", 0);
localStorage.setItem("heatInNW", 0);
localStorage.setItem("heatInSE", 0);
localStorage.setItem("heatInNE", 0);
localStorage.setItem("water", "none");
localStorage.setItem("yourWater", "none");

window.location = "/";
  }, 1000);


    }
}

function loseLife(){
   
    if (document.getElementById("currentRoom").innerHTML == "The South West Room"){
        
        if (localStorage.getItem("heatInSW")>=3){

            loseLifeQueries();
        };

    }else if (document.getElementById("currentRoom").innerHTML == "The South East Room"){
        if (localStorage.getItem("heatInSE")>=3){
            loseLifeQueries();
        };

    }else if (document.getElementById("currentRoom").innerHTML == "The North West Room"){
        if (localStorage.getItem("heatInNW")>=3){
            loseLifeQueries();
        };

    }else if (document.getElementById("currentRoom").innerHTML == "The North East Room"){
        if (localStorage.getItem("heatInNE")>=3){
            loseLifeQueries();
        };

    }
 
}

function useWater(){


if (localStorage.getItem("yourWater") == "got"){
    localStorage.setItem("yourWater", "none");
    localStorage.setItem("water", "none");

    if (document.getElementById("currentRoom").innerHTML == "The South West Room"){
        if ((Number(localStorage.getItem("heatInSW")) >0)){
            let heatInSW = (Number(localStorage.getItem("heatInSW")))-1;
            localStorage.setItem("heatInSW", heatInSW.toString()); 
        }

        document.getElementById("heat").innerHTML = "The heat is "+ localStorage.getItem("heatInSW");

    }else if (document.getElementById("currentRoom").innerHTML == "The South East Room"){

        if ((Number(localStorage.getItem("heatInSE")) >0)){
            let heatInSE = (Number(localStorage.getItem("heatInSE")))-1;
            localStorage.setItem("heatInSE", heatInSE.toString()); 
        }

        document.getElementById("heat").innerHTML = "The heat is "+ localStorage.getItem("heatInSE");

    }else if (document.getElementById("currentRoom").innerHTML == "The North West Room"){

        if ((Number(localStorage.getItem("heatInNW")) >0)){
            let heatInNW = (Number(localStorage.getItem("heatInNW")))-1;
            localStorage.setItem("heatInNW", heatInNW.toString()); 
        }

        document.getElementById("heat").innerHTML = "The heat is "+ localStorage.getItem("heatInNW");

    }else if (document.getElementById("currentRoom").innerHTML == "The North East Room"){

        if ((Number(localStorage.getItem("heatInNE")) >0)){
            let heatInNE = (Number(localStorage.getItem("heatInNE")))-1;
            localStorage.setItem("heatInNE", heatInNE.toString()); 
        }

        document.getElementById("heat").innerHTML = "The heat is "+ localStorage.getItem("heatInNE");

    }
}
console.log("\n************\n")
console.log(localStorage.getItem("yourWater"))
console.log(localStorage.getItem("water"))
}