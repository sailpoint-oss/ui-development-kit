<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

![Issues][issues-shield]
![Contributor Shield][contributor-shield]

[issues-shield]:https://img.shields.io/github/issues/sailpoint-oss/electron-identitynow-starter?label=Issues
[contributor-shield]:https://img.shields.io/github/contributors/sailpoint-oss/electron-identitynow-starter?label=Contributors
[product-screenshot]: ./assets/images/electron-identitynow-starter-output.png

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://avatars.githubusercontent.com/u/63106368?s=200&v=4" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">UI Development Kit - README</h3>

  <p align="center">
    A desktop application starter to build on IdentityNow
    <br />
    <a href="https://github.com/sailpoint-oss/electron-identitynow-starter/issues/new?assignees=&labels=bug&projects=&template=bug-report.md&title=%5BBUG%5D+Your+Bug+Report+Here">Report Bug</a>
    ·
    <a href="https://github.com/sailpoint-oss/electron-identitynow-starter/issues/new?assignees=&labels=enhancement&projects=&template=feature-request.md&title=%5BFEATURE%5D+Your+Feature+Request+Here+">Request Feature</a>
  </p>
</div>

- [About the project](#about-the-project)
  - [SvelteKit](#sveltekit)
  - [Electron](#electron)
- [Using the starter](#using-the-starter)
  - [Installing Dependencies](#installing-dependencies)
  - [Local Development](#local-development)
  - [Build the application from source](#build-the-application-from-source)
- [Contribute](#contribute)
- [License](#license)
- [Discuss](#discuss)


<!-- ABOUT THE PROJECT -->
## About the project

<!-- <div align="center">
<img src="./assets/images/electron-identitynow-starter-output.png" width="500" height="" style="text-align:center">
</div> -->

The UI Development Kit is a template for building desktop applications integrating with Identity Security Cloud.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### SvelteKit

SvelteKit is a framework that allows easy application development, utilizing both front-end and back-end components, as well as modern security standards. When you're ready to build the UI development kit, it allows you to compile your code into numerous different deployment methods by using different adapters (static html, node server, edge, or lambda functions).   
[SvelteKit can be explored more here](https://kit.svelte.dev).

If you use this starter to build on top of an existing project, you will get several things implemented right out of the box:  

- OAuth Flow
- SailPoint SDK
- Desktop build of your application
- TypeScript
- SvelteKit
- TailwindCSS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Electron

`Electron` is a framework that allows you to build cross-platform desktop applications, using web technologies. It combines the Chromium rendering engine and the Node.js runtime to allow you to build applications that can run on Windows, Mac, and Linux.

In the projects `src` folder, there are two additional folders: `main` and `preload`. These folders contain the code relevant to the electron portion of the application. The electron portion of the application is where you determine the window theme, size, shape, and behavior as well as the startup logic for the application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Use the starter

To use this starter application, you must install NPM. You can find instructions about how to install NPM [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Once you have NPM installed, you can clone this repository and run the following commands, depending on your package manager of choice.

### Install dependencies

To install the dependencies, run `install` using your package manager of choice:

```bash
# NPM
npm install
```

```bash
# Yarn
yarn install
```

```bash
# PNPM
pnpm install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Local Development

To start the application in development mode, first [install dependencies](#installing-dependencies). Then run the `dev` script using your package manager of choice:

```bash
# NPM
npm run dev
```

```bash
# Yarn
yarn dev
```

```bash
# PNPM
pnpm dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Build the application from source

To build the application from source, first [install dependencies](#installing-dependencies). Then run the `build` script matching your OS platform, using your package manager of choice:

| Command | Description | OS |
| --- | --- | --- |
| `build:win` | Builds the application for Windows. | Windows |
| `build:mac` | Builds the application for MacOS. | MacOS |
| `build:linux` | Builds the application for Linux. | Linux |

```bash
# NPM
npm run build:win
```

```bash
# Yarn
yarn build:mac
```

```bash
# PNPM
pnpm build:linux
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contribute

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

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

You can go to the [SailPoint Developer Community Forum](https://developer.sailpoint.com/discuss/tag/electron-identitynow-starter) to discuss this tool with other users! 

<p align="right">(<a href="#readme-top">back to top</a>)</p>
