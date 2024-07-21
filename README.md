# URL to QR Code Generator

This project prompts the user for a URL, generates a QR code image for that URL, and saves both the QR code image and the URL to the file system.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)

## Prerequisites

Make sure you have Node.js installed on your system. You can download it from [Node.js](https://nodejs.org/).

## Demo
You can check out the live demo of the application [here](https://qr-code-generator-nlcf.onrender.com)

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory.
3. Install the required dependencies using npm:

    npm install

## Usage

1. Run the script using Node.js:

    node index.js

2. Enter the URL you want to mask when prompted.

3. The QR code image (qr.png) and the URL (url.txt) will be saved in the project directory.

## Dependencies

- inquirer
- qr-image
- fs (File System module, built-in with Node.js)

## License

This project is licensed under the MIT License.
