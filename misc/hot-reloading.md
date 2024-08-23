---
prev: false
next: false
---
# Hot reloading
This guide will tell you how to reload mods and configs without reopening the game.

> [!NOTE]
> This is enabled by default on the zDEV-UE4SS version

## Opening the UE4SS settings file
Go to `Grocery Store Simulator/Simulatorita/Binaries/Win64` and open the `UE4SS-settings.ini` file using notepad inside of that folder.  

Change:
```ini
EnableHotReloadSystem = 0 // [!code --]
EnableHotReloadSystem = 1 // [!code ++]
```
