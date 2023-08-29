class uberPrice{
    constructor(fromLocation, toLocation,vechicleType, travelDistance) {
        this.fromLocation = String(fromLocation);
        this.toLocation = String(toLocation);
        this.vechicleType = String(vechicleType);
        this.travelDistance = Number(travelDistance);
    }
    getPrice() {
        if (this.travelDistance <= 5) {
            if (this.vechicleType === 'bike') return 50;
            if (this.vechicleType === 'auto') return 100;
            if(this.vechicleType==='car') return 150;
        } else {
            if (this.vechicleType === 'bike') return 50 + ((this.travelDistance - 5) * 5);
            if (this.vechicleType === 'auto') return 100 + ((this.travelDistance - 5) * 10);
            if(this.vechicleType==='car') return 150 + ((this.travelDistance - 5) * 15);
        }
    }
}
let a = new uberPrice('trichy','thuraiyur','bike',15);
console.log(a.getPrice());