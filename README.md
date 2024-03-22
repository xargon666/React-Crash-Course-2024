# React Typescript CRUD App

Though I am familiar with React, the library is constantly being updated so I find it valuable to work through recent tutorials to learn new techniques to adopt. In fact, with the upcoming React 19 this year, there will be significant changes yet again.

I followed Travery Media's excellent (and free) [React Crash Course 2024](https://www.youtube.com/watch?v=LDB4uaJ87e0) to build this project. 

I also wanted to use the project to practice using a few more bits of tech so I've made some changes, including Typescript, uuid and Axios. 

It has also been good practice for learning Vim which I have tried to use as much as possible, though the copy/paste comamnds still drive me crazy. 

I've also crammed in comments, to give me some idea of how this works should I return to it in the future.

## Installing and launching Dev Environment
1. Clone this repo
2. From the project directory, run the following terminal commands:

```
npm i
npm run dev
```

3. In another terminal, run the following command:
```
npm run json-server
```

4. Now having launched both the front and backend, navigate to `localhost:3000` in your browser.

### REST Endpoints


- The jobs listing page can be accessed here: `localhost/3000/jobs`
- Jobs can be looked up by ID e.g. `localhost/3000/jobs/1`
- The add job page can be accessed here: `localhost/3000/add-job`
- The edit job page can be accessed here: `localhost/3000/edit-job`
- You can view the JSON server data by navigating to the server address or the proxy address:
  - `localhost3000/api/jobs`
  - `localhost/5000/jobs`

> *Note: Browsers will automatically redirect http to https, so I haven't included direct links!*

## Afterthoughts

I learned a fair few things from doing this project: 
- Building a proxy into the Vite config seems like a more RESTful approach that relying on environment variables alone.
- There were a few things I hadn't tried until now, and they make the project look and feel much more professional:
  - I hadn't used tailwind much before but I can certainly see the merit of it here.
  - I'd never built loading screens with react-spinner components before! 
  - I'd never tried the toasts either.

## Technology Used

This project was creating using the following: 
- Vite React with Typescript template
- React router
- React icons
- React spinners
- React toastify
- Tailwind
- json-server
- Axios
- uuid
