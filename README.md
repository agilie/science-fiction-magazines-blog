[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/agilie/Rails-Application-Template)

# Science Fiction Magazines blog HTML Template

Hi, guys!

We’re happy to share with you our Science Fiction Magazines Blog template that can be used as a spectacular blog concept. When creating this template, we were [inspired by the stylish science fiction magazines of the 80s-90s](https://dribbble.com/shots/3453444-Blog). 

## How to use?
Our template uses the following fonts:

[Open Sans](https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans)
[Righteous](https://fonts.google.com/specimen/Righteous)

Connecting the main css and fonts in `<head>`:

```javascript
<link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
```
```javascript
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
```
```javascript
<!--main css-->
<link rel="stylesheet" href="css/style.css"> 
 ``` 

Please make sure that you are using the latest version  of the third party libraries:
[jQuery](https://cdnjs.com/libraries/jquery/),
[dotdotdot](http://dotdotdot.frebsite.nl/)

## Description

*Science Fiction Magazines Blog template* consists of 3 logical elements: **header**, **content section**, **footer**.
The **header** contains the main navigation elements used as paging. And no matter how this template is created (through CMS or the web framework), you can easily customize the navigation to the previous and next articles by using the following blocks:

```javascript
<!-- previous page -->
<nav class="navigation-block left">
```
```javascript
<!-- next page -->
<nav class="navigation-block right”>
```

There is also the main menu in the header, where you can place any links to external resources, or create additional pages on the example of the basic blog page.

The **content section** should contain an image; it's specified by the template. And whatever image you upload, the maximum allowed size for the template is 700px high and 510px wide. Article-image-preview is the class used to wrap the image

The content section also uses the `"slides-counter"` block that provides a user with information about the number of articles and identifies the current page number. It could be applicable if you want to use the carousel in *Science Fiction Magazines Blog template*.

The **footer** contains navigation unit and allows you to return to the last article.

In contrast to the `"slides-counter"` block, the `"slider-indicators"` block located at the bottom of the page gives a visual representation of which page you are on. To identify the active page, use the class `"active"` for the td tag.

In order to customize the template, we recommend to use the `"site.js"` file for scripts and `"style.css"` - for the stylesheet.

## Demo
[https://agilie.github.io/science-fiction-magazines-blog/](https://agilie.github.io/science-fiction-magazines-blog/)

## Troubleshooting
Problems? Check the Issues block to find the solution or create an [new issue](https://github.com/agilie/science-fiction-magazines-blog/issues) that we will fix asap. Feel free to contribute.

## Author
This template is open-sourced by [Agilie Team](https://agilie.com/en/index) <a href="mailto:info@agilie.com">info@agilie.com</a>

## Contributors
[Tatiana Kushnir](https://github.com/tatiana-kushnir-89) - <a href="mailto:tatiana.kushnir@agilie.com">tatiana.kushnir@agilie.com</a>

## License

The <a href="/agilie/Bouncing-Carousel/blob/master/LICENSE.MD">MIT</a> License (MIT) Copyright © 2017 [Agilie Team](https://agilie.com/en/index)


