+++
title = "Godot and Bevy"
date = "2025-01-13"

[extra]
summary = "Great Open Source gaming engines I used to learn game dev"
+++

I tried these two beautiful engines over the last one and a half years and now I want to talk about my small experience with them:

<div class="flex justify-around gap-8" >
    <a class="inline-block w-full" href="https://bevyengine.org/">
        <img alt="Logo of Bevy engine - a bird" class="object-contain h-24" src="https://bevyengine.org/assets/bevy_logo_dark.svg">
    </a>
    <a class="inline-block w-full" href="https://godotengine.org/">
        <img alt="Logo of Godot engine - the Godot robot like face" class="object-contain h-24" src="https://godotengine.org/assets/logo_dark.svg">
    </a>
</div>

_Disclaimer_: I've not published a full game with any of these engines nor with any other engine. I'm a software engineer with near decade experience of shipping web dev oriented projects. I'm not an experienced game developer, but I really like to game and interested in the working aspect of the industry.

## Experience with Godot

I started learning Godot when the 4.0 was released in March 2023. I knew Godot existed but wasn't interested in it. After watching a few videos and read some tutorials I was hooked and tried my first small projects to learn it. I bought some assets or downloaded free assets because my drawing is bad and while I love music I'm not a musician.

### Prototypes to learn

I realized quickly that while I had ideas for my first game I need to learn stuff and build various prototypes.

These two projects were my first. A simple movement "game" to try out tilemaps, collisions and first code. The second game was a simple "interaction" game where you have to milk cows.

{% centered_thumbnail(path="images/godot-projects/CrashCourse.png", size=400, op="fit", format="webp", quality="75") %}
The tutorial
{% end %}
{% centered_thumbnail(path="images/godot-projects/CattleMilk.png", size=400, op="fit", format="webp", quality="75") %}
Move around and milk cows.
{% end %}

Godot is using a custom programming language called GDScript to script the games. You can use C++ and recompile the engine, use it in plugins or use C# for more intensive programming work. Godot itself is a good engine providing most of the technical stuff to create a game and I think you can get very far before touching the engine and modifying itself to fit your needs. Godot itself does not have many high level stuff ready to use components to quickly iterate your base game logic. You have to write the code. Or use community plugins.

After getting overwhelmed quickly with the code just for the simple examples I wanted to learn something about other techniques like state machines. In WebDev a state machine is the most evil stuff you can do. You want to do everything as stateless as possible - especially in functional programming. Have a state AND a machine to manage the states was ... not very intuitive for me. Godot itself doesn't have a ready node for state machines, even if there is something like that for animations. So I made my own and created these two games:

{% centered_thumbnail(path="images/godot-projects/AgainstTheState.png", size=400, op="fit", format="webp", quality="75") %}
A simple action game using a custom state machine.
{% end %}
{% centered_thumbnail(path="images/godot-projects/LightThemUp.png", size=400, op="fit", format="webp", quality="75") %}
A simple round based strategy game with more audio.
{% end %}

