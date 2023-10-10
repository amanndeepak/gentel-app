const filesys = require('fs');
const express = require('express');
const appdata = express();



filesys.writeFileSync("gental.txt", "this is amandeep singh");
const data = filesys.readFileSync("gental.txt")
console.log(data.toString())


const consoledata = process.argv[2]


if (consoledata == "add") {
    console.log("this is add")
} else if (consoledata == "read") {
    console.log("this is read")
}

const square = (x) => {
    return x * x
}

console.log(square(3))


const event = {
    name: "birthday party",
    guestlist: ['aman', "zeeshan", "nitish", "prachi"],
    printguestlist() {
        const that = this

        console.log('guest list for ' + this.name)

        this.guestlist.forEach(function (guest) {
            console.log(guest + ' is attenging ' + that.name)
        })
    }
}


event.printguestlist() 