---
layout: 'post'
title: 'What is Progressive Enhancement?'
description: 'Progressive enhancement, in simple terms, is a strategy in web design to provide basic features and then add to it to improve the experience.'
datePublished: '2020-10-15T12:00Z'
tags: [glossary, web]
---

# What is Progressive Enhancement?

## TL;DR;

Start your web design/development providing the core content for the user, and then, on top of that, start adding presentational layers to make it look better depending on user's connection speed and/or browser features. The opposite strategy is [Graceful Degradation](./what-is-graceful-degradation).

## Why is it needed?

By starting the development of a web page providing the bare minimum to deliver your message, you ensure that in the worst case scenario your users will still be able to consume your content.

By worst case, we can think of screen readers, that don't even render your shiny layout, someone limited to a very outdated browser or even a not so _"IE"_ browser but with some missing features.

## How to implement it?

There are some [core principles](https://en.wikipedia.org/wiki/Progressive_enhancement#Core_principles) to better achieve a progressive enhancement:

- Basic content should be accessible to all web browsers.
- Basic functionality should be accessible to all web browsers.
- Sparse, semantic markup contains all content.
- Enhanced layout is provided by externally linked CSS.
- Enhanced behavior is provided by unobtrusive, externally linked JavaScript.
- End-user web browser preferences are respected.

Basically, all that you're doing is making sure that you make it work in the worst case, then you make it work in the next restricted environment, and so on.

Think of a fancy background animation using `canvas` like [Stripe's](https://stripe.com/) it would never work on older browsers and is completely useless for screen readers, so using the progressive enhancement strategy you should ensure that whatever the medium, people can access the header text.

With that done, you can think of a solid background color, just so it doesn't feel so empty, while still being very light on bandwith. With more bandwith resources and more capable devices, you can show a background image, then move on to a simple CSS animation to finally reach the best result that is a `canvas` animated background.

On your way you may find browsers that don't support a given technology but there may be a polyfill available so you can create support for such feature. You can detect which features are available in the browser using [Modernizr](https://modernizr.com/) and provide fallbacks based on it.

The opposite strategy to progressive enhancement is [Graceful Degradation](./what-is-graceful-degradation).
