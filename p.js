document.addEventListener('DOMContentLoaded', () => {
    let currentUserImg = document.getElementById('currentUserImg');
    let divContainer = document.querySelector('.container');
    let loadData = () => {
        let request = new XMLHttpRequest();
        request.open('GET', 'data.json', true);
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                let data = JSON.parse(request.responseText);
                // Access the image URL correctly from the JSON data
                currentUserImg.src = data.currentUser.image.png;
                let comments = data.comments;
                 comments.forEach(comment => {
                    let commentContianer = document.createElement('div');
                    divContainer.appendChild(commentContianer);
                    commentContianer.classList.add('commentComtainer')
                    let userName = document.createElement('span');
                    commentContianer.appendChild(userName);
                    userName.textContent = data.comments.username;
                    userName.classList.add('userName');
                    let time = document.createElement('small');
                    commentContianer.appendChild(time);
                    time.textContent = data.comments.createdAt;
                    time.classList.add('createdAt');
                    let commentText = document.createElement('p');
                    commentContianer.appendChild(commentText);
                    commentText.textContent = data.comments.content;
                    commentText.classList.add('commentText');
                    let userImage = document.createElement('img');
                    userImage.setAttribute('src', "")
                    userImage.src = `${data.comments.user.image}.png`;
                    userImage.classList.add('userImage');
                    commentContianer.appendChild(userImage);
                    let markContianer = document.createElement('div');
                    markContianer.classList.add('markContianer');
                    commentContianer.appendChild(markContianer)
                    let reply = document.createElement('span');
                    reply.textContent = "Reply";
                    reply.classList.add('reply');
                    commentContianer.appendChild(reply);

                    // Create an SVG element
                    const replyIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    // Set the width and height of the SVG element
                    replyIcon.setAttribute("width", "11");
                    replyIcon.setAttribute("height", "3");
                    // Create a path element
                    const replyPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    // Set the attributes of the path element
                    replyPath.setAttribute("d", "M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z");
                    replyPath.setAttribute("fill", "#C5C6EF");
                    // Add the path element to the SVG element
                    replyIcon.appendChild(replyPath);
                    // Add the SVG element to the HTML document
                    markContianer.appendChild(replyIcon);

                    // Create an SVG element
                    const plusSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    // Set the width and height of the SVG element
                    plusSign.setAttribute("width", "11");
                    plusSign.setAttribute("height", "11");
                    // Create a path element
                    const plusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    // Set the attributes of the path element
                    plusPath.setAttribute("d", "M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z");
                    plusPath.setAttribute("fill", "#C5C6EF");
                    // Add the path element to the SVG element
                    plusSign.appendChild(plusPath);
                    // Add the SVG element to the HTML document
                    markContianer.appendChild(plusSign);

                    let mark = document.createElement('span');
                    mark.textContent = data.comments.score;
                    mark.classList.add('mark');
                    markContianer.appendChild(mark)

                    // Create an SVG element
                    const minusSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    // Set the width and height of the SVG element
                    minusSign.setAttribute("width", "11");
                    minusSign.setAttribute("height", "3");
                    // Create a path element
                    const minusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    // Set the attributes of the path element
                    minusPath.setAttribute("d", "M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z");
                    minusPath.setAttribute("fill", "#C5C6EF");
                    // Add the path element to the SVG element
                    minusSign.appendChild(minusPath);
                    // Add the SVG element to the HTML document
                    markContianer.appendChild(minusSign);
                });
            } else {
                console.error('Failed to load data');
            }
        };
        request.onerror = function () {
            console.error('There was a network error.');
        };
        request.send();
    };
    loadData().catch(error => console.error(error)); // Add a catch block to handle any errors
});
