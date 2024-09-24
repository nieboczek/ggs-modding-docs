# Coding tips
When searching through the Lua types, you may find a `GetSomething` function on a class, but it doesn't return anything.  
To get a return value from a `GetSomething` function you need to:
```lua
-- Get the BP_StoreManager as a class
local mgr = FindFirstOf("BP_StoreManager_C")
-- Create an output table
local out = {}
-- The Money value will be stored in the output table
mgr:GetMoney(out)
-- Get the value of out.Money and print it out
-- Money is the name of the parameter that the GetMoney function has
print(string.format("Money: %s", out.Money))
```

## More
[Palworld modding wiki](https://pwmodding.wiki/docs/category/lua-modding), [UE4SS wiki](https://docs.ue4ss.com/dev/guides/creating-a-lua-mod.html) and [UE Modding repository](https://github.com/Dmgvol/UE_Modding) have useful stuff.  
You can look at how other mods were built on [NexusMods](https://nexusmods.com/grocerystoresimulator) by just downloading them and looking at the Lua files.  
You can ask questions on the [GSS Modding Community Discord server](https://discord.gg/5ENg4XGpPZ).
