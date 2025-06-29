const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];


function renderPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = ""; // Clear existing content

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";

    postElement.innerHTML = `
          <div class="flex">
               <img src=${post.avatar} class="user-avatar" alt="avatar-vangogh">
              <div class="info-flex"
                <p class="info-author">${post.name}</p>
                <address>${post.location}</address>
              </div>
          </div>
              <img src=${post.post} alt="post-vangogh" class="post-image">
              <div>
                  <ul class="social-icons">
                     <li><img src="images/icon-heart.png" alt="heart icon" class="icons" id="like"></li>
                     <li><img src="images/icon-comment.png" alt="comment icon" class="icons" id="comment"></li>
                     <li><img src="images/icon-dm.png" alt="dm icon" class="icons" id="share"></li>
                  </ul>
                  <p class="likes">${post.likes} likes</p>
                  <p class="comment"><span class="username">${post.username}</span> ${post.comment}</p>
               </div>
      `;

    postElement.style.marginBottom = "20px";
    postsContainer.appendChild(postElement);
  });
}

renderPosts()


function likePost(event) {
  const postElement = event.target.closest('.post');
  if (postElement) {
    const likesElement = postElement.querySelector('.likes');
    let likesCount = parseInt(likesElement.textContent.split(' ')[0]);
    likesCount++;
    likesElement.textContent = `${likesCount} likes`;
  }
}
document.addEventListener('click', function(event) {
  if (event.target.id === 'like') {
    likePost(event);
  }
});

function commentPost(event) {
  const postElement = event.target.closest('.post');
  if (postElement) {
    const commentElement = postElement.querySelector('.comment');
    const username = postElement.querySelector('.username').textContent;
    const newComment = prompt("Enter your comment:");
    if (newComment) {
      commentElement.innerHTML += `<br><span class="username">${username}</span> ${newComment}`;
    }
  }
}
document.addEventListener('click', function(event) {
  if (event.target.id === 'comment') {
    commentPost(event);
  }
});

function sharePost(event) {
  const postElement = event.target.closest('.post');
  if (postElement) {
    console.log("Post shared!");
  }
}
document.addEventListener('click', function(event) {
  if (event.target.id === 'share') {
    sharePost(event);
  }
});