---
next: false
---
# Adding configurability to your mod
This guide will tell you how to add configurability to your mod

## Creating config file
Create `config.lua` next to your mod's `main.lua` file.
Add what you want to be configurable to the config:
```lua
local config = {
    -- if you have a keybind hook
    key = Key.F1,
    modifier_keys = { ModifierKey.SHIFT },
    -- you can put a lot of types of values
    string = "I'm a string!", -- string
    integer = 109, -- int (integer)
    -- table (list or dictionary)
    list = { 1, 2, 3 },
    dictionary = {
        hello = "world"
    }
    -- and other types
}
return config
```
It's useful to add comments to your config to explain what changing the config option does:
```lua
local config = {
    -- Delay between launches of nuclear bombs
    delay = 69.5
}
return config
```

## Using config
To use the config values you need to add code at the start of `main.lua`:
```lua
local config = require "config"
```
Then you can use the values:
```lua
RegisterKeyBind(config.key, config.modifier_keys, function()
    print(string.format("Keybind was pressed: %s", config.number))
end)
```
That's it! You can now add configurability to your mods.
