
fetch('https://apis.scrimba.com/jsonplaceholder/posts')
.then((response) => response.json())
.then((data) => {
    const postsArr = data.slice(0,9)
    let html = ``
    for (let post of postsArr) {
        html += `<h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />`
    }
    document.getElementById("container").innerHTML=html
});

document.getElementById('new-post').addEventListener('submit',function(e){
    e.preventDefault()
    const postTitle = document.getElementById('post-title').value
    const postBody = document.getElementById('post-body').value
    const data = {
        title: postTitle,
        body: postBody
    }
    console.log(`title is ${postTitle} and body is ${postBody}`)
    console.log(data)
})