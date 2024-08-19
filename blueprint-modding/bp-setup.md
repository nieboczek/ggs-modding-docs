# Blueprint Setup
This guide will tell you how to setup unreal engine for modding with blueprints.

## Setting up The Project

Install [Unreal Engine 5.2](https://www.unrealengine.com/download).
::: warning
You **MUST** use Unreal 5.2 as it is what the game runs on.
:::

Create a blank project named `Simulatorita`.
![Create Project](create_project.png)

Go to `Edit > Project Settings > Packaging`, and ensure you have the following settings.

<!-- Probably Redundant due to screenshot -->
<!-- | Setting                    | State    |
|----------------------------|----------|
| Use Pak File               | Enabled  |
| Use to Store               | Enabled  |
| Generate Chunks            | Enabled  |
| Share Material Shader Code | Disabled |
| Allow ChunkID assignmnets  | Enabled  | -->

![Project Settings](project_settings.png)

Then, go to `Edit > Editor Preferences` and search for `Allow ChunkID assignmnets`

![Chunk Settings](chunk_settings.png)

In the `Content Browser`, create a new folder called `Mods`.
Then, create your mod folder and call it whatever you like, such as `MyMod`.

Right-click and create a new `Blueprint Class`.
![Blueprint Class](blueprint_class.png)

Choose the `Actor` class.
![Actor class](actor_class.png)

Once the Blueprint is created, name it `ModActor`.
![Modactor](modactor.png)

Open your ModActor's `Event Graph`, Right-click and add a `Custom Event`.
![Custom Event](custom_event.png)

Name it `PrintToModLoader`, add a `String` input titled `Message`.
![print](print.png)

Drag off of the `Event Begin Play` node and search for `PrintToModLoader`.
![First Print](first_print.png)

In the message input type: `Mod Loaded!`.
![Mod Loaded Print](mod_loaded_print.png)

Click to `Compile` your blueprint and then save your `Mod Actor`.
![Compile](compile.png)

Now you can build your mod!

:::warning Building
Check out [The Building Article](/blueprint-modding/building-mods).
:::
:::info Credits
Some information and screenshots taken from [Dmgvol's UE Modding Guide](https://github.com/Dmgvol/UE_Modding/)
:::