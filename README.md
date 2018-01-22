# WCG: Word Cloud Generator

An animated word/phrase/sentence cloud generator. Animate your chosen text across the screen easily with this plug and play javascript prototype function which can be used on any HTML container.

## Features

### Multiple Supported Item Types
WCG script will support words, phrases and sentences. **i.e. all things string**

### Non-stacking items
Items will not stack on top of eachother due to WCG finding the correct regions for which to place the given items such that they won't stack

### Randomize Items
Items shown on the word cloud are randomly picked from an array of strings to keep the word cloud fresh (requires enough strings to accomplish this).

### Cross platform support
The word cloud generated will support all client web browser sizes.

##Getting started

Include [wcg.js](wcg.js) inside your project and call the prototype function from wherever you desire.

e.g.

```html
<section id="example"></section>
<script src="wcg.js"></script>
<script>
		// container for wcg
		let example = document.getElementById("example");

		// create wcg object
		example.wcg({
			"words": [
				"Hi!",
				"Hallo!",
				"Holla!",
				"Γεία!",
				"Bonjour!"
			]
		});
</script>
```

## Example
<img src="wlcm.png" alt="wlcm image">

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

WCG utlizes the base model of  [WLCM JS](https://github.com/svichas/wlcm) **by svichas**.
