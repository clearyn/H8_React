////Callback
// function showInTerminal(message) {
//     console.log(message)
// }

// function greeting(name, callback) {
//     const value = `Halo!, nama saya ${name}`
//     callback(value)
// }

// greeting("Matthew", showInTerminal)


////Promise
// function showInTerminal(message) {
//     console.log(message)
// }

// function greeting(name, fnc = showInTerminal) {
//     const value = `Halo!, nama saya ${name}`

//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             fnc(value)
//         }, 1500)

//         resolve("Perintah Selesai")
//     })
// }

// greeting("Matthew").then(message => console.log(message))


////Another Example
function showInTerminal(message) {
    console.log(message)
}

function greeting(name, fnc = showInTerminal) {
    const value = `Halo!, nama saya ${name}`

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            fnc(value)
        }, 1500)

        resolve("Perintah Selesai")
    })
}

greeting("Matthew").then(message => console.log(message))