// Xử lý tìm kiếm bài viết
function searchArticles() {
    let keyword = document.getElementById("search-input").value.toLowerCase();
    let articles = document.querySelectorAll(".article h3");

    articles.forEach(article => {
        let title = article.textContent.toLowerCase();
        let parent = article.parentElement;
        if (title.includes(keyword)) {
            parent.style.display = "block";
        } else {
            parent.style.display = "none";
        }
    });
}

// Xử lý đăng ký email
function subscribe() {
    let email = document.getElementById("email").value;
    if (email.includes("@")) {
        alert("Cảm ơn bạn đã đăng ký!");
    } else {
        alert("Vui lòng nhập email hợp lệ!");
    }
}
