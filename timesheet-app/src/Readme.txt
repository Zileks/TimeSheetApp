Installation and Setup Instructions

You will need node and npm installed  on your machine.

Run npm install.


To Start Server:

npm start

To Visit App:

localhost:3000/

In order to make http requests I used Axios package.

You can configure API in api.js file.

---------------------------------------------
Backend API Instructions

To update database connection strings open Web.config file,

In the file search for <connectionStrings> </connectionStrings> to update it.
(There are two of them , one for local storage and one for LocalSQLDatabase)

For this application I also used had to install few packages(to enable Cors etc.) that you can find in packages.config.

You can install those with NuGet Package Manager.

For DI I used Autofac.



 


