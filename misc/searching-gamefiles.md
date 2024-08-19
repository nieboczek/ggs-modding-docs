# Searching Gamefiles
This guide will tell you how to search gamefiles using FModel.

## Installing FModel
Install [FModel](https://fmodel.app/).

Start Grocery Store Simulator and open the UE4SS GUI console.
Under the `Dumpers` tab, click `Generate .usmap file`.

Then you can open FModel and click the arrow to `Add Undetected Game`.
Set the filepath to `Grocery Store Simulator/` and select `GAME_UE5_2 (536870944)` from the UE Versions drop down.

> [!NOTE]
> If you already have FModel installed, you will have to select `Directory` and `Selector` at the top of the window.

Open the settings at the top of the window and enable `Local Mapping File`.
Set the `Mapping File Path` to `Grocery Store Simulator/Binaries/Win64/Mappings.usmap`

- Gamefiles are in `Simulatorita-Windows.utoc`
- Translations are in `Simulatorita-Windows.pak`

Now you should be able to search through the game files!