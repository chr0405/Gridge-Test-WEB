// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage"; // 파일 업로드, 다운로드, 파일 삭제, 권한 관리에 사용되는 저장소

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzjAJffq9DgyPHFLMHczAdMEe9eGeo39Q",
  authDomain: "gridgetest-2a0c6.firebaseapp.com",
  projectId: "gridgetest-2a0c6",
  storageBucket: "gridgetest-2a0c6.appspot.com",
  messagingSenderId: "909200438729",
  appId: "1:909200438729:web:a750e4fd8e4de71153a418",
  measurementId: "G-QQ66JRJ1V3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);

//////////
// // Track user actions
// function trackButtonClick() {
//     // Log a custom event
//     analytics.logEvent('button_click', {
//       button_id: 'submit_button',
//       page_location: window.location.pathname
//     });
    
//     // You can also use predefined events
//     analytics.logEvent('login', {
//       method: 'email',
//       sign_up: 'true'
//     });
//   }
  
//   // Attach event listener to a button
//   const submitButton = document.getElementById('submit_button');
//   submitButton.addEventListener('click', trackButtonClick);

//////////
// import { getStorage, ref, uploadString } from "firebase/storage";

// // 이미지 업로드 예제
// const storage = getStorage(app);
// const storageRef = ref(storage, 'images/profile.jpg');
// const file = ... // 업로드할 파일
// uploadString(storageRef, file)
//   .then((snapshot) => {
//     console.log('Uploaded a string!');
//   })
//   .catch((error) => {
//     console.error('Error uploading file:', error);
//   });