# Coding a Lua mod
This guide will tell you how to make a simple Lua mod.

> [!IMPORTANT]
> Read [Getting Started](../beginners-guide/getting-started.md) if you haven't already

## Creating mod folder
In VSCode you will want to create a mod folder with a name you want your mod to be preferably using `PascalCase`.
Create a `Scripts` folder in the folder you just made. Inside the `Scripts` folder you will want to make `main.lua` and optionally `config.lua` if you want your mod to be configurable.  
For example I created a `MoneyPrinter` folder and put only `main.lua` in it's `Scripts` folder

Let's assume you want to create a mod that prints (writes) the current money to the GUI console when you press Shift+F2.
```lua
-- When Shift+F2 is pressed
RegisterKeyBind(Key.F2, { ModifierKey.SHIFT }, function()
    -- Get the BP_StoreManager class
    local manager = FindFirstOf("BP_StoreManager_C")
    -- The output of GetMoney needs to be stored in a Lua table
    local output = {}
    -- Store money in output
    manager:GetMoney(output)
    -- Print out the amount of money
    print(string.format("Money: %s", output.Money))
end)
```
You may ask, how do I make a mod that (example): makes a box disappear if another box of the same product has enough space to accommodate the items in the box that disappeared.  
I don't know, but you can use the VSCode's Search through multiple files feature to search for what you might need.

Press Ctrl+Shift+F to open the search tab and type something like `Box` to see if there's anything useful.

> [!IMPORTANT]
> It's important to note that it will only work if you pressed `Generate Lua Types` in the UE4SS GUI console and you opened VSCode in the `Grocery Store Simulator/Simulatorita/Binaries/Win64/Mods` folder.