const fs = require("fs");

// Function to write data to a file
function writeDataToFile(filename, data) {
  // Write the data to the specified file in JSON format
  fs.writeFile(filename, JSON.stringify(data), "utf8", (err) => {
    // If an error occurs during the writing process, log it
    if (err) {
      console.error(err);
    }
  });
}

function getReqData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";

      // Listen for incoming data chunks and concatenate them
      req.on("data", (data) => {
        body += data.toString();
      });

      // When all data has been received, resolve the promise with the body
      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      // If an error occurs during the process, reject the promise
      reject(error);
    }
  });
}

// Export the function to be used in other modules
module.exports = { writeDataToFile, getReqData };
