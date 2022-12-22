// let array = ["Dira", 22, false]

// console.table(array)

// let myBio = {
//     name: "Dira",
//     umur: 22,
//     married: false
// }

// console.table(myBio)
// console.table(myBio['name'])

//Array of Object
// let myFriend = [
//     {
//         name: "Dira",
//         age: 22,
//         address: "Jakarta",
//         married: false
//     },
//     {
//         name: "Dwi",
//         age: 22,
//         address: "Rangkas",
//         married: false
//     }
// ]
// console.table(myFriend)
// console.table(myFriend[0].address)
// console.table(myFriend[1].address)

// let example = document.getElementById('example')
//     example.innerHTML += `
//     <img src=${image} />
//     `

let blogs = []

function getData(event){
    event.preventDefault()
    let author  = "Moch. Dira Issyari"
    let title   = document.getElementById('title').value
    let konten  = document.getElementById('konten').value
    let image   = document.getElementById('image').files
    let tanggal = new Date()

    image = URL.createObjectURL(image[0])

    let addBlog = {
        author,
        title,
        konten,
        image,
        tanggal
    }

    blogs.push(addBlog)
    console.log(blogs)
    showData()
}

// for (let gf = 0; gf < q .length; gf++) {
//     const element = q [gf]
// }

function showData(){
    document.getElementById('blog-list').innerHTML = ""
    for (let i = 0; i < blogs.length; i++) {
        let data = document.getElementById('blog-list')
        data.innerHTML += `
        <div class="card">
            <div class="card-left">
                <img src=${blogs[i].image} />
            </div>
            <div class="card-right">
                <div class="btn-blog">
                    <button class="btn-edit"><a href="#">Edit Post</a></button>
                    <button class="btn-detail"><a href="detail-blog.html">Detail Post</a></button>
                </div>
                <div class="title">${blogs[i].title}</div>
                <div class="auth">${blogs[i].tanggal} | ${blogs[i].author}</div>
                <div class="seo">${blogs[i].konten}</div>
            </div>
        </div>
        `
    }
}