class TimeLimitedCache {
    constructor(){
        this.storedValue = new Map();
    }
    set(key, value, duration){
        let existingKey = this.storedValue.get(key);
        if(existingKey){
            clearTimeout(existingKey.timeout)
        }
        const timeout = setTimeout(() =>{
           this.storedValue.delete(key)
        },duration)
        
        this.storedValue.set(key, {value, timeout})
        return Boolean(existingKey)
    }
    get(key){
        if(this.storedValue.has(key)){
            return this.storedValue.get(key).value;
        }
        return -1;
    }
    count() {
        return this.storedValue.size;
    }
}