function receivesAFunction(returnsANamedFunction){
    returnsANamedFunction();
}
function returnsAnAnonymousFunction(){
    return function() {}
}
function returnsANamedFunction(){
    return function named(){}
}
