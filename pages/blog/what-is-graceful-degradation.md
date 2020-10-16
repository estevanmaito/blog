---
layout: 'post'
title: 'What is Graceful Degradation?'
description: 'Graceful Degradation, in simple terms, is a strategy in web design to provide basic features and then add to it to improve the experience.'
datePublished: '2020-10-15T15:00Z'
tags: [glossary, web]
---

# What is Graceful Degradation?

## TL;DR;

Start your web design/development providing the best experience for the user, and then start removing presentational layers to make it still work in poorer conditions like bad connection, old browser, screen readers, etc. The opposite strategy is [Progressive Enhancement](./what-is-progressive-enhancement).

## Why is it needed?

By starting the development of a web page providing the best experience to deliver your message, you will only ensure that people using the latest browsers will have a good experience consuming your content. Enters Graceful Degradation.

You start by removing parts of the system to make it work in other contexts, like an older browser or screen reader. Ask questions like: is this essential for my product? If not, it can be removed. Maybe you have a shiny animation for a button, but will your content suffer if it doesn't exist?

## How to implement it?

I'm pretty sure you have already used Graceful Degradation. Take a look a the CSS code below:

```css
font-family: 'Open Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
  Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
```

In this case, my design depends on the font Open Sans, but if it's not available (maybe on a slow connection, network errors, etc.) please Mr. Broswer, try the Inter font, but if even that isn't available, go with one of these fonts that the user may have installed locally.

We first try to render the best experience possible, but if it's not possible, we degrade.

As with [Progressive Enhancement](./what-is-progressive-enhancement), we can use [Modernizr](https://modernizr.com/) to test browser features and provide fallbacks or completely remove non-essential parts.

The opposite strategy is [Progressive Enhancement](./what-is-progressive-enhancement).
