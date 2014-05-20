# cssSlideJS

## A simple JS script to create CSS slideshows.

cssSlideJS relies on JQuery and creates a slideshow with all elements in a given div.
It simply assings the folliwing classes to those elements according with a given time interval:

* `.slide`: to all elements;
* `.current`: to the current element;
* `.prev`: to the previous element (none at the beginning);
* `.next`: to the next element.

It is up to you to define positions, property and animations via css. You can create horizontal and vertical slides, 3D flips, fade and/or zoom effects, etc. Check out all the examples provided.

## Usage

In your html file you must include add JQuery and the main cssSlideJS.js file.
```html
	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	<script src="/yourpath/cssSlideJS.js"></script>
```
Then add a div with a list of images and initialize cssSlideJS on this div.
```html
<div id="mySlideshow" class="fade">
	<img src="images/1.png"/>
	<img src="images/2.png"/>
	<img src="images/3.png"/>
	<img src="images/4.png"/>
</div>

<script type="text/javascript">
$(function () {
	new cssSlideJS($("#mySlideshow"), 2000);
});
</script>
```

Now you're ready to define how the slideshow should look like via CSS.
```html
#mySlideshow { width: 256px; height: 256px; }
.fade { position: relative; }
.fade .slide {
	position: absolute; top: 0; left: 0;
	display: none;
	opacity: 0;
		-webkit-transition: opacity .3s ease-in-out;
		-moz-transition: opacity .3s ease-in-out;
		-o-transition: opacity .3s ease-in-out;
		-ms-transition: opacity .3s ease-in-out;
	transition: opacity .3s ease-in-out;
}
.fade .current { display: block; opacity: 1; }
.fade .prev { display: block; }
.fade .next { display: block; }
```
In this example we position the images and animate the opacity property to create a fade-in/fade-out effect. Check `example/fade.html` to see the result.

Don't forget to check out the other examples.

### Pre-warm
Based on your CSS animation you may experience some glitch at the beginnig of the slideshow (when no element is given a class `.prev`).
To prevent this either assing classes to your images tag in the html code, like this:
```html
<div id="mySlideshow" class="fade">
	<img src="images/1.png" class="current"/>
	<img src="images/2.png" class="next"/>
	<img src="images/3.png"/>
	<img src="images/4.png" class="prev"/>
</div>
```
or force an first image swap right after the JavaScript initialization.
```javascript
<script type="text/javascript">
$(function () {
	var s = new cssSlideJS($("#mySlideshow"), 2000);
	setTimeout(function () {s.next();}, 1);
});
</script>
```


## Credits

cssSlideJS by Saverio Caminiti released under [CC-by](http://creativecommons.org/licenses/by/4.0/)

Examples use images by [Teekatas Suwannakrua](http://raindropmemory.deviantart.com/)