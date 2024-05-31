class Singleton {
    // Holds the single instance of the class
    static instance;
    // Private constructor to prevent instantiation from outside
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance
        }
        this.data = {};//simulate Example property to hold some data
        Singleton.instance = this;
    }
    // Method to get the instance of the class
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton
        }
        return Singleton.instance;
    }
    // Example method to get data
    set(key,value){
        this.data=value
    }
    // Example method to get data
    get(data){
        return this.data[key]
    }
}

const instance1=Singleton.getInstance()
const instance2=Singleton.getInstance()

instance1.set('name', 'Singleton Example')
console.log(instance2.get('name')); // Output: Singleton Example
console.log(instance1 === instance2); // Output: true