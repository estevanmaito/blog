---
layout: 'post'
title: 'The right way to declare element attributes with TypeScript and React'
description: 'Avoid repetition and make all attributes available for components'
datePublished: '2020-10-04T12:00Z'
tags: [react, typescript]
---

# The right way to declare element attributes with TypeScript and React

Let's say you have a button component in your React application and you want to provide users with optional props that are available in common buttons like `onClick`. This is one way to do:

```tsx
interface ButtonProps {
  onClick?: () => void
}

const Button: React.FC = function Button(props: ButtonProps) {
  return <button {...props}></button>
}
```

The problem with the approach above is that anything that isn't specified in the `interface` wouldn't be available, so if somebody wanted to use `onMouseOver`, it would error. One way to "solve" it is by adding every event that comes to your mind, but you would end up with dozens of extra lines.

The ideal solution is to extend the `interface` using `ComponentProps`, like below.

```tsx
interface ButtonProps extends React.ComponentProps<'button'> {
  // custom props here
}
// the rest is identical
```

This way, your component now accepts everything a normal `button` would and you can still extend with your own custom props.