# Mel Block

ARCHIVED: This repository is archived because it was integrated into my [Personal Website](https://kiliangaertner.de/) and its [repository](https://github.com/Meldanor/PersonalWebpage) !

A static site blog created by [Zola](https://www.getzola.org/).

## Usage

## Requirements

The following software must be installed to develop the blog locally:

- [zola](https://www.getzola.org/documentation/getting-started/installation/)
- node.js

### Development

Start tailwind and

    npx tailwindcss -i src-styles/base.css -o static/styles/main.css --watch & zola serve

### Build

    npx tailwindcss -i src-styles/base.css -o static/styles/main.css --minify
    zola build

## License

MIT

## Thanks

### [Zola TailwindCSS Template](https://github.com/coastalwhite/zola-tailwind)

Inspiration how to combine zola and tailwind.

### [Flowbite Darkmode](https://flowbite.com/docs/customize/dark-mode/)

Implementation of a dark mode toggle
