# Getting Started
This guide will tell you how to setup your workspace for mod development.
## Setting up
::: info
Make sure you have [Installed The Modloader](../beginners-guide/installing-mods.md).
:::

Launch the game with zDEV-UE4SS version of the mod loader installed.  

::: tip
If Any Windows Are Fully White, open `Grocery Store Simulator/Simulatorita/Binaries/Win64/UE4SS-settings.ini` and change `GraphicsAPI = opengl` to `GraphicsAPI = dx11` then relaunch the game.
:::

In the window with tabs on top, go to `Dumpers` and click `Generate Lua Types` and optionally `Dump CXX Headers`.  

::: info
If you want to hide the additional windows, open `Grocery Store Simulator/Simulatorita/Binaries/Win64/UE4SS-settings.ini` and change:
```ini
ConsoleEnabled = 1
GuiConsoleEnabled = 1 
GuiConsoleVisible = 1 
```
to
```ini
ConsoleEnabled = 0
GuiConsoleEnabled = 0 
GuiConsoleVisible = 0 
```
:::
::: tip
You won't need the black background console, you can disable it
```ini
ConsoleEnabled = 0
```
:::

Download and install [Visual Studio Code](https://code.visualstudio.com/). 
 
Open VSCode in the `Grocery Store Simulator/Simulatorita/Binaries/Win64/Mods` folder.  
You can now go to look at the other modding guides.
