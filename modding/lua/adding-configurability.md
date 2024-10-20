# Adding configurability to your mod
This guide will tell you how to add configurability to your mod

## Creating config file
Create `config.lua` next to your mod's `main.lua` file.
To make your mod's config compatible with GSS Mod Manager, you will need to follow the config standard.
Add what you want to be configurable to the config:
```lua
local config = {
    -- fields @description, @type and @default are required, normal comments are ignored
    --@description Key that needs to be pressed with modifier keys to print a string
    --@type Key
    --@default Key.F1
    key = Key.F2,
    --@description Modifier keys that needs to be pressed with the key to print a string
    --@type list[ModifierKey]
    --@default {}
    modifier_keys = { ModifierKey.SHIFT },
    --@description The string to print
    --@type string
    --@default "hello world!"
    string = "I'm a string!",
    --@description An integer
    --@type int range=1..1000
    --@default 30
    -- the above will make sure that this integer will be in range from 1 to 1000
    integer = 109,
    --@description A float
    --@type float range=4.4..44.44 precision=2
    --@default 5
    -- precision=2 means that the amount of numbers after dot can't exceed 2
    a_float = 30.4
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
    print(string.format("Keybind was pressed: %s", config.string))
end)
```
That's it! You can now add configurability to your mods.
