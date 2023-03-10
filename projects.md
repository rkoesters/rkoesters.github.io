---
layout: page
title: Projects
---

Here is a subset of the programming projects that I have worked on in my free
time.

---

## Comic Sticks (xkcd-gtk)

<div>
  <a href="https://pkg.go.dev/github.com/rkoesters/xkcd-gtk@main"><img src="https://pkg.go.dev/badge/github.com/rkoesters/xkcd-gtk.svg" alt="Go Reference" /></a>
  <a href="https://github.com/rkoesters/xkcd-gtk/actions/workflows/ci.yml"><img src="https://github.com/rkoesters/xkcd-gtk/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <a href="https://goreportcard.com/report/github.com/rkoesters/xkcd-gtk"><img src="https://goreportcard.com/badge/github.com/rkoesters/xkcd-gtk" alt="Go Report Card" /></a>
</div>

Comic Sticks is a simple xkcd comic viewer written in Go using GTK+ 3.

![xkcd-gtk screenshot](https://raw.githubusercontent.com/rkoesters/xkcd-gtk/main/screenshots/screenshot-1@2x.png)

- [Check out the code on GitHub](https://github.com/rkoesters/xkcd-gtk)
- [Download from AppCenter (for elementary OS)](https://appcenter.elementary.io/com.github.rkoesters.xkcd-gtk)
- [Download from Flathub (for any Linux OS)](https://flathub.org/apps/details/com.github.rkoesters.xkcd-gtk)

---

## xdg (go package)

<div>
  <a href="https://pkg.go.dev/github.com/rkoesters/xdg"><img src="https://pkg.go.dev/badge/github.com/rkoesters/xdg.svg" alt="Go Reference" /></a>
  <a href="https://github.com/rkoesters/xdg/actions/workflows/go.yml"><img src="https://github.com/rkoesters/xdg/actions/workflows/go.yml/badge.svg" alt="CI" /></a>
  <a href="https://goreportcard.com/report/github.com/rkoesters/xdg"><img src="https://goreportcard.com/badge/github.com/rkoesters/xdg" alt="Go Report Card" /></a>
</div>

Package xdg implements the XDG Specifications (also known as the
[freedesktop.org](https://www.freedesktop.org/) specs) in The Go Programming
Language.

- [Check out the code on GitHub](https://github.com/rkoesters/xdg)
- [Read the documentation](https://pkg.go.dev/github.com/rkoesters/xdg)

---

## Trumpet (Twitter bot)

<div>
  <a href="https://pkg.go.dev/github.com/rkoesters/trumpet"><img src="https://pkg.go.dev/badge/github.com/rkoesters/trumpet.svg" alt="Go Reference" /></a>
  <a href="https://goreportcard.com/report/github.com/rkoesters/trumpet"><img src="https://goreportcard.com/badge/github.com/rkoesters/trumpet" alt="Go Report Card" /></a>
</div>

Trumpet is a Twitter bot that generates tweets based on the accounts it
follows. It is designed to support several methods for generating and
scheduling tweets. The default generator uses Markov chains to produce tweets.
The default scheduler schedules tweets to go out whenever the accounts it
follows tweets.

- [Check out the code on GitHub](https://github.com/rkoesters/trumpet)
- [Read the documentation](https://pkg.go.dev/github.com/rkoesters/trumpet)

---

## xkcd (go package)

<div>
  <a href="https://pkg.go.dev/github.com/rkoesters/xkcd"><img src="https://pkg.go.dev/badge/github.com/rkoesters/xkcd.svg" alt="Go Reference" /></a>
  <a href="https://github.com/rkoesters/xkcd/actions/workflows/go.yml"><img src="https://github.com/rkoesters/xkcd/actions/workflows/go.yml/badge.svg" alt="CI" /></a>
  <a href="https://goreportcard.com/report/github.com/rkoesters/xkcd"><img src="https://goreportcard.com/badge/github.com/rkoesters/xkcd" alt="Go Report Card" /></a>
</div>

Package xkcd is used by Comic Sticks to access the xkcd API. The main benefit
of using this package instead of the API directly is to properly handle the
text encoding (the JSON package in Go's standard library expects UTF-8, however
xkcd's API delivers ISO8859-1 encoded text).

- [Check out the code on GitHub](https://github.com/rkoesters/xkcd)
- [Read the documentation](https://pkg.go.dev/github.com/rkoesters/xkcd)
