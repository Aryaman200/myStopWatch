var x = y = z = 0
var myInterval
var state = false
// x-msec | y-sec | z-min
function start_timer(){
    x = y = z = 0
    state = false
    myInterval = setInterval(myTimer, 10)
    start = document.getElementById('btn1')
    start.disabled = true

}

function myTimer(){
    x = x+1
    if(x===100){
        x = 0
        y = y+1
        if(y===60){
            y = 0
            z = z+1
            if(z===60){
                x = y = z =0
            }
        }
    }
    document.getElementById('result').innerHTML = '<h1>'+String(z).padStart(2,'0')+':'+String(y).padStart(2,'0')+':'+String(x).padStart(2,'0')+'</h1>'
}

function pr_timer(){
    state = !state
    if(state === true)
    {
        clearInterval(myInterval)
    }
    else
    {
        myInterval = setInterval(myTimer,10)
    }
}

function stop_timer(){
    clearInterval(myInterval)
    state = false
    x = y = z = 0
    start = document.getElementById('btn1')
    start.disabled = false
    document.getElementById('result').innerHTML = '<h1>'+String(z).padStart(2,'0')+':'+String(y).padStart(2,'0')+'</h1>'
}