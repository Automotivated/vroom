<p align="center">
	<a href="http://standardjs.com/"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="JavaScript Style Guide" /></a>
	<a href="https://travis-ci.org/Automotivated/vroom"><img src="https://travis-ci.org/Automotivated/vroom.svg?branch=master" alt="Build Status" /></a>
	<a href="https://www.bithound.io/github/Automotivated/vroom"><img src="https://www.bithound.io/github/Automotivated/vroom/badges/score.svg" alt="bitHound Overall Score"></a>
	<a href="https://codeclimate.com/github/Automotivated/vroom"><img src="https://codeclimate.com/github/Automotivated/vroom/badges/gpa.svg" /></a>
	<a href='https://coveralls.io/github/Automotivated/vroom'><img src='https://coveralls.io/repos/github/Automotivated/vroom/badge.svg' alt='Coverage Status' /></a>
</p>

# Automotivated.vroom()
Automotivated.vroom( ) is an innovative application to show inventory based on search queries of the visitor. It's build on top of [Vue](http://vuejs.org/) and [Vuex](http://vuex.vuejs.org/en/index.html)

## v0.0.1 EOL
Because of several reasons, the development of vroom v0.0.1 has been discontinued. The previous development repository has been deleted and the project has gain a complete reboot.

## v1.0.0
Starting fresh, starting something awesome! We're expecting the same output, so don't worry! The project is started this time with [vue-cli](https://github.com/vuejs/vue-cli)
> Thanks to [Dezzign](http://www.dezzign.nl/) we won't rely anymore on a default design (materialize) but are getting our own brandnew look and feel. Customizable to your own needs!


## Before we begin
Put on some nice [Electro Swing](https://www.youtube.com/watch?v=aUn2HvekSZY) and make sure you got the following applications installed:

- [Node v4.5.0+](https://nodejs.org/en/)

> **&lt;code like a pro&gt;**<br>
 Here is a little list off applications I use for development. Not required to run the application, but are always nice to have and will definitely make your life a little less frustrating
 - [Sublime](https://www.sublimetext.com) *the best editor there is!*
	- [Package Control](https://packagecontrol.io/)
	- [Material Theme](https://packagecontrol.io/packages/Material%20Theme)<br />
	*choose `Darker` and switch back to `Monokai` from sublime (default theme in Sublime 3)<br />
	tweak the settings with `Material Theme Config`*
	- [Vue Syntax Highlighter](https://github.com/vuejs/vue-syntax-highlight)
	- [Sass](https://packagecontrol.io/packages/Sass)
	- [Git](https://packagecontrol.io/packages/Git)
	- [Markdown Preview](https://packagecontrol.io/packages/Markdown%20Preview)
	- [ES6 Syntax](https://packagecontrol.io/packages/JavaScriptNext%20-%20ES6%20Syntax)
	- [GitGutter](https://packagecontrol.io/packages/GitGutter) *what's changed since last commit*
 - [BeardedSpice](https://beardedspice.github.io/) *don't worry, nobody will hear your music except you!*
 - [Spectacle](https://www.spectacleapp.com/) *shortcuts to get the windows where you want them!*

> **&lt;/code like a pro&gt;**<br>

## [Hey Ho, Let's Go!](https://www.youtube.com/watch?v=ZDXdBx6UaLI) (installation)
Open your favorite ([fish](https://fishshell.com/) || [zsh](http://www.zsh.org/)) flavoured ([oh-my-fish](https://github.com/oh-my-fish/oh-my-fish) || [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)) terminal ([iterm](https://www.iterm2.com/)) and go to your projects folder and clone this repo!

> **&lt;code like a pro&gt;**<br>
 I'm using fish with oh-my-fish and my own [feest](https://github.com/FKobus/theme-feest) theme. Install is super easy and can be done with one command: `omf install https://github.com/FKobus/theme-feest`<br>
 **&lt;/code like a pro&gt;**<br>

Start with cloning the project to your own development machine

```sh
git clone https://github.com/Automotivated/vroom.git
```
Go to the root of your clone and install all dependencies
```sh
npm install
```

## [Compilation](https://www.youtube.com/watch?v=KWJEM5Vcxmk)
Because we're using [webpack](https://webpack.github.io/) you need to run the following command during development from the root.

We're using [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html) for active development, this will start a webserver at [http://localhost:8080/](http://localhost:8080/)
```sh
npm run dev
```
When you're ready with making everything possible, run the build command to minify and some more stuff I really don't want to talk about.
```sh
npm run build
```

## [Testing](https://www.youtube.com/watch?v=b8Lol5ce-e0)
The whole app is and should be testable via unit test. New added code must be added to a test. Unit tests are run by Karma with Jasmine.<br>
The following command will run all tests in tests/unit
```sh
npm run unit
```

## Integration
Start with adding the vroom minified library to your project (best place should be in the footer somewhere). It's hosted on [surge.sh](http://surge.sh) but available via the vroom subdomain:
```html
<script src="//vroom.automotivated.nl/js/vroom.min.js"></script>
```
Include the style package in the `<head>`
```html
<link rel="stylesheet" href="//vroom.automotivated.nl/css/vroom.min.css">
```
After that, just bind Automotivated.vroom to any valid html element you like. Best practice would be a div.
```html
<div id="vroom"></div>
```

You can bind the app in Javascript by element selector or pass the element.
```js
Automotivated.vroom('#vroom')
// or
Automotivated.vroom(document.querySelector('#vroom'))
```

Before we can show some data, we need to establish a connection to the api server. You can offcourse build you own API. See the engine docs for formatting.
```html
<div id="vroom"></div>
<script>
	Automotivated.vroom('#vroom', {
		api: {
			endpoint: 'http://engine.automotivated.nl/api',
			version: 'v1',
			key: 'YOUR_UNIQUE_KEY'
		}
	});
</script>
```

#### Options
`api.endpoint` is the api to talk to<br>
`api.key` is the key that's used for authentication<br>
`overview_count` is the amount of hits per page<br>
`overview_rendering` is what we default want to start with (`rows` or `grid`)<br>
`debounce` wait with calling the api when this little timer is finished<br>
`filter_order` orders and enables filters<br>

A typical integration will look something like this
```html
<div id="vroom"></div>
<script>
	document.addEventListener('DOMContentLoaded', function () {
		if (typeof window.Automotivated.vroom == 'function') {
			Automotivated.vroom('#vroom', {
				api: {
					endpoint: 'automotivated',
					version: 'v1',
					key: 'YOUR_UNIQUE_KEY'
				},
				overview_count: 24,
				overview_rendering: 'grid',
				debounce: 400,
				filter_order: ['search', 'fuel', 'price', 'year', 'body', ...]
			});
		}
	});
</script>
```

## [Roadmap](https://www.youtube.com/watch?v=gEPmA3USJdI)
Because we rebooted the project, this list will grow and grow before release. Then we will add a feature list for upcoming releases.
##### v1.0.0
- [x] Setting up the 1.0.0 environment
- [x] Setup CI (travis)
- [x] Setup CD (surge)
- [x] Setup Coverage/Coveralls
- [ ]
- [ ] Start making it work!

## Resources
- https://www.syncano.io/blog/testing-syncano/
- https://jsbin.com/zefawu/5/edit?html,output
- http://rc.vuejs.org/
- http://vuex.vuejs.org/en/intro.html
- http://vue-loader.vuejs.org/en/workflow/testing.html
- https://icomoon.io/app/#/select

### For later readings
- http://baymard.com/blog/how-to-design-applied-filters

### Designs
- http://demo.themesuite.com/automotive-wp/boxed-sidebar-left/?order=year|ASC
- http://theme.webtemplatemasters.com/index.php#theme=cardealer
- https://themeforest.net/item/carat-responsive-automotive-html-template/6552382?s_rank=5
