document.addEventListener('DOMContentLoaded', function () {
    const createRoomButton = document.getElementById('create-room');
    const roomList = document.getElementById('room-list');

    // Function to join a room
    function joinRoom() {
        const roomTitle = this.dataset.roomTitle;
        alert('Joining room: ' + roomTitle);
        // Add your logic to join the room based on the roomTitle
        // For example, you can redirect to a specific room page or perform other actions.
    }

    createRoomButton.addEventListener('click', function () {
        const interestInput = document.getElementById('interest');
        const durationInput = document.getElementById('duration');

        const interest = interestInput.value;
        const duration = durationInput.value;

        if (interest && duration) {
            // Create a new room item
            const roomItem = document.createElement('div');
            roomItem.classList.add('room-item');

            const roomTitle = 'Room Title'; // You can generate a unique title here

            roomItem.innerHTML = `
                <h2>${roomTitle}</h2>
                <p>Interest: ${interest} | Duration: ${duration}</p>
                <button class="join-room" data-room-title="${roomTitle}">Join Room</button>
            `;

            // Add an event listener to the "Join Room" button
            const joinRoomButton = roomItem.querySelector('.join-room');
            joinRoomButton.addEventListener('click', joinRoom);

            // Add the new room item to the room list
            roomList.appendChild(roomItem);

            // Clear the input fields
            interestInput.value = '';
            durationInput.value = '';
        } else {
            alert('Please enter both interest and duration.');
        }
    });
});
