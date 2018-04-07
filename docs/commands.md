## Introduction

Current skill prediction support commands. User can use them from game chat.

## Basic info

Main format: `/8 sp <command>`

Example: `/8 sp info`

Extended command format: `/8 sp <command> <subcommand>`

Example: `/8 sp config print`

## Commands

### Basic commands

*    `info` - basic info about current SP and configuration
 
*    `strictdef` - switch for autoblock messages (affects only brawlers)
    
*    `mount` - switch for "your character mounted" check
    
*    `off` - disable SP. You should be unmounted, not in battle and etc 
    
*    `on` - enable SP. You should be unmounted, not in battle and etc 
    
*    `load` - load current changes from the configuration file(basically for direct edits of the file and test).

### Extended commands

Main command: `config`

Sub commands:
    
*    `print` - print all current config 
 
*    `generate` - try to generate config for your connection (TEST)
    
*    `reset` - discard current config in memory and load default settings
    
*    `reload` - just reload current config (useful for manual changes)
    
*    `save` - save current configuration

Main command: `ping`

*    `log` - print ping history

*    `<empty>` - basic ping info (you supposed to use just `/8 sp ping`)

### Debug commands

*    `debug` - switch for debug mode (output will be in console)
    
*    `debugloc` - switch for location debug mode (output will be in console)
    
*    `debugabnorm` - switch for abnormals debug mode (output will be in console)
