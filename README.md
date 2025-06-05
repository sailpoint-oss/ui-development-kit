# UI Development Kit

<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

![Issues][issues-shield]
![Contributor Shield][contributor-shield]

[issues-shield]:https://img.shields.io/github/issues/sailpoint-oss/ui-development-kit?label=Issues
[contributor-shield]:https://img.shields.io/github/contributors/sailpoint-oss/ui-development-kit?label=Contributors

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/sailpoint-oss/ui-development-kit">
    <img src="https://avatars.githubusercontent.com/u/63106368?s=200&v=4" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">SailPoint UI Development Kit</h3>

  <p align="center">
    A desktop application development kit for building SailPoint Identity Security Cloud integrations
    <br />
    <a href="https://github.com/sailpoint-oss/ui-development-kit/issues/new?assignees=&labels=bug&projects=&template=bug-report.md&title=%5BBUG%5D+Your+Bug+Report+Here">Report Bug</a>
    ·
    <a href="https://github.com/sailpoint-oss/ui-development-kit/issues/new?assignees=&labels=enhancement&projects=&template=feature-request.md&title=%5BFEATURE%5D+Your+Feature+Request+Here+">Request Feature</a>
  </p>
</div>

## Table of Contents

- [About the Project](#about-the-project)
  - [Angular](#angular)
  - [Electron](#electron)
  - [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Local Development](#local-development)
- [Building the SailPoint SDK](#building-the-sailpoint-sdk)
- [Building the Application](#building-the-application)
- [Usage](#usage)
  - [Environment Configuration](#environment-configuration)
  - [Authentication Methods](#authentication-methods)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

<!-- ABOUT THE PROJECT -->
## About the Project

The UI Development Kit is a comprehensive template for building desktop applications that integrate with SailPoint Identity Security Cloud. Built on Angular and Electron, it provides a solid foundation for creating cross-platform desktop applications with modern web technologies.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Angular

This project is built with **Angular 19**, leveraging the latest features and improvements of the Angular framework. Angular provides:

- Component-based architecture for maintainable code
- TypeScript support for enhanced development experience
- Angular Material for modern UI components
- Reactive programming with RxJS
- Comprehensive testing framework with Jest
- Built-in internationalization support

[Learn more about Angular](https://angular.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Electron

**Electron** enables the creation of cross-platform desktop applications using web technologies. The integration provides:

- Native desktop application experience
- Cross-platform compatibility (Windows, macOS, Linux)
- System-level integrations and secure credential storage
- Offline capabilities when needed
- Native file system access

[Learn more about Electron](https://electronjs.org)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Key Features

When you use this starter, you get several features implemented out of the box:

- **Multi-Environment Management**: Configure and switch between multiple SailPoint tenants
- **Dual Authentication Support**: 
  - OAuth 2.0 browser-based authentication
  - Personal Access Token (PAT) authentication
- **SailPoint SDK Integration**: Pre-configured with the latest SailPoint API client
- **Cross-Platform Desktop Build**: Ready-to-build for Windows, macOS, and Linux
- **Modern UI Framework**: Angular Material components for consistent UX
- **TypeScript Support**: Full TypeScript integration for enhanced development
- **Secure Credential Storage**: Uses system keychain for secure credential management
- **Environment Validation**: Built-in OAuth endpoint validation
- **Developer Tools**: ESLint, Jest testing, and Playwright e2e testing

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

To use this development kit, you must have Node.js and npm installed. 

- **Node.js**: Version 16.14.0 or higher, or 18.10.0 or higher
- **npm**: Comes bundled with Node.js

You can download Node.js from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sailpoint-oss/ui-development-kit.git
   cd ui-development-kit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the component library:
   ```bash
   npm run build:components
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Local Development

To start the application in development mode:

```bash
npm run start
```

This command will:
1. Start the Angular development server
2. Launch the Electron application
3. Enable hot reload for rapid development

For web-only development (without Electron):
```bash
npm run ng:serve
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Building the SailPoint SDK

To build the SailPoint SDK with the latest API specifications:

1. Download the OpenAPI Generator CLI (version 7.11+):
   ```bash
   wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/7.11.0/openapi-generator-cli-7.11.0.jar
   ```

2. Clone the API specifications:
   ```bash
   git clone https://github.com/sailpoint-oss/api-specs.git
   ```

3. Run the pre-script to prepare the specifications:
   ```bash
   node ./mustache_templates/prescript.js api-specs/idn/v2025/paths
   ```

4. Generate the SDK:
   ```bash
   java -jar openapi-generator-cli-7.11.0.jar generate \
     -i api-specs/idn/sailpoint-api.v2025.yaml \
     -g typescript-axios \
     -o ./app/sailpoint-sdk \
     --global-property skipFormModel=false \
     --config generator-config.yaml \
     --api-name-suffix V2025Api \
     --model-name-suffix V2025
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Building the Application

To build the application for distribution:

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build:prod
```

### Platform-Specific Builds

| Command | Description | Platform |
| --- | --- | --- |
| `npm run electron:build` | Builds for current platform | Auto-detected |

The built application will be available in the `dist/` directory.

### Web Build
For web deployment (without Electron):
```bash
npm run web:build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

### Environment Configuration

1. **Launch the Application**: Start the development kit using `npm start`

2. **Configure Environments**: 
   - Click the settings icon to open environment configuration
   - Add multiple SailPoint tenant configurations
   - Each environment includes:
     - Tenant name and URLs
     - Authentication method preference
     - Secure credential storage

3. **Switch Environments**: Use the dropdown to switch between configured environments

### Authentication Methods

#### Personal Access Token (PAT)
- Requires Client ID and Client Secret
- Stored securely in system keychain
- Suitable for automation and headless scenarios

#### OAuth 2.0
- Browser-based authentication flow
- More secure for interactive use
- Automatic token refresh
- Built-in endpoint validation

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion to improve this project, please fork the repo and create a pull request. You can also make a suggestion by opening an issue with the tag `enhancement`.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and patterns
- Add tests for new functionality
- Update documentation as needed
- Run linting before submitting: `npm run lint`
- Run tests: `npm test`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Support

You can discuss this tool and get support from the community:

- [SailPoint Developer Community Forum](https://developer.sailpoint.com/discuss/)
- [GitHub Issues](https://github.com/sailpoint-oss/ui-development-kit/issues) for bug reports and feature requests
- [SailPoint Developer Documentation](https://developer.sailpoint.com/docs/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>