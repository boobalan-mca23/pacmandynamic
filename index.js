let pacmen=[]
var x_vel=[]//empty arr for xvel
var y_vel=[]//empty arr for yvel
var gravity=1 //creating the direction
let x_pos=[]
let y_pos=[]
function add_img(){
    let xpos=Math.random()*1000 +10
    let ypos=Math.random()*400 +75
    let xvel=(Math.floor(Math.random()*20))
    let yvel=(Math.floor(Math.random()*20))
    var pacman=document.createElement("img")
    document.getElementById("container").appendChild(pacman)
    pacman.src="./images/PacMan1.png"
    pacman.style.width=50+"px" 
    pacmen.push(pacman)//pacmen
    x_pos.push(xpos)//storing the x position in array
    y_pos.push(ypos)//storing the y position in array
    x_vel.push(xvel)//storing the x position in array
    y_vel.push(yvel)//storing the y position in array
    console.log(x_pos)
    console.log(y_pos)
    console.log(x_vel)
    console.log(y_vel)
    // console.log(pacmen)
    pacman.style.left=xpos+"px"
    pacman.style.top=ypos+"px"
    pacman.style.position= "absolute"

} 
function move(){
   for(let i=0;i<pacmen.length;i++){
    x_pos[i]+=x_vel[i]
    y_pos[i]+=y_vel[i]
    if(x_vel[i]>0){
        if((Math.floor(x_pos[i]/x_vel[i]))%2!==0){
        pacmen[i].src="/images/PacMan2.png"
       }
       else{
        pacmen[i].src="/images/PacMan1.png"
         }
    }
    else{
        if((Math.floor(x_pos[i]/x_vel[i]))%2!==0){
            pacmen[i].src="/images/PacMan4.png"
        }
        else{
            pacmen[i].src="/images/PacMan3.png"
        }
    }


    if(x_pos[i]<=10 || x_pos[i]>=1030){
        x_vel[i]=-x_vel[i]*gravity
    }
    if(y_pos[i]<=65 || y_pos[i]>=500){
        y_vel[i]=-y_vel[i]*gravity
    }

    pacmen[i].style.left=x_pos[i]+"px"
    pacmen[i].style.top=y_pos[i]+"px"
    // pacmen[i].style.position= "absolute"

        
   }
  setTimeout(move,100)
}
 