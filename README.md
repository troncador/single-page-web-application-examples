# single-web-application
How to create a Single web application using Docker Nginx and different frameworks

The configuration of nginx allow  that any request for a htm or html file will be responded with the file index.html

 For example:
* /index.html
* /foo.htm
* /foo/foo/foo.html

 They respond with the same file.

## Installation

To run the Angular Single Web Application

```bash
git clone https://github.com/troncador/single-web-application
```


###  Angular Single Web

To run the Angular Single Web Application

```bash
cd singlewebapplication_angular
npm install
docker run --rm -p 8080:80 -v $(pwd):/var/www/html:ro -v $(pwd)/../nginx-config/:/etc/nginx/conf.d/ nginx
```

Then in a browser:

[http://localhost:8080/](http://localhost:8080/)


###  Backbone Single Web

To run the Backbone Single Web Application

```bash
cd singlewebapplication_backbone
bower install
docker run --rm -p 8080:80 -v $(pwd):/var/www/html:ro -v $(pwd)/../nginx-config/:/etc/nginx/conf.d/ nginx
```

Then in a browser:

[http://localhost:8080/](http://localhost:8080/)


## Requisites

* NPM
* bower
* Docker
