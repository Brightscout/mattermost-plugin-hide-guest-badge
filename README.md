# Mattermost plugin to hide guest badges
## Table of Contents
- [License](#license)
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Development](#development)

## License

See the [LICENSE](./LICENSE) file for license rights and limitations.

## Overview

This plugin hides the `GUEST` badge from the UI, which is displayed as default for the guest users in a channel, the badge is shown in DMs(Direct Messages), GMs(Group Messages), user profile popover, and auto-suggestion list for mentions. For a stable production release, please download the latest version from the [Github Releases](https://github.com/Brightscout/mattermost-plugin-hide-guest-badge/releases) and follow the instructions to [install](#installation) the plugin.

## Features

This plugin hides the `GUEST` badge from the UI, which is displayed as default for the guest users in a channel, the badge is shown in DMs(Direct Messages), GMs(Group Messages), user profile popover, and auto-suggestion list for mentions.

![image](https://github.com/Brightscout/mattermost-plugin-hide-guest-badge/assets/72438220/7711325d-9e34-4ebb-ad64-a4d271d90450)

![image](https://github.com/Brightscout/mattermost-plugin-hide-guest-badge/assets/72438220/688a67a7-5d96-430b-a3bc-dc6023520b17)

## Installation

1. Go to the [releases page of this GitHub repository](https://github.com/Brightscout/mattermost-plugin-hide-guest-badge/releases) and download the latest release for your Mattermost server.
2. Upload this file to the Mattermost **System Console > Plugins > Plugin Management** page to install the plugin. To learn more about how to upload a plugin, [see the documentation](https://docs.mattermost.com/administration/plugins.html#plugin-uploads).
3. Enable the plugin from **System Console > Plugins > Hide Guest Badge**.

## Development

Please see the [Developer setup](docs/developer_docs.md).

Made with &#9829; by [Brightscout](https://www.brightscout.com)
