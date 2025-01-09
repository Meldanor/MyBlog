# Mel Block

A static site blog created by [Zola](https://www.getzola.org/).

## Usage

## Requirements

The following software must be installed to develop the blog locally:

- [tailwindcss-cli](https://tailwindcss.com/docs/installation)
  - `brew install tailwindcss` for MacOs or
  - `yay -S tailwindcss` for Arch Linux
- [zola](https://www.getzola.org/documentation/getting-started/installation/)

### Development

Start tailwind and

    tailwindcss -i src-styles/base.css -o static/styles/main.css --watch & zola serve

### Build

    tailwindcss -i src-styles/base.css -o static/styles/main.css --minify
    zola build

## License

MIT

## Thanks

### [Zola TailwindCSS Template](https://github.com/coastalwhite/zola-tailwind)

Inspiration how to combine zola and tailwind.
