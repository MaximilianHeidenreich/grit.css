<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPLv3 License][license-shield]][license-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/MaximilianHeidenreich/grit.svg?style=flat-square
[contributors-url]: https://github.com/MaximilianHeidenreich/grit/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MaximilianHeidenreich/grit?style=flat-square
[forks-url]: https://github.com/MaximilianHeidenreich/grit/network
[stars-shield]: https://img.shields.io/github/stars/MaximilianHeidenreich/grit?style=flat-square
[stars-url]: https://github.com/MaximilianHeidenreich/grit/stargazers
[issues-shield]: https://img.shields.io/github/issues/MaximilianHeidenreich/grit?style=flat-square
[issues-url]: https://github.com/MaximilianHeidenreich/grit/issues
[license-shield]: https://img.shields.io/github/license/MaximilianHeidenreich/grit?style=flat-square
[license-url]: https://github.com/MaximilianHeidenreich/grit/blob/master/LICENSE

<!-- PROJECT HEADER -->
<br />
<p align="center">
  <a href="https://github.com/MaximilianHeidenreich/grit">
    <img src="https://github.com/MaximilianHeidenreich/grit/blob/master/assets/GRIT-logo-large.png?raw=true" alt="Grit logo" width="160">
  </a>

<h2 align="center">Grit</h2>

  <p align="center">
    A simple and extremely lightweight collection of CSS classes for quickly building responsive web layouts targeting mobile and desktop experiences.
    <br>
    <small><i>Only <strong>140kb</strong> in size.</i></small>
    <br />
    <a href="#"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/MaximilianHeidenreich/grit/issues">Report Bug</a>
    ·
    <a href="https://github.com/MaximilianHeidenreich/grit/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Features](#features)
- [Usage](#usage)
  - [Load fom CDN](#load-fom-cdn)
  - [Host yourself](#host-yourself)
- [Concept / How it works](#concept--how-it-works)
  - [Terminology](#terminology)
    - [Grit](#grit)
    - [Root grit](#root-grit)
    - [Subgrit](#subgrit)
  - [What? Why? How?](#what-why-how)
- [Classes Docs](#classes-docs)
  - [Grit root class](#grit-root-class)
    - [.grit](#grit-1)
    - [.grit-x](#grit-x)
    - [.md-grit-x](#md-grit-x)
  - [.subgrit](#subgrit-1)
  - [Grit padding](#grit-padding)
    - [.grt-p-x](#grt-p-x)
    - [.md-grt-p-x](#md-grt-p-x)
    - [.grt-p-a-b](#grt-p-a-b)
    - [.md-grt-p-a-b](#md-grt-p-a-b)
  - [Grit wrapper](#grit-wrapper)
    - [.grit-wrapper-sm](#grit-wrapper-sm)
    - [.grit-wrapper-md](#grit-wrapper-md)
    - [.grit-wrapper](#grit-wrapper-1)
    - [.grit-wrapper-xl](#grit-wrapper-xl)
  - [.content](#content)
  - [.overlay](#overlay)
  - [Grit content position](#grit-content-position)
    - [.grt-a-b](#grt-a-b)
    - [.md-grt-a-b](#md-grt-a-b)
  - [Grit content width](#grit-content-width)
    - [.grt-fill](#grt-fill)
    - [.md-grt-fill](#md-grt-fill)
    - [.grt-full](#grt-full)
    - [.md-grt-full](#md-grt-full)
- [Contributing](#contributing)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

This grid "framework" (it's really just a few generated classes) can be used to easily layout elements on a webpage. It is responsive by default, allowing developers to design for "mobile-first" and update the layout for desktop viewports. The default classes are opinionated to suit my personal needs - should still be useful for most use-cases -, and you can override the default layout using additional classes.
<a href="/">View the docs</a> for more information!

> I created this project because I needed a small solid grid system for some web layouts. I didn't want to use bootstrap or other big frameworks (Also it just was fun to write).

> Feel free to contribute to it if you have some cool suggestions.

### Features

-   [x] Easy & Fast to use
-   [x] Responsive by default
-   [x] Supports multiple grit sizes
-   [x] Subgrits for layouts of nested elements
-   [x] Overlapping grits for stacking layouts

<br>

<!-- USAGE -->

## Usage

### Load fom CDN

```xml
todo
```

### Host yourself

todo

-> Visit the `/examples` folder for usage examples.

-> Visit the <a href="/">Docs</a> to learn how to use grit.

## Concept / How it works

### Terminology

#### Grit

A "grit" is basically an element using the CSS
<code>display: grid</code> property in addition to some additional stuff that makes nesting & other helper classes possible.

#### Root grit

A "Root grit" is the topmost element with the <code>.grit</code> or <code>.grit-x</code> or <code>.md-grit-x</code> classes.
The configuration (padding) of this grit will be inherited by all child elements using the <code>.subgrit</code> class.

#### Subgrit

A "Subgrit" usually referrs to an element with the <code>.subgrit</code> class.

### What? Why? How?

The fundamental idea behind this system is that, you define one grit size for your page (on mobile & >= tablet viewports). After that, you can use helper classes to horizontally position child elements on the grit.

> Vertical layout is not handled by the grit because of reasons :)
> But basically thats not what this project's goal is.

It is also possible to position elements which are nested multiple levels deep. For this, you can use the <code>.subgrit</code> class on each element between the root grit and target element which you want to position. This will make the elements in between stretch to the whole width so that grit column sizes do not differ.

> ! Due to this layout concept, you need to separate vertical elements which should be positioned differently on the grit (See hero example) !

## Classes Docs

> Inside the following documentation, mobile viewport referrs
> to a width < 768px and tablet to > 768px!

### Grit root class

#### .grit

Makes an element a grit using the opinionated default size (mobile: 12 columns, >= tablet: 32 columns).

#### .grit-x

Makes an element a grit using the provided x (min: 2, max: 12) as column count for mobile viewports.

#### .md-grit-x

> ! Only applies to viewports >= tablet breakpoint !

Same functionality as <code>.grit-x</code>

### .subgrit

> ! Needs to be a child of a .grit element (Not necessarily a direct child).

Makes an element a grit itself but inherits the outer grit settings.

### Grit padding

#### .grt-p-x

Sets the grits left & right padding to x (min: 0, max: 15). These padding columns will remain empty when using <code>.grt-fill</code> & <code>.md-grt-fill</code>.

#### .md-grt-p-x

> ! Only applies to viewports >= tablet breakpoint !

Same functionality as <code>.grt-p-x</code>

#### .grt-p-a-b

Sets the grits left padding to a and right padding to b (Values summed cannot exceed total column count).

#### .md-grt-p-a-b

> ! Only applies to viewports >= tablet breakpoint !

Same functionality as <code>.grt-p-a-b</code>

### Grit wrapper

> ! Need to be a parent of the root grit !

#### .grit-wrapper-sm

Applies a max-width of 320px to the element.

#### .grit-wrapper-md

Applies a max-width of 768px to the element.

#### .grit-wrapper

Applies a max-width of 1200px to the element.

#### .grit-wrapper-xl

Applies a max-width of 1680px to the element.

### .content

! TODO: Deprecate

### .overlay

Sets the <code>grid-row</code> property to 1.
This is useful when the class is added to multiple
elements inside the same grit parent. Inside the individual children,
one can position elements individually, but the overlays will
be displayed stacked.

-> Visit the <a href="/">Docs</a> to learn how to use
the <code>.overlay</code> class.

### Grit content position

> ! a needs to be smaller than b !

#### .grt-a-b

Makes the element span the given columns defined by a (min: 1, max: grit columns count) and b (min: 1, max: grit columns count)

#### .md-grt-a-b

> ! Only applies to viewports >= tablet breakpoint !

Same functionality as <code>.grt-a-b</code>

### Grit content width

#### .grt-fill

Will make the element fill the whole available width, whilst enforcing the padding used by the grit.

#### .md-grt-fill

> ! Only applies to viewports >= tablet breakpoint !

Same functionality as <code>.grt-fill</code>

#### .grt-full

Will make the element fill the whole available width, ignoring any padding used by the grit.

#### .md-grt-full

> ! Only applies to viewports >= tablet breakpoint !

Same functionality as <code>.grt-full</code>

<!-- CONTRIBUTING -->

## Contributing

Feel free to contribute to this project if you find something that is missing or can be optimized.
I want to retain the original vision of a simple yet usable library, so please keep that in mind when proposing new features.
If you do so, please follow the following steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Maximilian Heidenreich - github@maximilian-heidenreich.de

Project Link: [https://github.com/MaximilianHeidenreich/JNet](https://github.com/MaximilianHeidenreich/grit)

Project Icon: [https://github.com/MaximilianHeidenreich/grit/blob/master/assets/Icon-1024.png](https://github.com/MaximilianHeidenreich/grit/blob/master/assets/Icon-1024.png)

<a href="https://www.buymeacoffee.com/maximili"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=maximili&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"></a>
