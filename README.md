
# API Automation Test Template Using Jest

This template provides a structured setup for API automation testing using Jest. It helps teams quickly establish a maintainable testing framework with a predefined folder structure, ensuring consistency and scalability.

## Description

To maintain uniformity and facilitate collaboration, **please follow the [architecture](https://bluebirdgroup365.sharepoint.com/sites/QA9/SitePages/API-Automation-Testing-Architecture.aspx) and the [folder structure and naming conventions](https://bluebirdgroup365.sharepoint.com/sites/QA9/SitePages/Folder-Structure-and-Naming-Convention.aspx) defined by the Bluebird Group QA Automation Team.**

By using this template, you can streamline your test automation setup, reduce configuration overhead, and focus on writing and executing tests efficiently. Follow the steps below to clone and initialize the project for your needs.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   # Clone with SSH
   git clone git@gitssh.bluebird.id:qa-bluebirdgroup/api-automation-test-template-using-jest.git

   # Clone with HTTPS
   git clone https://git.bluebird.id/qa-bluebirdgroup/api-automation-test-template-using-jest.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd api-automation-test-template-using-jest
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Verify the setup by running a test:**
   ```bash
   npm test
   ```
5. **Prepare your project:**
   * Create a new repository in your remote server.
   * Remove the existing ``.git`` folder:
     ```bash
     # for Linux or MacOS
     rm -rf .git

     # for Windows
     rd /s .git
     ```
   * Update ``package.json`` to fit your project needs.
   * Modify or remove example test suites in the ``__tests__`` folder.
   * Modify or remove ```README.md``` file as needed.
6. **Initialize a new Git repository and push to your remote server:**
   ```bash
   git init --initial-branch=main

   # adding a remote repository using SSH
   git remote add origin git@gitssh.yourdomain.com:your-group/your-repository.git
   git remote add origin git@gitssh.git.bluebird.id/mareti.laia/gorest-trial-marel.git

   # OR, adding a remote repository using HTTPS
   # git remote add origin https://git.yourdomain.com/your-group/your-repository.git

   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

## Authors

Contributors names and contact info

[@yophiza.tulus](https://git.bluebird.id/yophiza.tulus)
[@pahmi.deri](https://git.bluebird.id/pahmi.deri)
[@muhamad.adly](https://git.bluebird.id/muhamad.adly)
[@dimas.ilham](https://git.bluebird.id/dimas.ilham)

## License

This project is licensed under the [ISC](https://choosealicense.com/licenses/isc/) License - see the LICENSE.md file for details.

## Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Node.js Documentation](https://nodejs.org/en/docs/)
