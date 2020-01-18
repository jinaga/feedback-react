# Feedback

React user interface for adding feedback to a website.

## Why build Feedback?

I create static sites using Gatsby.
These sites don't have a database back end, yet I want to engage in conversation with my readers.
I don't want to cede ownership of the discourse to a third party.
And so I'm building a model that I can own.

And you can own it too.

## A React component library

This component library is built on the [Feedback](https://github.com/jinaga/feedback) model.
The model uses a [Jinaga](https://jinaga.com) back end to persist website comments, even for static sites served from a CDN.
This component library adds the user interface to your site.

This component library was build using [Storybook](https://storybook.js.org/), a visual test platform.
Since the component library itself has no back end, this eased stand-alone development.
Otherwise, the component would have to be brought into a host website before being visualized.