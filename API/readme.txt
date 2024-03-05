To be able to use Redis:
1- install chocolaty from: https://chocolatey.org/install#individual
using this command:
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
2- install redis:
To install Redis 64-bit, run the following command from the command line or from PowerShell:
choco install redis-64 --version=3.0.501
--------------------------------------------------------------
I used "Another Redis Desktop Manager" as a Redis GUI.
I doanloaded Redily app.
you can install it through the chocolatey:
Windows:

Download exe from github(https://github.com/qishibo/AnotherRedisDesktopManager/releases) or gitee(https://gitee.com/qishibo/AnotherRedisDesktopManager/releases).
Or by winget: winget install qishibo.AnotherRedisDesktopManager
Or by chocolatey: choco install another-redis-desktop-manager
Or sponsor by win store, It’s not free, and I will be very grateful to you.
-------------------------------------
