document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentsSection = document.getElementById('comments');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;

        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${username}</strong><p>${comment}</p>`;

        commentsSection.appendChild(commentElement);

        // Clear form fields
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';
    });
});