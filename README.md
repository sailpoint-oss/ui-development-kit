<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Discourse Topics][discourse-shield]][discourse-url]
![Times Downloaded][downloads-shield]
![Issues][issues-shield]
![Latest Releases][release-shield]
![Contributor Shield][contributor-shield]


<!-- [discourse-shield]: https://img.shields.io/discourse/topics?label=Discuss%20This%20Tool&server=https%3A%2F%2Fdeveloper.sailpoint.com%2Fdiscuss -->
[discourse-shield]: https://img.shields.io/badge/Discuss_This_Tool-0033a1
[discourse-url]: https://developer.sailpoint.com/discuss/tag/idn-admin-console
[downloads-shield]: https://img.shields.io/github/downloads/sailpoint-oss/idn-admin-console/total?label=Downloads
[issues-shield]:https://img.shields.io/github/issues/sailpoint-oss/idn-admin-console?label=Issues
[release-shield]: https://img.shields.io/github/v/tag/sailpoint-oss/idn-admin-console?label=Current%20Release
[contributor-shield]:https://img.shields.io/github/contributors/sailpoint-oss/idn-admin-console?label=Contributors

[product-screenshot]: ./assets/images/idn-admin-console-output.png

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://avatars.githubusercontent.com/u/63106368?s=200&v=4" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">IdentityNow Admin Console - README</h3>

  <p align="center">
    A desktop application to administer and troubleshoot IdentityNow
    <br />
    <a href="https://github.com/sailpoint-oss/idn-admin-console/issues/new?assignees=&labels=bug&projects=&template=bug-report.md&title=%5BBUG%5D+Your+Bug+Report+Here">Report Bug</a>
    ·
    <a href="https://github.com/sailpoint-oss/idn-admin-console/issues/new?assignees=&labels=enhancement&projects=&template=feature-request.md&title=%5BFEATURE%5D+Your+Feature+Request+Here+">Request Feature</a>
  </p>
</div>

- [About the project](#about-the-project)
- [Project Structure](#project-structure)
  - [Sveltekit App](#sveltekit-app)
  - [Sveltekit Build](#sveltekit-build)
  - [Electron App](#electron-app)
- [Contribute](#contribute)
- [License](#license)
- [Discuss](#discuss)


<!-- ABOUT THE PROJECT -->
## About the project

<!-- <div align="center">
<img src="./assets/images/idn-admin-console-output.png" width="500" height="" style="text-align:center">
</div> -->

This Electron IdentityNow starter is a template for a desktop application you can use build out GUI applications that integrate with IdentityNow.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Project Structure

The current implementation of this app has three main folders:
- `Sveltekit-App`
- `Sveltekit-Build`
- `Electron-App`

The purpose of each of these folders is to hold a different portion of the total app, or rather different stages of the application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Sveltekit-App

The `Sveltekit-App` folder contains the main content of the application, this is where you will likely be doing 90% of your development. 

SvelteKit is a framework that allows easy development of applications utilizing both frontend and backend components and modern security standards, and when you are ready to build it allows you to compile your code into numerous different deployment methods using different adapters (static html, node server, edge or lambda functions).   
[SvelteKit can be explored more here](https://kit.svelte.dev).

If you use this starter to build on top of, you will get a number of things implemented right out of the box:  

- an OAuth Flow
- the SailPoint SDK
- a Desktop build of your app
- TypeScript
- SvelteKit
- TailwindCSS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Sveltekit-Build

When you are ready to build your application, running the build command in the `Sveltekit-App` folder, will build the application using the node adapter for SvelteKit, and the build will be placed in the folder `Sveltekit-Build/src` 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Electron-App

The `Electron-App` folder contains the code relevant to the electron portion of the application, this is where you determine the window theme, size, shape, and behavior as well as the startup logic for the application.

Currently when running the electron application, the `handler` that is generated from the sveltekit build is imported and passed to an express server that runs the application, an electron window is then opened pointing at that local express server, so once the app is running you can even open the app directly in a web browser if you prefer.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Build the application from source

Prerequisites:
* To build the application from source you will need NPM installed. You can find instructions on how to install NPM [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Once you have NPM installed, you can clone this repository and run the following commands in the specified order and folders:

Go to the folder: `./Sveltekit-App`
First, run this command:
```bash
npm install
```

Then run this command:
```bash
npm run build
```

Next, go to the folder: `./Electron-App`
First, run this command: 
```bash
npm install
```

Then, run this command:
```bash
npm run build
```

As long as there are no errors during the build process, the built application binaries will then be located in the `./Electron-App/out` folder.


<!-- CONTRIBUTING -->
## Contribute

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion to improve this project, please fork the repo and create a pull request. You can also make a suggestion by opening an issue with the tag `enhancement`.
Don't forget to give the project a star! Thanks again!

Follow these steps to make contributions:

1. Fork the project.
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Discuss
You can go to the [SailPoint Developer Community Forum](https://developer.sailpoint.com/discuss/tag/idn-admin-console) to discuss this tool with other users! 

<p align="right">(<a href="#readme-top">back to top</a>)</p>
