interface Drivable {
    //Properties
    _vehicleName: string;
    _vehicleType: string;

    //Method Declaration
     start(): string;
     drive(): string;  
     getPosition(): void;
}

class Car implements Drivable {
    _vehicleName = 'Honda Accord';
    _vehicleType = 'Four Wheeler';

    start(): string {
        let msg = 'Start new ' + this._vehicleName;
        console.log(msg);
        return msg;
    }
    drive(){
        let msg = 'Drive your ' + this._vehicleType;
        console.log(msg);
        return msg;
    }
     getPosition(){
        return 'This is getPosition().';
     }
}


