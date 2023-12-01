# Combining html and parsed tailwindcss in a single html file


## How to use

### Development

Run the following commands in the root directory.

```bash
npm install
npm run tailwind-dev
npm run live-server-dev
```
This will run 2 command, one for watching and parsing tailwindcss used in the html file, another one to run a live-server that will auto reload on file changes.

After the servers are run properly, edit the `src/index.html` and `src/output.css` file according to your need.


### Build
After editing your code to suit your needs. Run the build command
```
npm run build
```
After build is done the `dist/index.html` should contain the combined html and css codes.

