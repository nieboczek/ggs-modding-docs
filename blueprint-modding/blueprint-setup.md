# Blueprint Setup
This guide will tell you how to setup Unreal Engine for modding with blueprints.

## Setting up The Project
Install [Unreal Engine 5.2](https://www.unrealengine.com/download).
> [!WARNING]
> You **MUST** use Unreal 5.2 as it is what the game runs on.

Create a blank project named `Simulatorita`.
![Create Project](../media/create_project.png)

Go to `Edit > Project Settings > Packaging`, and ensure you have the following settings.

<!-- Probably Redundant due to screenshot -->
<!-- | Setting                    | State    |
|----------------------------|----------|
| Use Pak File               | Enabled  |
| Use to Store               | Enabled  |
| Generate Chunks            | Enabled  |
| Share Material Shader Code | Disabled |
| Allow ChunkID assignmnets  | Enabled  | -->

![Project Settings](../media/project_settings.png)

Then, go to `Edit > Editor Preferences` and search for `Allow ChunkID assignmnets`

![Chunk Settings](../media/chunk_settings.png)

In the `Content Browser`, create a new folder called `Mods`.
Then, create your mod folder and call it whatever you like, such as `MyMod`.

Right-click and create a new `Blueprint Class`.
![Blueprint Class](../media/blueprint_class.png)

Choose the `Actor` class.
![Actor class](../media/actor_class.png)

Once the Blueprint is created, name it `ModActor`.
![Modactor](../media/modactor.png)

Open your ModActor's `Event Graph` and create 3 `String` Variables.
![Metadata](../media/metadata.png)

Click to `Compile` your blueprint and then you can edit each Variable.
![Compile](../media/compile.png)

Each value can be changed under `Default Value`.
![Mod Author](../media/mod_author.png)

Right-click and add a `Custom Event`.
![Custom Event](../media/custom_event.png)

Name it `PrintToModLoader`, add a `String` input titled `Message`.
![print](../media/print.png)

Drag off of the `Event Begin Play` node and search for `PrintToModLoader`.
![First Print](../media/first_print.png)

In the message input type: `Mod Loaded!`.
![Mod Loaded Print](../media/mod_loaded_print.png)

Make sure to `Compile` your blueprint and then save your `Mod Actor`.
![Compile](../media/compile.png)

Now you can build your mod!  
Check out [the building guide](/blueprint-modding/building-mods).

> [!NOTE]
> Some information and screenshots taken from [Dmgvol's UE Modding Guide](https://github.com/Dmgvol/UE_Modding/)
