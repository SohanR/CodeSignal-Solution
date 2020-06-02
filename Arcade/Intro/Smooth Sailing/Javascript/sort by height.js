//https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

function sortByHeight(a) {

    let newArray = a;

    newArray = newArray.filter( x => {
        if(x != -1){
            return x
        }
    }).sort((a,b) => a-b)

    let index = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i] != -1){
            a[i] = newArray[index];
            index++;
        }
    }

return a;
}
