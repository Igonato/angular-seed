# Legacy AngularJS App

This repo is a collection of challenges that one may face when updating
an existing AngularJS app to a modern Webpack-based setup.

Based on [angular/angular-seed](https://github.com/angular/angular-seed).


<!-- MarkdownTOC -->

- [Challenges](#challenges)
    - [templateUrl resolution](#templateurl-resolution)

<!-- /MarkdownTOC -->


# Challenges

## templateUrl resolution

There is a good chance that templateUrl's in a legacy project wont work with
a [template-loader](https://www.npmjs.com/package/angular2-template-loader)


