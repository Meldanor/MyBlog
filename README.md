# Mel Blog

A static site blog based of Strapi+Astro.

## Architecture

There are three components for this one:

1. A Strapi CMS that is running on the server and holds the blog as data in sqllite.
2. An nginx server that is running on the server and serves the blog content.
3. An astro repository that is used to build the blog by fetching the data at build time from strapi. The GitHub CI will run the build and push the generated files to the server. Astro itself will NOT run on the server, but only in the CI.

