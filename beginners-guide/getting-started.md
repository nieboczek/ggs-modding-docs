# Getting Started
This guide will tell you how to setup your workspace for mod development.
> [!IMPORTANT]
> Make sure you have [installed the zDEV version of the mod loader](../beginners-guide/installing-mods.md).
## Setting up
Launch the game with zDEV-UE4SS version of the mod loader installed.  

> [!IMPORTANT]
> If Any Windows Are Fully White, open `Grocery Store Simulator/Simulatorita/Binaries/Win64/UE4SS-settings.ini` and change `GraphicsAPI = opengl` to `GraphicsAPI = dx11` then relaunch the game.

In the window with tabs on top, go to `Dumpers` and click `Generate Lua Types` and optionally `Dump CXX Headers`.  

> [!INFO]
> If you want to hide the additional windows, open `Grocery Store Simulator/Simulatorita/Binaries/Win64/UE4SS-settings.ini` and change ones to zeros here:
> ```ini
> ConsoleEnabled = 0
> GuiConsoleEnabled = 0 
> GuiConsoleVisible = 0 
> ```

> [!INFO]
> You won't need the black background console, you can disable it in `Grocery Store Simulator/Simulatorita/Binaries/Win64/UE4SS-settings.ini`:
> ```ini
> ConsoleEnabled = 0
> ```


Download and install [Visual Studio Code](https://code.visualstudio.com/). 
 
Open VSCode in the `Grocery Store Simulator/Simulatorita/Binaries/Win64/Mods` folder.  
You can now go to look at the other modding guides.