I found some good plugins like [Godot State Charts](https://github.com/derkork/godot-statecharts) or [LimboAi](https://github.com/limbonaut/limboai) they didn't help me much to organize my project. The UI was a bit too clunky to give a good user experience. I wasn't satisfied with it but wanted to move on to other parts of the engine like lighting.

{% centered_thumbnail(path="images/godot-projects/DefeatTheDarkness.png", size=400, op="fit", format="webp", quality="75") %}
A simple shooter defending against zombies. Awesome music "Frog" by DEgITx music
{% end %}

I realized that good lighting is very hard even for a simple 2D game.

All these small projects were realized in a week or month each and all created in Godot 4.0. I've written a small retro for myself and showed these games to friends. I always wanted to FINISH them and I achieved it. The prototypes were not good or polished. But they were "finished" and I learned much. After that I wanted to create my own full game in the near future.

### My own games

Godot 4.2 was released and I had the time to start working on a vampire survivor clone. I tried EventBus systems and looked into the CI / CD part of the games. I've created my own small publishing service called [Pixel Provisioner](https://github.com/Meldanor/PixelProvisioner). The image for building and deploying Godot games didn't fit my needs, so I even cloned it [repository to build Godot games](https://github.com/Meldanor/godot-ci) modified it. The game itself looked like that:

{% centered_thumbnail(path="images/godot-projects/WeNeedToPhase.png", size=400, op="fit", format="webp", quality="75") %}
Vampire Survivor clone but in the air and with multiple worlds per run
{% end %}

I got stuck in the mechanics of the game and with generating the world. I couldn't wrap my head around a tilemap with noise data AND generating it in chunks on the fly WITHOUT blocking the frame. I tried multithreading but couldn't get it to work and lost the interest after trying a week. There are some plugins now that should give me the possibility but I was dissatisfied. The game was REALLY simple (just a few moving sprites) without a bullet hell and even that created some problems.

So I've lost interest in the GameDev part for a year but was interested in learning more and more.

There was a VERY SMALL prototype for a Factorio clone but I couldn't find a good reason why not developing a mod instead of a full game. I tried more and more community plugins especially dialogue and AI systems. Both are not present in Godot but are provided by plugins.

I had a good idea for a Zelda / Moonlighter clone with a heavy story and relation focus. I build my basics and abstracted stuff to easily produce new enemies. I even tried my first pixel art. The picture speaks for itself. But I'm very proud of my slime! It even has some animations. This project taught me more about style and pixel art, but the dialogue system in the plugin was okay. The UX was not really good and I can't blame anybody developing a plugin for free. In the end I dropped the project because I was busy with other stuff. And with the Factorio DLC. 

{% centered_thumbnail(path="images/godot-projects/Hero Out of Necessity.png", size=400, op="fit", format="webp", quality="75") %}
First pixel art try with a try-out level
{% end %}

### Summary of Godot

*UPDATE from 2025-01-14* : I've rewritten this section a bit because it was a bit too negative and felt like hating Godot. The original is in the repository. This section explains my issues with the engine and its impact on my already weak motivation to finish the games.

Godot is a wonderful engine and has a wide community with many plugins. The engine is clearly technical able to ship and develop small to mid-games, maybe even huge games like Witcher 3. For games in this size you always have to modify the engine to fit your needs. Or write your own.

If you have a special need there is a high possibility that there is a plugin for it. I've used plugins for state machines, for dialogues and for generating terrain. These people are basically working for free so you can make games. They are not only writing the plugin, they are publishing it, maintaining it, writing documentations for it and just polish it. This is awesome and huge kudos to all of them.

But I had problems with these plugins by third parties. The quality of documentation and the plugins varies. You can search for a functionality and find multiple plugins in different states for it. A crucial plugin can be abandoned a few days before your release. You can fix them - they are open source - but it adds a new mental load to your capacity. Your priority should be the game.
In the end - it is free and it is hard to argue against the efforts of people doing something for your for free. In my case the hunt for good plugins and understand them was one part of my dwindling motivation. I wish some functions were part of the engine itself and maintained and quality controlled by the team. Like state machines, basic AI or dialogs.

The second problem was the primary scripting language - GDScript. It is fine and I was able to quickly understand and use it. But it is a new language you have to learn and there are different function names and different pattern the language prefers. It is also not complete. Namespaces are missing and you ran into the risk of having duplicate class names. Typing is optionally and not completly there - Arrays and their function are weird. I've seen a wide range of languages and not one is perfect. But the decision to create and maintain a own language is strange to me. It adds unnecessary load to the maintainer of Godot that could be avoided by using an established language like Python. There is C# and other language bindings - but the main language is GDScript. C++ is also possible because it is an engine, but how wants to write C++ in this era? 

The last point is the ... strange UI framework. I could not wrap my head around how it really works in the end. It was happy that the buttons were on the right position. For my resolution. For my window ratio. I always feared that other resolutions or ratio would totally fall fail. I wish they would have adopted something like the web did in the last decade. Bind data to UI and make it reactive. Instead I have to watch for events and explicitly update all UI elements. While I had ideas for management or UI heavy games - I dropped them because I could not see myself creating such UIs.

I will keep being a sponsor for Godot even when I'm not using it or plan to use it for the next time. I believe in their idea and wish them the best. I see the improvements and follow the blogs.

## And there was Bevy

Damn, this blog is long enough. I think I will talk about bevy in a new blog entry. Thank you for reading.
