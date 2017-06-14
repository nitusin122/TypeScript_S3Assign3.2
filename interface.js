var Car = (function () {
    function Car() {
        this._vehicleName = 'Honda Accord';
        this._vehicleType = 'Four Wheeler';
    }
    Car.prototype.start = function () {
        var msg = 'Start new ' + this._vehicleName;
        console.log(msg);
        return msg;
    };
    Car.prototype.drive = function () {
        var msg = 'Drive your ' + this._vehicleType;
        console.log(msg);
        return msg;
    };
    Car.prototype.getPosition = function () {
        return 'This is getPosition().';
    };
    return Car;
}());
