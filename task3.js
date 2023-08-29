//Write a “person” class to hold all the details.

class person{
    constructor(name,age,phone,email,address,...others) {
        this.name = String(name);
        this.age = Number(age);
        this.phone = Number(phone);
        this.email = String(email);
        this.address = String(address);
        this.otherDetails = Array(...others);
    }
}