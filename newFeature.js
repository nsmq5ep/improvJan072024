// Local JSON data
var localJSON = null;

// Function to read the remote JSON file
function readRemoteJSON() {
    // Replace this with actual code to read from the remote JSON
    // For example, you could use fetch() if you're running this in a browser
    // Make sure the server hosting the JSON file allows cross-origin requests
    fetch('https://api.jsonstorage.net/v1/json/86d2965f-cae1-43a2-8f49-cb2da6a5527f/e430f896-84a1-4ddb-a1f8-bedcfb5c1561')
        .then(response => response.json())
        .then(data => localJSON = data)
        .catch(error => console.error('Error reading remote JSON:', error));
}

// Call readRemoteJSON() when the script is loaded
readRemoteJSON();

// Function to read the local JSON file
function readLocalJSON() {
    // Replace this with actual code to read from storage or file system
    return localJSON;
}

// Function to check if a title is present in the local JSON
function isTitlePresentInLocalJSON(title) {
    try {
        const localData = readLocalJSON();
        if (localData && localData.bin) {
            // Check if the title is one of the values in the bin object
            return Object.values(localData.bin).includes(title);
        }
    } catch (error) {
        console.error('Error reading local JSON:', error);
    }
    return false;
}


function updateLocalJSONWithNewTitle(newTitle) {
    const jsonSize = 30;
    try {
        const localData = readLocalJSON();
        if (localData && localData.bin) {
            // Shift the existing titles
            for (let i = jsonSize; i > 1; i--) {
                const currentKey = "key" + i;
                const previousKey = "key" + (i - 1);
                localData.bin[currentKey] = localData.bin[previousKey];
            }

            // Add the new title to the first position
            localData.bin.key1 = newTitle;

            // Write the updated local JSON
            writeLocalJSON(localData);

            // Uncomment the following line to update the remote JSON
             writeRemoteJSON(localData);

            // Log the updated local JSON
            console.log('Updated Local JSON:', localData);
        }
    } catch (error) {
        console.error('Error updating local JSON:', error);
    }
}

// Function to write the local JSON
function writeLocalJSON(data) {
    try {
        // Replace this with actual code to write to storage or file system
        localJSON = data;
    } catch (error) {
        console.error('Error writing local JSON:', error);
    }
}

//Function to write the remote JSON
function writeRemoteJSON(data) {
    try {
        // Replace this with actual code to write to the remote JSON
        const apiKey = '4d240d29-fad5-4651-addf-68ca76fa5ba8';
        $.ajax({
            url: 'https://api.jsonstorage.net/v1/json/86d2965f-cae1-43a2-8f49-cb2da6a5527f/e430f896-84a1-4ddb-a1f8-bedcfb5c1561?apiKey=' + apiKey,
            type: 'PUT',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (result) {
                console.log('%c%s', 'color: #00a3cc', result);
            },
            error: function (error) {
                console.log('Error updating remote JSON:', error);
            }
        });
    } catch (error) {
        console.error('Error writing remote JSON:', error);
    }
}

// Example usage in the newFeature.js
function checkIfTitlePresent(title) {
    try {
        // If localJSON is null, read from the remote JSON
        if (localJSON === null) {
            readRemoteJSON();
        }

        let isPresent = isTitlePresentInLocalJSON(title);
        if (isPresent) {
            console.log("Title already present");
        } else {
            console.log("Title not present");
            // Update the local JSON with the new title
            updateLocalJSONWithNewTitle(title);
        }
        return isPresent;
    } catch (error) {
        console.error('Error checking title presence:', error);
    }
}


// Export functions for testing
window.isTitlePresentInLocalJSON = isTitlePresentInLocalJSON;
window.updateLocalJSONWithNewTitle = updateLocalJSONWithNewTitle;
window.checkIfTitlePresent = checkIfTitlePresent;
