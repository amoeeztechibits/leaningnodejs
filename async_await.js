// Example 1
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 2000); 
});


async function asyncFunc() {

    
    let result = await promise; 

    console.log("Function 1: "+result);
    console.log('Function 1: hello');
}
asyncFunc();


// Example 2

const fs = require('fs').promises;

async function readFilesSequentially(filePaths) {
  try {
    for (const filePath of filePaths) {
      const data = await fs.readFile(filePath, 'utf8');
      console.log(`Contents of ${filePath}:`, data);
    }
  } catch (error) {
    console.error('Error reading files:', error);
  }
}

readFilesSequentially(['content1.txt','dummy.txt']);


// Example 3
const axios = require('axios');

async function getUserDetails(userId) {
    try {
      const userData = await fetchUserData(userId);
      const userPosts = await fetchUserPosts(userId);
      return { userData, userPosts };
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  }
  
  async function fetchUserData(userId) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch user data');
    }
  }
  
  async function fetchUserPosts(userId) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch user posts');
    }
  }
  
  getUserDetails(1)
    .then(userDetails => console.log('User details:', userDetails))
    .catch(error => console.error('Error getting user details:', error));
  