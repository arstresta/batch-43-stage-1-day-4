// alert("Halo Saya Batch 43")
// console.log("Hello batch 43")
// document.write("Hello World")
// var gelas = "Susu"
// var gelas = "Air Putih"

// let piring = "Nasi Putih"
// piring = "Nasi Goreng"

// const nama = "Dira"
// nama = "Dira"

//Object
// let dataDiri = {
//     nama: "Dwi Dira",
//     alamat: "Jakarta Selatan"
// }

// let darahMuda = "o"

// let angkaAwal = 10
// let angkaTambah = 20
// let hasil = angkaAwal + angkaTambah
// let hasil = angkaAwal * angkaTambah
// let hasil = angkaAwal**(2*3)

// let myName  = "Moch. Dira Issyari"
// let myJob   = "Student"
// let myIntro = myName + " " +  myJob
// let hasil   = "Nama Saya ${myName} pekerjaan saya adalah ${myJob}" 


// const umur = 19
// if (umur == 19) {
//     console.log("Aku Berumur 19 thn")
// }else{
//     console.log("Umur Saya 15 thn")
// }

// console.log(gelas)
// console.log(piring)
// console.log(nama)
// console.log(dataDiri)
// console.log(hasil)
// console.log(myIntro)
// console.log(hasil)

//Function
// function increment(){
//     let kota = "jakarta"
//     return kota
// }

// increment()

// const decrement = function() {
//     console.log("Jakarta")
// }

// decrement()

// const arrow = () => {
//     console.log("Halo")
// }

// arrow()

// function sayHello(name, pekerjaan){
//     return "Halo Nama Saya " + name + " Pekerjaan Saya " + pekerjaan
// }

// console.log(sayHello("Dira", "Mahasiswa"))

function getData(){
    let name    = document.getElementById("nama").value
    let email   = document.getElementById("email").value
    let nohp    = document.getElementById("nohp").value
    let subjek  = document.getElementById("subjek").value
    let pesan   = document.getElementById("message").value

    if (name == "") {
        return alert("Nama Tidak Boleh Kosong")
    }else if (email == "") {
        return alert("Email Tidak Boleh Kosong")
    }else if (nohp == "") {
        return alert("Nomor HP Tidak Boleh Kosong")
    }else if (subjek == "") {
        return alert("Subjek Tidak Boleh Kosong")
    }else if (pesan == "") {
        return alert("Pesan Tidak Boleh Kosong")
    }

    let link = document.createElement('a')
    link.href = `mailto:${email}?subject=${subjek}&body=Hallo nama saya ${name}, ${pesan}, silahkan kontak nomor saya di ${nohp}`
    link.click()

    let student = {
        name,
        email,
        nohp,
        subjek,
        message
    }

    console.log(student)
    console.log(name)
    console.log(email)
    console.log(nohp)
    console.log(subjek)
    console.log(pesan)
}