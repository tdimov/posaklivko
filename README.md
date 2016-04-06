# posaklivko

Posaklivko is basic project structure with basic configurations that helps developers to build beautiful and modern web applications with NodeJS using ES2015 and some features of ES2016. Posaklivko writing your build configurations using [Gulp](http://gulpjs.com/) and pulling in relevant build tasks and package manager dependencies using [npm](https://www.npmjs.com/) and [jspm](http://jspm.io/)

## Building The Code

To build the code, follow these steps.

1. Ensure that latest stable version of [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

	```shell
	npm install
	```
3. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
4. From the project folder, execute the following command:

	```shell
	jspm install
	```
5. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
6. To build and start your project, use the following command:

	```shell
	gulp
	```
7. Your project will run on address localhost:3000
8. You will find the compiled code in the `dist` folder
9. If you want to add new build tasks go and add them in build folder of the project
10. When you start the project be sure that you have started your database and your connection string is added to server/config/config.js depending on your environment. Posaklivko uses [MongoDB](https://www.mongodb.org/)
