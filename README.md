# alom for Ember CLI

An [ember-cli](http://www.ember-cli.com) addon for using [alom](https://icalialabs.github.io/alom/) in Ember applications.

## Getting Started

Install in ember-cli application

```
ember install ember-cli-alom
```

Then include the following in your `app.scss` file:

```css
@import "base";
```

## Configuration

### Custom variables

You can use custom alom variables. For this copy `node_modules\alom\scss\_variables.scss` in your `app\styles` directory as `_custom.scss`. And add import `_custom.scss` in `app.scss`.

```css
@import "custom";
@import "base";
```

### Custom alom

To import each CSS components separately, you can use something like the code below:

```css
/* Core variables and mixins: */
@import "variables";
@import "mixins";

/* CSS reset: */
@import "reset";

/* SASS functions: */
@import "functions";

/* CSS layout: */
@import "grid";

/* Responsive classes: */
@import "responsive";

/* Utility classes: */
@import "utilities";
```

## For ember-cli-alom maintainers:

Contributions are welcome!

### Installation

* `git clone https://github.com/IcaliaLabs/ember-cli-alom.git` this repository
* `cd ember-cli-alom`
* `yarn install`

### Running the test dummy site

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## License
ember-cli-alom is released under the MIT License. See the bundled [LICENSE](LICENSE.md) file for details.
