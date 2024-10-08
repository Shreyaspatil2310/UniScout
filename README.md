# UniScout 👨‍🏫

The web application, built using ReactJS, is designed to assist students in making informed decisions regarding their undergraduate studies. It provides a platform for students to explore and choose the right stream/branch that aligns with their interests and career aspirations. Additionally, the app leverages real and honest insights from current college students to help students choose the right and convenient college based on their specific needs and preferences. This app serves as a valuable resource for students looking to make the most of their undergraduate education and embark on a successful career path.


<hr>

## Table of Contents
- [About **Councellor** 🧑‍🎓](https://github.com/Counselllor/Counsellor-Web#counsellor-)
- [Features 🎊](https://github.com/Counselllor/Counsellor-Web#features)
- [Technologies Used 🧑‍💻](https://github.com/Counselllor/Counsellor-Web#technologies-used-)
- [Installation Guide 👩‍💻⚙️](https://github.com/Counselllor/Counsellor-Web#installation)
- [How to use? 👤](https://github.com/Counselllor/Counsellor-Web#usage)
- [View our site live! 🤩🤩](https://github.com/Counselllor/Counsellor-Web#demo---live-site)
- [View Contributing Guidelines 📜](https://github.com/Counselllor/Counsellor-Web#contributing-)
- [Licenses 🗞️🗞️](https://github.com/Counselllor/Counsellor-Web#license-)
- [Let's Connect 🔗](https://github.com/Counselllor/Counsellor-Web#connect-with-us-%EF%B8%8F)
- [Contact Project Admin 📞](https://github.com/Counselllor/Counsellor-Web#contact-)
- [Our Valuable Contributors 🌟🌟](https://github.com/Counselllor/Counsellor-Web#contributors)

## Features

-  User registration and login system
-  Anonymously connect users with trained counsellors
-  Real-time messaging between users and counsellors
-  Secure and private communication using encryption
-  User-friendly interface for easy navigation
-  User profile customization options
-  Easy access to previous chat history

<hr>

## Technologies Used 👩‍💻

 <p><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60"/> </a>   <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
	<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60"/> </a>   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/> </a>   <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60"/> </a>    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="60" height="60"/> </a>   <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="60" height="60"/> </a>    <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60"/> </a>
</p>

-  **Frontend:** HTML, CSS, JavaScript
-  **Backend:** Node.js, Express.js,Firebase 
-  **Database:** MongoDB
-  **Real-time Messaging:** Socket.IO
-  **Encryption:** bcrypt, crypto

<hr>

## Installation

### With Docker
1. Clone this repository to your local machine using:

   ```
   git clone https://github.com/thestarsahil/Counsellor.git
   ```

2. Navigate to the project directory:

   ```
   cd Counsellor
   ```

3. Build the docker image

   ```
   docker build -t counsellor-web .
   ```

4. Run the docker image

   ```
   docker run -p 5173:5173 counsellor-web
   ```


### Without Docker
To run Counsellor locally, follow these steps:

1. Clone this repository to your local machine using:

   ```
   git clone https://github.com/thestarsahil/Counsellor.git
   ```

2. Navigate to the project directory:

   ```
   cd Counsellor
   ```

3. Install the required dependencies using npm:

   ```
   npm install
   ```

4. Configure Firebase: Create an account on firebase [https://console.firebase.google.com/](https://console.firebase.google.com/) and craete a project in it.

    - **Useful Resource:** [A ChatGPT chat for configuring firebase.](https://chat.openai.com/share/4f1645a4-b6a0-40d0-b42b-9263236824f0)
 

5. Create **.env file** and add all the firebase environment variables listed in **.env.example**  file with valid values.

6. Start the server:

   ```
   npm run dev
   ```

7. Open your web browser and visit `http://localhost:5173` to access the Counsellor application.

<hr>

## Usage

Once the application is running, users can register or log in to their accounts. After logging in, they can choose to start a chat with a counsellor. The chat interface allows real-time messaging between the user and the assigned counsellor. Users can customize their profile and view their chat history.

<hr>

## Demo -> [Live site](https://counsellor-startup.netlify.app/)



![8](https://github.com/Counselllor/Counsellor-Web/assets/84167034/5af1c0ec-1cfe-4fc4-a0b1-78f1b147705d)
![9](https://github.com/Counselllor/Counsellor-Web/assets/84167034/18fa9adc-84d8-45e9-be7a-1db8f288bd57)
![10](https://github.com/Counselllor/Counsellor-Web/assets/84167034/a7cb258c-d1c0-4ddd-858f-760313edc2a7)
![11](https://github.com/Counselllor/Counsellor-Web/assets/84167034/c0f96ef1-84e3-44a3-82e8-1df100ee30fa)



![5](https://user-images.githubusercontent.com/84167034/218539171-2469465b-d840-4c10-99e9-df3af37c49d4.png)
![13](https://github.com/Counselllor/Counsellor-Web/assets/84167034/de11c594-ac0b-46e6-baa2-d1f9d80ebdf2)


![6](https://user-images.githubusercontent.com/84167034/218539183-e6cffd7d-08bc-45e9-a042-e7025172df8e.png)
![15](https://github.com/Counselllor/Counsellor-Web/assets/84167034/22cb6ecd-9bb9-4e3d-a42b-d0acfef7f1b9)


![7](https://user-images.githubusercontent.com/84167034/218539211-7e425cb0-5bec-41b9-bee3-c419469f7828.png)
![17](https://github.com/Counselllor/Counsellor-Web/assets/84167034/2a480bcd-bf26-4a8c-b83b-6542674bfd9f)


![18](https://github.com/Counselllor/Counsellor-Web/assets/84167034/8f61f99e-586a-4811-b7b0-b66d4b884569)
![19](https://github.com/Counselllor/Counsellor-Web/assets/84167034/dfd02c13-7e8c-4f6b-8082-09264312bfe4)

![20](https://github.com/Counselllor/Counsellor-Web/assets/84167034/1cc0af59-b3c2-4307-a1bc-636004ecb23b)
![21](https://github.com/Counselllor/Counsellor-Web/assets/84167034/ffec5f50-c87d-4812-b7cb-5e0b02d09115)









