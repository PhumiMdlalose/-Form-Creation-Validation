document.addEventListener("DOMContentLoaded", function () {

    async function fetchUserData() {
        try {
            const apiUrl = 'https://jsonplaceholder.typicode.com/users';
            const dataContainer = document.getElementById("api-data");

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const users = await response.json();
            dataContainer.innerHTML = "";

            // create and append user list
            const userList = document.createElement("ul");
            users.forEach(user => {
                const listItem = document.createElement("li");
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);

        } catch (error) {
            const dataContainer = document.getElementById("api-data");
            dataContainer.innerHTML = `Failed to fetch data: ${error.message}`;
        }
    }

    fetchUserData();
});

        
    
