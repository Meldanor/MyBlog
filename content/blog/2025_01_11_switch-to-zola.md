+++
title = "Switch to Zola"
date = "2025-01-11"

[extra]
summary = "Why I made the switch from Astro+Strapi to Zola."
+++

Welcome to the newest version of my blog! In this very first page I want to try out the new stuff and explain why I made the switch from my previous stack to the current one.

### New stack

You are currently looking at the new version with [Zola](https://www.getzola.org/) and [Tailwind](https://tailwindcss.com/). Zola is a static side generator written in Rust. It takes
Markdown files and compiles them to static HTML. Rust ensures a very high performance and using Rust ecosystems improves the Rust ecosystem in general - I hope so. In later posts I will explain this reasoning in detail.

Tailwind is just a convenient utility for writing CSS. Zola itself supports SCSS but my CSS will not be complex enough to justify a SCSS compile. I also had negative experiences with SCSS or SASS in the past because the compilers were slow or buggy and I cannot really understand the advantages of SCSS and SASS with modern CSS. To be honest - and clearly visible by the simple design - I am not a UI and CSS expert. So all in all I like tailwind because it helps me to build websites by providing nice utility classes and that's it. I could get away with plain CSS, so tailwind is more a convenience than a necessity.

The website will be hosted by a small virtual machine by Hetzner. ~~The static files will be served by [Simple Web Server (sws)](https://simplewebserver.org/), an nginx alternative written in Rust. The reason for it: I want to try it out and it will be enough for my needs. The software serving the static files is not important~~ - it will be deployed with Docker with a Traefik for the reverse proxy.

**UPDATE**: While finishing the deployment and stuff I realized that only nginx has the possibilty to serve static brotli, zstd and gzip files AND to use automatically Etag bashed caching. Also, I linked to wrong server, I wanted to use [Static Web Server](https://static-web-server.net/).

And that is the stack. Zola with Markdown for the content and structure, Tailwind for the "views", ~~sws~~ nginx for serving the files.

### Old stack

Before I get to the reasons for the switch I want to quickly sketch the old stack. The old stack used [Astro](https://astro.build/) written in Javascript and [Strapi](https://strapi.io/) as the headless CMS.

While I was happy to have the system running over time it was a bit problematic and I lost interest writing blog entries. Astro fetched the data from Strapi and created the actual static files by it. Every change in Strapi executed a GitHub Hook to run the build process and deploy the new version of the blog.

It worked, and I think this approach works great for multiple editors and websites with a high read and a low write traffic. You can manage many things in Strapi without touching the code and be flexible. You get the high performance by just serving static sides and only have to sacrifice a bit more complicated setup and build times for it.

### Reasoning

The maintenance of the old stack was a bit too big for me. Strapi and the blog are separate pieces of software that need to be running and updated. Only to serve static files. Strapi is consuming resources even when it is not needed. I could fix this by shutting down the strapi instance and only start it when needed - but who does this for a hobby project?

The separation of layout and data was a bit too much for this blog. I was inflexible with the content and If I wanted something more exotic I needed to change the Astro templates and Strapi data fields and deploy them both before using it.

And I didn't like Strapi not as much as I thought in the end. The documentation was okay, but I experienced some errors when working with it, I needed to fix. The UI was okaish but not the best I've seen. No critique, it is open software and I could improve it. But I wanted to just use it.

So why Zola? I like Rust. And while other static side generators are fast enough or has the same features - I wanted a Rust based system. I cannot defend this position with other arguments than "I like Rust", so you can disagree with me in this point.

Zola enabled me to write the content in the same software environment as I template the layout and quickly see the changes. It is simple and I got the switch working in a day or so working on it.

### Not everything is great

The integration with tailwind is ... okay. I tried using the tailwind CLI and it worked on the Mac but not on my Linux (I use Arch btw now). Something about not finding the plugin and after installing it in many ways I could not get it work. So I created a shallow node.js package just for tailwind to work its magic. It ... is okay, but would be nice to not require nodejs.

The template engine is okay and the documentation seems great. But I don't really like the syntax or the lack of a good autoformatter.

### Hiding the old blog

Yeah, that died with this release. I have the files on my server as a backup but I don't want to convert the few blog entries. I was also a bit ashamed of the content. Maybe I will add a link the old blog somewhere on this side, but I will no migrate the texts.
