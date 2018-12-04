---
layout: page
title: Projects
---

Here is a subset of the programming projects that I have worked on in my
free time.

---

## xdg (go package)

Package xdg implements the XDG Specifications (also known as the
[freedesktop.org](https://www.freedesktop.org/) specs) in The Go
Programming Language.

* [Check out the code on GitHub →](https://github.com/rkoesters/xdg)
* [Read the documentation on GoDoc →](https://godoc.org/github.com/rkoesters/xdg)

---

## Trumpet (Twitter bot)

Trumpet is a Twitter bot that generates tweets based on the accounts it
follows. It is designed to support several methods for generating and
scheduling tweets. The default generator uses Markov chains to produce
tweets. The default scheduler schedules tweets to go out whenever the
accounts it follows tweets.

* [Check out the code on GitHub →](https://github.com/rkoesters/trumpet)
* [Read the documentation on GoDoc →](https://godoc.org/github.com/rkoesters/trumpet)

---

## Comic Sticks (xkcd-gtk)

Comic Sticks is a simple xkcd comic viewer written in Go using GTK+ 3.

![xkcd-gtk screenshot](https://raw.githubusercontent.com/rkoesters/xkcd-gtk/master/screenshots/screenshot-1.png)

* [Check out the code on GitHub →](https://github.com/rkoesters/xkcd-gtk)
* [Download from AppCenter (for elementary OS) →](https://appcenter.elementary.io/com.github.rkoesters.xkcd-gtk)
* [Download from Flathub (for any Linux OS) →](https://flathub.org/apps/details/com.github.rkoesters.xkcd-gtk)

---

## xkcd (go package)

Package xkcd is used by Comic Sticks to access the xkcd API. The main
benefit of using this package instead of the API directly is to properly
handle the text encoding (the JSON package in Go's standard library
expects UTF-8, however xkcd's API delivers ISO8859-1 encoded text).

* [Check out the code on GitHub →](https://github.com/rkoesters/xkcd)
* [Read the documentation on GoDoc →](https://godoc.org/github.com/rkoesters/xkcd)
