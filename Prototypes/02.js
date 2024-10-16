String.prototype.ensureStart = function(str){
    if(this.startsWith(str)){
        return this
    }else{
        return str + this
    }
}
String.prototype.ensureEnd = function(str){
    if(this.endsWith(str)){
        return this
    }else{
        return this + str
    }
}
String.prototype.isEmpty = function(){
    return this.length === 0
}
String.prototype.truncate = function(n){
    if (this.length < n){
        return this
    }
    if(this.includes(" ")){
        let [part, ...rest] = this.split(" ")
    }
}