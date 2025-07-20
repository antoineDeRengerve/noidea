# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# PWA deployment

Local testing
* It is possible to test with local installation on macOS
* In order to test production on smartphone, one needs to deploy on server so that the page is served with the adequate domain name

Update the service worker:
* Needs either to close all tabs
* skip_waiting: click on button in dev tools > application > service worker section
* click on dedicated button (not implemented yet)
