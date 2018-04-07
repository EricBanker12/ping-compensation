## Introduction

Current skill prediction support in game commands.

## Basic info

Main format: `/8 sp <command>`

Example: `/8 sp info`

Extended command format: `/8 sp <command> <subcommand>`

Example: `/8 sp config print`

## Commands

### **Basic commands**

* `info` - print basic info about current SP and configuration.
 
* `strictdef` - switch for showing Brawler's Perfect Block messages if not rightfully showing(please do remember that this can cause crashes at very high ping).
    
* `mount` - switch for blocking skills usage when mounting.
     
* `off` - disable SP. In addition to that, you should not be: mounting, in battle, dead or using a skill.  
    
* `on` - enable SP. Same conditions from `sp off` likewise apply on this command. 

### **Extended commands**

* Main command: `config`

* Sub commands:
    
  - `print` - print current SP configuration.
 
  - `generate` - generate automatic configuration based ping.
    
  - `reset` - discard current configuration saved in memory and loads default settings.
    
  - `reload` - reload the configuration file(for direct edits of settings).
    
  - `save` - save current configuration.

* Main command: `ping`

  - `log` - print ping history.

  - `<empty>` - print basic ping info (Ex: `/8 sp ping`).

### **Debug commands**

* `debug` - switch for debug mode (output will be displayed in the console).
    
* `debugloc` - switch for location debug mode (output will be displayed in the console).
    
* `debugabnorm` - switch for abnormals debug mode (output will be displayed in the console).
