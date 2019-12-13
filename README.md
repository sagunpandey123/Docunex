________________________________________________________________________________________________________________________________________________________________
# Docunex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Docker

https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe

________________________________________________________________________________________________________________________________________________________________
# Docunex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
________________________________________________________________________________________________________________________________________________________________

# Elastic Search Setup

Create a `docker-compose.yml` file and edit it.

## Run your docker-compose file.

Change your directory to where your `docker-compose.yml` file is saved.

Then run the command `docker-compose up`.

And you will see the service coming up if you go to [Elastic Search](http://localhost:9200/) 'http://localhost:9200/'.
________________________________________________________________________________________________________________________________________________________________

# Kibana Setup

Kibana is used to search, view, and interact with data stored in [Elasticsearch](http://localhost:9200/) indices.

## Pull Kibana from docker (version: 6.8.2)

Run `docker pull docker.elastic.co/kibana/kibana:6.8.2`

## Check Elasticsearch containers if it's running

Run `docker container ls`

## Check running Elasticsearch's containers Network

Run `docker network ls`

## Link Elasticsearch containers with Kibana.

Run `docker run --link 411396fbb6a6:elasticsearch --link 821d77d9bfc8:elasticsearch2 --net elastic682docker_esnet -p 5601:5601 kibana:6.8.2`

(Here `--net elastic682docker_esnet` is the network's name on which Elasticsearch is running.) 
(Here `--link 411396fbb6a6:elasticsearch` is the containerid:containername.)

And you will see the service coming up if you go to [Kibana](http://localhost:5601) 'http://localhost:5601/'.
________________________________________________________________________________________________________________________________________________________________
# FSCrawler & Tesseract Setup

FScrawler helps to index binary documents such as PDF, Open Office, MS Office.

[Youtube link](https://www.youtube.com/watch?v=vziwQjHk1Bk) i.e, for beter understanding.

##Other Useful Links:
  1. [github page](https://github.com/dadoonet/fscrawler)
  2. [installation Docs](https://fscrawler.readthedocs.io/en/fscrawler-2.6/installation.html)
  3. [Documentation](https://buildmedia.readthedocs.org/media/pdf/fscrawler/latest/fscrawler.pdf)

##1. [Download fscrawler 2.4](https://repo1.maven.org/maven2/fr/pilato/elasticsearch/crawler/fscrawler/)

##2. Setup environment variable
 JAVA_HOME = C:\Progra~1\Java\jdk1.8.0_221

 JRE_HOME= C:\Progra~1\Java\jre1.8.0_221
                                 
##3. Run:
 `bin\fscrawler --config_dir .\BWTLFK plantdrawings`    
 (i)BWTLFK is a folder name and plantdrawings is a sub-folder which contains the setting.json file)

 (ii)We can create more subfolders in a folder to setup different drives like :Z, :Y etc.)

 (iii)For eg: bin\fscrawler --config_dir .\BWTLFK scanneddocs) 
in the command terminal, it will ask to create a new job so type `Y` for yes.

##4. Edit Setup.json file (Check the sample setup.json file)

##5. re-run: `bin\fscrawler --config_dir .\BWTLFK plantdrawings` 

##6. Restart:
If your job was interrupted or stopped, you don't have to worry about reindexing everything. 

run: `bin\fscrawler --config_dir .\BWTLFK job_name --restart`

(This command indexes from where it was last stopped. In other word, it continues to index remaining unindexed documents.)

________________________________________________________________________________________________________________________________________________________________
#TESSERECT (OCR)

##For reading ocr from pdfs, 
[Download Tesserect](https://sourceforge.net/projects/tesseract-ocr-alt/files/) 

##Set directiories to environmental variable to auto detect globally.

[Installing Tesseract OCR](https://www.bl.uk/britishlibrary/~/media/bl/global/early%20indian%20printed%20books/training%20resources/installing%20and%20using%20tesseract%20ocr.pdf)
________________________________________________________________________________________________________________________________________________________________

