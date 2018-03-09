# CSS Module Research

### To use:

`npm install`

Then

`npm run build && npm run start`


## Basic Philosophy
**Core tenants:**
- Components are responsible for their own styling.
  - Consider them existing independent of parent/child components
- Single, top-level import of global variables and mixins that are included in every component stylesheet
  - ex. `@import 'core';`
  - This import should **never** produce actual CSS, only scss variables, mixins, and placeholders
  - Additional imports can also exist for specific use-cases/sharing across pages/components
- Augmenting existing component styling should be done via composition
  - ex. `composes: blueBtn from './_Buttons.scss';`
  - Globally shared component styling go in the `/shared/components` directory
  - A component should have to have a good reason for importing styles from places other than globally shared styles
  - Limit the use of sharing styles across components in jsx files, keep that to scss files
- Stylesheets are one-to-one maps to components, if a component has a state that changes the style, the stylesheet should reflect that
  - ex. A button component with a state of `isDisabled`
```js
    // JSX
    <button className={this.state.isDisabled ? styles.buttonIsDisabled : styles.button}>Submit</button>
```
```scss
    /* SCSS */
    .button {
      background-color: blue;
    }

    .buttonIsDisabled {
      composes: .button;
      opacity: .7;
    }
```

- Mixins should be used for convenience on individual selectors, not for styling whole components
  - ex:
```scss
  /* SCSS */
  @mixin center-element {
      @include translate(-50%, -50%);
      position: absolute;
      top: 50%;
      left: 50%;
  }
  .myElement {
      @include center-element;
  }
```


**Best Practices:**
- You should avoid modifying styles of components multiple nests down
  - Don't: `.top__component .next__component .third__component .third--styles { foo: bar; }`
  - Single layer down is acceptable, but discouraged
  - Due to webpack naming, this likely won't work anyway

**Naming Conventions:**

Now that we will be importing styles from a SCSS file into JSX and compiling them via webpack, classNames are going to be unique by default. (You end up with names like `_marketing-section-component---MarketingSectionComponent---1fpVB`) While this might imply that you can go wild, we need to keep some order for development sake.
- We're going to start naming files like we name them in js.
  - ex. `_marketing-section.scss` -> `_MarketingSectionComponent.scss`
- Nested styles no longer are really used heavily, so you can keep things top-level, and unique naming will be composed via webpack so long as you import names like:
```js
  // JSX
  import styles from './MyComponent.scss';

  <div className={styles.component}>
    <div className={styles.text} />
  </div>
```
```scss
  /* SCSS */
  .MyComponent {
      background-color: gray;
  }

  .text {
     font-weight: bold;
  }
```

## Library Research
https://github.com/webpack-contrib/css-loader

https://github.com/css-modules/css-modules

## Other People's Philosophies
https://glenmaddern.com/articles/css-modules

https://medium.com/front-end-developers/css-modules-solving-the-challenges-of-css-at-scale-85789980b04f
