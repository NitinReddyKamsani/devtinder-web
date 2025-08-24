# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Deployment 
-> Sign-up on Aws
-> Launch an instance
-> click on connect and choose SSH client
-> go to terminal and copy "chmod 400 "<secret>.pem"
-> login to the machine using the ssh command 
-> install the same version as your local
-> git clone your repo's 

## Frontend
-> go to the project folder and do npm install and run the build "npm run build"
-> Update : sudo apt update
-> install nginx : sudo apt install nginx
-> start nginx : sudo systemctl start nginx
-> enable nginx : sudo systemctl enable nginx
-> copy code (build files) to /var/www/html
-> command : sudo scp -r dist/* /var/www/html/ 
-> Enable PORT 80 on aws instance