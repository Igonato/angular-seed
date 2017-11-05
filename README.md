# Legacy AngularJS App

This "legacy" AngularJS project is a collection of tests/challenges for
[this](https://github.com/Igonato/legacy-angularjs-webpack) angularjs 
webpack setup project.

Based on [angular/angular-seed](https://github.com/angular/angular-seed).


# Challenges

## Bower

Setup should work with bower


### Tricky Bower Components

TODO: angular-moment, angualr-pdf


## templateUrl Resolution

There is a good chance that `templateUrl`s in a legacy project will not work
with an [angular-template-loader][1]. Good news are that we can archive the 
same thing with more control using [string-replace-loader]:

```ts
{
    // Transform `templateUrl: 'url'` to `template: require('path')`, 
    // but skip for url values that startWith 'cache'
    loader: 'string-replace-loader',
    options: {
        search: /templateUrl\s*:\s*['"`](.*?)['"`]\s*([,}])/gm,
        replace: (match, url, ending) =>
            url.startsWith('cache') ? match :
            `template: require('foo/${ url }')${ ending }`,
    },
}
```

[1]: https://www.npmjs.com/search?q=angular-template-loader
[string-replace-loader]: https://github.com/Va1/string-replace-loader


## Stylesheets

For a good measure, let's ensure that there are support for common
preprocessing languages/tools: [Sass], [Less], [Stylus] and [Autoprefixer].

[Sass]: http://sass-lang.com/
[Less]: http://lesscss.org/
[Stylus]: http://stylus-lang.com/
[Autoprefixer]: https://autoprefixer.github.io/
