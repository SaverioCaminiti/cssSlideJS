# cssSlideJS

## A simple JS script to create CSS slideshows.

cssSlideJS relies on JQuery and creates a slideshow with all elements in a given div.
It simply assigns the following classes to those elements according with a given time interval:

* `.slide`: to all elements;
* `.current`: to the current element;
* `.prev`: to the previous element (none at the beginning);
* `.next`: to the next element.

It is up to you to define positions, property and animations via css. You can create horizontal and vertical slides, 3D flips, fade and/or zoom effects, etc. Check out all the examples provided.

## Usage

In your html file you must include JQuery and the main cssSlideJS.js file.
```html
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
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
new cssSlideJS($("#mySlideshow"), 2000);
</script>
```

Now it's up to you to define how the `fade` slideshow should look like via CSS. Here is a sample:
```css
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
In this example we position the images and animate the opacity property to create a fade-in/fade-out effect. Check `examples/fade.html` to see the result. Don't forget to check out the other examples: there is a lot of cool things you can do with a few lines of CSS.

### Pre-warm
Based on your CSS animation you may experience some glitch at the beginning of the slideshow (when no element is given a class `.prev`).

To prevent this you can assign class `slide` to all images, `current` to the first image, `next` to the second one, and `prev` to the last one. Just like this:
```html
<div id="mySlideshow" class="fade">
	<img src="images/1.png" class="slide current"/>
	<img src="images/2.png" class="slide next"/>
	<img src="images/3.png" class="slide"/>
	<img src="images/4.png" class="slide"/>
	<img src="images/5.png" class="slide prev"/>
</div>
```

Alternatively you can force a first image swap right after the JavaScript initialization.
```javascript
var s = new cssSlideJS($("#mySlideshow"), 2000);
setTimeout(function () {s.next();}, 1);
```
Use the method that better fits your animation.

### Complex content
cssSlideJS works cycling classes on all elements children of the given elements, so you can use it on a list of div, span, img, etc. or even on all items in list.
See `examples/labels.html` and `examples/list.html` for various content examples.

## Credits

cssSlideJS by Saverio Caminiti released under MIT license.

Examples use images by [Teekatas Suwannakrua](http://raindropmemory.deviantart.com/)