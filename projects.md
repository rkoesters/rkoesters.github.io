---
layout: page
title: Projects
---

Here is a subset of the programming projects that I have worked on in my
free time.

---

## [xdg (go package)](https://github.com/rkoesters/xdg)

Package xdg implements the XDG Specifications (also known as the
[freedesktop.org](https://www.freedesktop.org/) specs) in The Go
Programming Language.

---

## [Trumpet (Twitter bot)](https://github.com/rkoesters/trumpet)

Trumpet is a Twitter bot that generates tweets based on the accounts it
follows. It is designed to support several methods for generating and
scheduling tweets. The default generator uses Markov chains to produce
tweets. The default scheduler schedules tweets to go out whenever the
accounts it follows tweets.

---

## [Comic Sticks (xkcd-gtk)](https://github.com/rkoesters/xkcd-gtk)

Comic Sticks is a simple xkcd comic viewer written in Go using GTK+ 3.

![xkcd-gtk screenshot](https://raw.githubusercontent.com/rkoesters/xkcd-gtk/master/screenshots/screenshot-1.png)

---

## [xkcd (go package)](https://github.com/rkoesters/xkcd)

Package xkcd is used by Comic Sticks to access the xkcd API. The main
benefit of using this package instead of the API directly is to properly
handle the text encoding (the JSON package in Go's standard library
expects UTF-8, however xkcd's API delivers ISO8859-1 encoded text).
