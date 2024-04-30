document.addEventListener('DOMContentLoaded', () => {
    let currentUserImg = document.getElementById('currentUserImg');
    let divContainer = document.querySelector('.container');
    let loadData = () => {
        let request = new XMLHttpRequest();
        request.open('GET', 'data.json', true);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                let data = JSON.parse(request.responseText);
                currentUserImg.src = data.currentUser.image.png;
                let comments = data.comments;
                comments.forEach(comment => {
                    let commentContainer = document.createElement('div');
                    divContainer.appendChild(commentContainer);
                    commentContainer.classList.add('commentContainer');

                    let userImage = document.createElement('img');
                    userImage.setAttribute('src', comment.user.image.png);
                    userImage.classList.add('userImage');
                    commentContainer.appendChild(userImage);

                    let userName = document.createElement('span');
                    userName.textContent = comment.user.username;
                    commentContainer.appendChild(userName);
                    userName.classList.add('userName');

                    let time = document.createElement('small');
                    commentContainer.appendChild(time);
                    time.textContent = comment.createdAt;
                    time.classList.add('createdAt');

                    let commentText = document.createElement('p');
                    commentContainer.appendChild(commentText);
                    commentText.textContent = comment.content;
                    commentText.classList.add('commentText');

                    let markContainer = document.createElement('div');
                    markContainer.classList.add('markContainer');
                    commentContainer.appendChild(markContainer);

                    let reply = document.createElement('span');
                    reply.textContent = "Reply";
                    reply.classList.add('reply');

                    commentContainer.appendChild(reply);

                    // Create an SVG element for reply icon
                    const replyIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    replyIcon.classList.add('replyIcon')
                    // Set the width and height of the SVG element
                    replyIcon.setAttribute("width", "20");
                    replyIcon.setAttribute("height", "10");
                    // Create a path element
                    const replyPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    // Set the attributes of the path element
                    replyPath.setAttribute("d", "M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z");
                    replyPath.setAttribute("fill", "#5357B6");
                    // Add the path element to the SVG element
                    replyIcon.appendChild(replyPath);
                    // Add the SVG element to the HTML document
                    commentContainer.appendChild(replyIcon);

                    // ... (similarly for plus and minus icons)
                    const plusSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    plusSign.classList.add('plusSign')
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
                    markContainer.appendChild(plusSign);
                    let mark = document.createElement('span');
                    mark.textContent = comment.score;
                    mark.classList.add('mark');
                    markContainer.appendChild(mark);

                    const minusSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    // Set the width and height of the SVG element
                    minusSign.setAttribute("width", "11");
                    minusSign.setAttribute("height", "3");
                    minusSign.classList.add('minusSign')
                    // Create a path element
                    const minusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    // Set the attributes of the path element
                    minusPath.setAttribute("d", "M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z");
                    minusPath.setAttribute("fill", "#C5C6EF");
                    // Add the path element to the SVG element
                    minusSign.appendChild(minusPath);
                    // Add the SVG element to the HTML document
                    markContainer.appendChild(minusSign);


                    // let replies = data.comments[1];
                    comment.replies.forEach(reply => {
                        let currentUserName = data.currentUser.username;
                        if (reply.user.username === currentUserName) {
                            let replyContainer = document.createElement('div');
                            replyContainer.classList.add('replyContainer');
                            divContainer.appendChild(replyContainer);

                            let replyUserImage = document.createElement('img');
                            replyUserImage.setAttribute('src', data.currentUser.image.png);
                            replyUserImage.classList.add('userImage');
                            replyContainer.appendChild(replyUserImage);

                            let userName = document.createElement('span');
                            userName.textContent = data.currentUser.username;
                            userName.classList.add('userName');
                            replyContainer.appendChild(userName)

                            let createdAt = document.createElement('small');
                            createdAt.textContent = reply.createdAt;
                            createdAt.classList.add('createdAt');
                            replyContainer.appendChild(createdAt);

                            let replyTo = document.createElement('span');
                            replyTo.textContent = `@${reply.replyingTo}`;
                            replyTo.classList.add('replyingTo');



                            let replyText = document.createElement('p');
                            replyText.classList.add('commentText');
                            replyText.appendChild(replyTo);
                            replyText.textContent = `${replyTo.textContent} ${reply.content}`;
                            replyContainer.appendChild(replyText);


                            let youLabel = document.createElement('span');
                            youLabel.textContent = "You";
                            youLabel.classList.add('youLable');
                            replyContainer.appendChild(youLabel);
                            // Create an SVG element for delete icon 
                            const deleteSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            // Set the width and height of the SVG element
                            deleteSign.setAttribute("width", "12");
                            deleteSign.setAttribute("height", "14");
                            // Create a path element
                            const deletePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            // Set the attributes of the path element
                            deletePath.setAttribute("d", "M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z");
                            deletePath.setAttribute("fill", "#ED6368");
                            deleteSign.appendChild(deletePath);
                            deleteSign.classList.add('deleteSign')
                            replyContainer.appendChild(deleteSign);

                            let deleteOption = document.createElement('span');
                            deleteOption.textContent = "Delete";
                            deleteOption.classList.add('deleteOption');
                            deleteOption.appendChild(deleteSign);
                            replyContainer.appendChild(deleteOption);

                            const modalPopUp = () => {
                                let modal = document.createElement('div');
                                modal.classList.add('modal');
                                divContainer.appendChild(modal);
                                let modalOverlay = document.createElement('div');
                                modalOverlay.classList.add('modal-overlay');
                                divContainer.appendChild(modalOverlay)
                                let title = document.createElement('h3')
                                title.textContent = "Delete Comment";
                                title.classList.add('modalTitle');
                                modal.appendChild(title);
                                let modalText = document.createElement('p');
                                modalText.textContent = "Are you sure that you want to delete this comment? This comment will be deleted and cannot be undone!";
                                modalText.classList.add('modalText')
                                modal.appendChild(modalText)
                                let cancelBtn = document.createElement('button');
                                cancelBtn.classList.add('cancel');
                                cancelBtn.textContent = "No, Cancel"
                                modal.appendChild(cancelBtn);
                                let confirmBtn = document.createElement('button');
                                confirmBtn.classList.add('confirm');
                                confirmBtn.textContent = "Yes, Delete"
                                modal.appendChild(confirmBtn);
                                confirmBtn.addEventListener('click', () => {
                                    divContainer.removeChild(replyContainer);
                                    divContainer.removeChild(modal)
                                    divContainer.removeChild(modalOverlay)
                                })
                                cancelBtn.addEventListener('click', () => {
                                    divContainer.removeChild(modal)
                                    divContainer.removeChild(modalOverlay)
                                })

                            }
                            deleteOption.addEventListener('click', modalPopUp)

                            const editSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            // Set the width and height of the SVG element
                            editSign.setAttribute("width", "12");
                            editSign.setAttribute("height", "14");
                            // Create a path element
                            const editPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            // Set the attributes of the path element
                            editPath.setAttribute("d", "M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z");
                            editPath.setAttribute("fill", "#5357B6");
                            editSign.appendChild(editPath);
                            editSign.classList.add('editSign')


                            let editOption = document.createElement('span');
                            editOption.textContent = "Edit";
                            editOption.classList.add('EditOption');
                            editOption.appendChild(editSign)
                            replyContainer.appendChild(editOption);

                            editOption.addEventListener('click', (event) => {
                                editOption = event.target;
                                replyContainer.removeChild(replyText);
                                let textarea = document.createElement('textarea');
                                textarea.textContent = replyText.textContent;
                                textarea.classList.add('textarea')
                                replyContainer.appendChild(textarea)
                                replyContainer.style.height = "200px";
                                let updateBtn = document.createElement('button');
                                updateBtn.textContent = "Update";
                                updateBtn.classList.add('updateBtn');
                                replyContainer.appendChild(updateBtn);

                                updateBtn.addEventListener('click', (event) => {
                                    updateBtn = event.target;
                                    replyContainer.removeChild(textarea);
                                    replyContainer.appendChild(replyText);
                                    replyText.textContent = textarea.value;
                                    replyContainer.removeChild(updateBtn);
                                })
                            })

                            let markContainer = document.createElement('div');
                            markContainer.classList.add('markContainer');
                            replyContainer.appendChild(markContainer);
                            // Create an SVG element for plus icon
                            const plusSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            plusSign.classList.add('plusSign')
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
                            markContainer.appendChild(plusSign);
                            let mark = document.createElement('span');
                            mark.textContent = reply.score;
                            mark.classList.add('mark');
                            markContainer.appendChild(mark);

                            const minusSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            // Set the width and height of the SVG element
                            minusSign.setAttribute("width", "11");
                            minusSign.setAttribute("height", "3");
                            minusSign.classList.add('minusSign')
                            // Create a path element
                            const minusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            // Set the attributes of the path element
                            minusPath.setAttribute("d", "M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z");
                            minusPath.setAttribute("fill", "#C5C6EF");
                            // Add the path element to the SVG element
                            minusSign.appendChild(minusPath);
                            // Add the SVG element to the HTML document
                            markContainer.appendChild(minusSign);



                        }
                        else {
                            let replyContainer = document.createElement('div');
                            replyContainer.classList.add('replyContainer');
                            divContainer.appendChild(replyContainer);

                            let replyUserImage = document.createElement('img');
                            replyUserImage.setAttribute('src', reply.user.image.png);
                            replyUserImage.classList.add('userImage');
                            replyContainer.appendChild(replyUserImage);

                            let userName = document.createElement('span');
                            userName.textContent = reply.user.username;
                            userName.classList.add('userName');
                            replyContainer.appendChild(userName)

                            let createdAt = document.createElement('small');
                            createdAt.textContent = reply.createdAt;
                            createdAt.classList.add('createdAt');
                            replyContainer.appendChild(createdAt);

                            let replyTo = document.createElement('span');
                            replyTo.textContent = `@${reply.replyingTo}`;
                            replyTo.classList.add('replyingTo');



                            let replyText = document.createElement('p');
                            replyText.classList.add('commentText');
                            replyText.appendChild(replyTo);
                            replyText.textContent = `${replyTo.textContent} ${reply.content}`;
                            replyContainer.appendChild(replyText);



                            let replyOption = document.createElement('span');
                            replyOption.classList.add('reply');
                            replyOption.textContent = "Reply";
                            replyContainer.appendChild(replyOption);

                            // Create an SVG element for reply icon
                            const replyIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            // Set the width and height of the SVG element
                            replyIcon.setAttribute("width", "11");
                            replyIcon.setAttribute("height", "3");
                            // Create a path element
                            const replyPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            // Set the attributes of the path element
                            replyPath.setAttribute("d", "M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z");
                            replyPath.setAttribute("fill", "#5357B6");
                            replyIcon.classList.add('replyIconRep');
                            // Add the path element to the SVG element
                            replyIcon.appendChild(replyPath);
                            // Add the SVG element to the HTML document
                            replyContainer.appendChild(replyIcon);
                            let replyMarkContainer = document.createElement('div');
                            replyMarkContainer.classList.add('replyMarkContainer');
                            replyContainer.appendChild(replyMarkContainer);
                            // Create an SVG element for plus icon
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
                            plusSign.classList.add('plusSign')
                            replyMarkContainer.appendChild(plusSign);

                            let mark = document.createElement('span');
                            mark.textContent = reply.score;
                            mark.classList.add('mark');
                            replyMarkContainer.appendChild(mark);

                            // Create an SVG element for minus icon 
                            const minusSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            // Set the width and height of the SVG element
                            minusSign.setAttribute("width", "11");
                            minusSign.setAttribute("height", "3");
                            // Create a path element
                            const minusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            // Set the attributes of the path element
                            minusPath.setAttribute("d", "M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z");
                            minusPath.setAttribute("fill", "#C5C6EF");
                            minusSign.appendChild(minusPath);
                            minusSign.classList.add('minusSign');
                            replyMarkContainer.appendChild(minusSign);




                        }



                    })
                })

                const addReply = (event) => {
                    let replyButton = event.target;

                    let commentContainer = replyButton.closest('.commentContainer');
                    let replyContainer = replyButton.closest('.replyContainer');
                    let commentDiv = document.querySelector('.commentContainer')
                    let replyDiv = document.querySelector('.replyContainer')

                    // Check if the newReplyContainer already exists
                    let existingReplyContainer = commentDiv.querySelector('.newReplyContainer');
                    let existingReplyContainer2 = replyDiv.querySelector('.newReplyContainer');

                    if (!existingReplyContainer || !existingReplyContainer2) {
                        let newReplyContainer = document.createElement('div');
                        newReplyContainer.classList.add('newReplyContainer'); // Add a class for easier identification

                        let userImage = document.createElement('img');
                        userImage.setAttribute('src', data.currentUser.image.webp);
                        newReplyContainer.appendChild(userImage);

                        let newReply = document.createElement('textarea');
                        newReply.classList.add('textarea')
                        newReplyContainer.appendChild(newReply);

                        let replyBtn = document.createElement('button');
                        replyBtn.classList.add('repBtninNewReply')
                        replyBtn.textContent = 'Reply'; // Set the button text
                        newReplyContainer.appendChild(replyBtn);
                        if (commentContainer) {
                            // Insert newReplyContainer after the commentContainer
                            commentContainer.insertAdjacentElement('afterend', newReplyContainer);
                        } else if (replyContainer) {
                            // Insert newReplyContainer after the replyContainer
                            replyContainer.insertAdjacentElement('afterend', newReplyContainer);
                        }

                        // Add event listener to the reply button within the newReplyContainer
                        replyBtn.addEventListener('click', () => {
                            userImage.classList.add('updateUserImage');
                            let removeButton = document.querySelector('.repBtninNewReply');
                            let removeTextarea = document.querySelector('.textarea');
                            let newReplyContainer = document.querySelector('.newReplyContainer');

                            newReplyContainer.removeChild(removeButton);
                            newReplyContainer.removeChild(removeTextarea);

                            let username = document.createElement('p');
                            username.textContent = data.currentUser.username;
                            username.classList.add('userName');
                            newReplyContainer.appendChild(username);

                            let replyContent = document.createElement('p');
                            replyContent.textContent = removeTextarea.value;
                            replyContent.classList.add('commentText')
                            newReplyContainer.appendChild(replyContent);


                            let youLabel = document.createElement('span');
                            youLabel.textContent = "You";
                            youLabel.classList.add('youLable');
                            newReplyContainer.appendChild(youLabel);
                            // Create an SVG element for delete icon 
                            const deleteSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            // Set the width and height of the SVG element
                            deleteSign.setAttribute("width", "12");
                            deleteSign.setAttribute("height", "14");
                            // Create a path element
                            const deletePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            // Set the attributes of the path element
                            deletePath.setAttribute("d", "M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z");
                            deletePath.setAttribute("fill", "#ED6368");
                            deleteSign.appendChild(deletePath);
                            deleteSign.classList.add('deleteSign')
                            newReplyContainer.appendChild(deleteSign);

                            let deleteOption = document.createElement('span');
                            deleteOption.textContent = "Delete";
                            deleteOption.classList.add('deleteOption');
                            deleteOption.appendChild(deleteSign);
                            newReplyContainer.appendChild(deleteOption);


                            const modalPopUp = () => {
                                let modal = document.createElement('div');
                                modal.classList.add('modal');
                                divContainer.appendChild(modal);
                                let modalOverlay = document.createElement('div');
                                modalOverlay.classList.add('modal-overlay');
                                divContainer.appendChild(modalOverlay)
                                let title = document.createElement('h3')
                                title.textContent = "Delete Comment";
                                title.classList.add('modalTitle');
                                modal.appendChild(title);
                                let modalText = document.createElement('p');
                                modalText.textContent = "Are you sure that you want to delete this comment? This comment will be deleted and cannot be undone!";
                                modalText.classList.add('modalText')
                                modal.appendChild(modalText)
                                let cancelBtn = document.createElement('button');
                                cancelBtn.classList.add('cancel');
                                cancelBtn.textContent = "No, Cancel"
                                modal.appendChild(cancelBtn);
                                let confirmBtn = document.createElement('button');
                                confirmBtn.classList.add('confirm');
                                confirmBtn.textContent = "Yes, Delete"
                                modal.appendChild(confirmBtn);
                                confirmBtn.addEventListener('click', () => {
                                    divContainer.removeChild(newReplyContainer);
                                    divContainer.removeChild(modal)
                                    divContainer.removeChild(modalOverlay)
                                })
                                cancelBtn.addEventListener('click', () => {
                                    divContainer.removeChild(modal)
                                    divContainer.removeChild(modalOverlay)
                                })

                            }
                            deleteOption.addEventListener('click', modalPopUp)
                            const editSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            // Set the width and height of the SVG element
                            editSign.setAttribute("width", "12");
                            editSign.setAttribute("height", "14");
                            // Create a path element
                            const editPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            // Set the attributes of the path element
                            editPath.setAttribute("d", "M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z");
                            editPath.setAttribute("fill", "#5357B6");
                            editSign.appendChild(editPath);
                            editSign.classList.add('editSign')


                            let editOption = document.createElement('span');
                            editOption.textContent = "Edit";
                            editOption.classList.add('EditOption');
                            editOption.appendChild(editSign)
                            newReplyContainer.appendChild(editOption);

                            editOption.addEventListener('click', (event) => {
                                editOption = event.target;
                                newReplyContainer.removeChild(replyContent);
                                let textarea = document.createElement('textarea');
                                textarea.textContent = replyContent.textContent;
                                textarea.classList.add('textarea2')
                                newReplyContainer.appendChild(textarea)
                                newReplyContainer.style.height = "200px";
                                let updateBtn = document.createElement('button');
                                updateBtn.textContent = "Update";
                                updateBtn.classList.add('updateBtn');
                                newReplyContainer.appendChild(updateBtn);

                                updateBtn.addEventListener('click', (event) => {
                                    updateBtn = event.target;
                                    newReplyContainer.removeChild(textarea);
                                    newReplyContainer.appendChild(replyContent);
                                    replyContent.textContent = textarea.value;
                                    newReplyContainer.removeChild(updateBtn);


                                })

                            })


                            let markContainer = document.createElement('div');
                            markContainer.classList.add('markContainer');
                            newReplyContainer.appendChild(markContainer);
                            // Create an SVG element for plus icon
                            const plusSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            plusSign.classList.add('plusSign')
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
                            markContainer.appendChild(plusSign);
                            let mark = document.createElement('span');
                            mark.textContent = 0;
                            mark.classList.add('mark');
                            markContainer.appendChild(mark);

                            const minusSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            // Set the width and height of the SVG element
                            minusSign.setAttribute("width", "11");
                            minusSign.setAttribute("height", "3");
                            minusSign.classList.add('minusSign')
                            // Create a path element
                            const minusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            // Set the attributes of the path element
                            minusPath.setAttribute("d", "M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z");
                            minusPath.setAttribute("fill", "#C5C6EF");
                            // Add the path element to the SVG element
                            minusSign.appendChild(minusPath);
                            // Add the SVG element to the HTML document
                            markContainer.appendChild(minusSign);



                        });

                    }
                };

                let replyButtons = document.querySelectorAll('.reply');
                replyButtons.forEach(button => {
                    button.addEventListener('click', addReply);
                });

                let button = document.getElementById('send');
                let textarea = document.getElementById('commentArea')
                button.addEventListener('click', () => {
                    let commentContainer2 = document.createElement('div');
                    commentContainer2.classList.add('commentContainer');
                    divContainer.appendChild(commentContainer2);

                    let userImage = document.createElement('img');
                    userImage.setAttribute('src', data.currentUser.image.webp);
                    userImage.classList.add('userImage')
                    commentContainer2.appendChild(userImage);
                    let username = document.createElement('p');
                    username.textContent = data.currentUser.username;
                    username.classList.add('userName');
                    commentContainer2.appendChild(username);

                    let replyContent = document.createElement('p');
                    replyContent.textContent = textarea.value;
                    replyContent.classList.add('commentText')
                    commentContainer2.appendChild(replyContent);


                    let youLabel = document.createElement('span');
                    youLabel.textContent = "You";
                    youLabel.classList.add('youLable');
                    commentContainer2.appendChild(youLabel);
                    // Create an SVG element for delete icon 
                    const deleteSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    // Set the width and height of the SVG element
                    deleteSign.setAttribute("width", "12");
                    deleteSign.setAttribute("height", "14");
                    // Create a path element
                    const deletePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    // Set the attributes of the path element
                    deletePath.setAttribute("d", "M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z");
                    deletePath.setAttribute("fill", "#ED6368");
                    deleteSign.appendChild(deletePath);
                    deleteSign.classList.add('deleteSign')
                    commentContainer2.appendChild(deleteSign);

                    let deleteOption = document.createElement('span');
                    deleteOption.textContent = "Delete";
                    deleteOption.classList.add('deleteOption');
                    deleteOption.appendChild(deleteSign);
                    commentContainer2.appendChild(deleteOption);


                    const modalPopUp = () => {
                        let modal = document.createElement('div');
                        modal.classList.add('modal');
                        divContainer.appendChild(modal);
                        let modalOverlay = document.createElement('div');
                        modalOverlay.classList.add('modal-overlay');
                        divContainer.appendChild(modalOverlay)
                        let title = document.createElement('h3')
                        title.textContent = "Delete Comment";
                        title.classList.add('modalTitle');
                        modal.appendChild(title);
                        let modalText = document.createElement('p');
                        modalText.textContent = "Are you sure that you want to delete this comment? This comment will be deleted and cannot be undone!";
                        modalText.classList.add('modalText')
                        modal.appendChild(modalText)
                        let cancelBtn = document.createElement('button');
                        cancelBtn.classList.add('cancel');
                        cancelBtn.textContent = "No, Cancel"
                        modal.appendChild(cancelBtn);
                        let confirmBtn = document.createElement('button');
                        confirmBtn.classList.add('confirm');
                        confirmBtn.textContent = "Yes, Delete"
                        modal.appendChild(confirmBtn);
                        confirmBtn.addEventListener('click', () => {
                            divContainer.removeChild(commentContainer2);
                            divContainer.removeChild(modal)
                            divContainer.removeChild(modalOverlay)
                        })
                        cancelBtn.addEventListener('click', () => {
                            divContainer.removeChild(modal)
                            divContainer.removeChild(modalOverlay)
                        })

                    }
                    deleteOption.addEventListener('click', modalPopUp)


                    const editSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    // Set the width and height of the SVG element
                    editSign.setAttribute("width", "12");
                    editSign.setAttribute("height", "14");
                    // Create a path element
                    const editPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    // Set the attributes of the path element
                    editPath.setAttribute("d", "M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z");
                    editPath.setAttribute("fill", "#5357B6");
                    editSign.appendChild(editPath);
                    editSign.classList.add('editSign')


                    let editOption = document.createElement('span');
                    editOption.textContent = "Edit";
                    editOption.classList.add('EditOption');
                    editOption.appendChild(editSign)
                    commentContainer2.appendChild(editOption);


                    let markContainer = document.createElement('div');
                    markContainer.classList.add('markContainer');
                    commentContainer2.appendChild(markContainer);
                    // Create an SVG element for plus icon
                    const plusSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    plusSign.classList.add('plusSign')
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
                    markContainer.appendChild(plusSign);
                    let mark = document.createElement('span');
                    mark.textContent = 0;
                    mark.classList.add('mark');
                    markContainer.appendChild(mark);

                    const minusSign = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    // Set the width and height of the SVG element
                    minusSign.setAttribute("width", "11");
                    minusSign.setAttribute("height", "3");
                    minusSign.classList.add('minusSign')
                    // Create a path element
                    const minusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    // Set the attributes of the path element
                    minusPath.setAttribute("d", "M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z");
                    minusPath.setAttribute("fill", "#C5C6EF");
                    // Add the path element to the SVG element
                    minusSign.appendChild(minusPath);
                    // Add the SVG element to the HTML document
                    markContainer.appendChild(minusSign);
                    editOption.addEventListener('click', (event) => {
                        editOption = event.target;
                        commentContainer2.removeChild(replyContent);
                        let textarea = document.createElement('textarea');
                        textarea.textContent = replyContent.textContent;
                        textarea.classList.add('textarea2')
                        commentContainer2.appendChild(textarea)
                        commentContainer2.style.height = "200px";
                        let updateBtn = document.createElement('button');
                        updateBtn.textContent = "Update";
                        updateBtn.classList.add('updateBtn');
                        commentContainer2.appendChild(updateBtn);

                        updateBtn.addEventListener('click', (event) => {
                            updateBtn = event.target;
                            commentContainer2.removeChild(textarea);
                            commentContainer2.appendChild(replyContent);
                            replyContent.textContent = textarea.value;
                            commentContainer2.removeChild(updateBtn);


                        })


                    })
                })

            }

            else {
                console.error('Failed to load data');
            }



        }

        request.onerror = function () {
            console.error('There was a network error.');
        };
        request.send();

    };

    loadData();
});
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('plusSign')) {
            let currentMark = parseInt(event.target.nextElementSibling.textContent);
            event.target.nextElementSibling.textContent = currentMark + 1;
        } else if (event.target.classList.contains('minusSign')) {
            let currentMark = parseInt(event.target.previousElementSibling.textContent);
            event.target.previousElementSibling.textContent = currentMark - 1;
        }
    });
});