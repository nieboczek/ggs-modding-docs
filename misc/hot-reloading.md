# Hot reloading
This guide will tell you how to reload mods and configs without reopening the game.
::: info
This is enabled by default on the zDEV-UE4SS version
:::
## Opening the `UE4SS-settings.ini` file
Go to `Grocery Store Simulator/Simulatorita/Binaries/Win64` and open the `UE4SS-settings.ini` file using notepad inside of that folder.  
> How to open a file with notepad has been explained [here](../beginners-guide/configuring-mods.md#editing-the-configlua-file)

Change `EnableHotReloadSystem = 0` to `EnableHotReloadSystem = 1`.
