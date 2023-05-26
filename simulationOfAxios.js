class Axios {
    constructor() {
        this.url = ""
        this.data = "My data"
    }
    
    get(url) {
        this.url = url;
        return this;
    }
    
    then(callback) {
        if(typeof(callback) === "function") callback(this);
        return this;
    }
}

const axios = new Axios();

axios.get("url")
      .then((res) => console.log(res.data))
      .then((res) => console.log(res.url))
