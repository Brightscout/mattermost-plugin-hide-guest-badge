# Mattermost Hide Guest Badge Plugin
## Table of Contents
- [Mattermost Hide Guest Badge Plugin](#mattermost-hide-guest-badge-plugin)
  - [Table of Contents](#table-of-contents)
  - [License](#license)
  - [Overview](#overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Setup](#setup)
  - [Development](#development)
    - [Setup](#setup-1)
    - [Building the plugin](#building-the-plugin)
    - [Deploying with Local Mode](#deploying-with-local-mode)
    - [Deploying with credentials](#deploying-with-credentials)

## License

See the [LICENSE](./LICENSE) file for license rights and limitations.

## Overview

This plugin hides the GUEST badges from the UI which are displayed as default for guest users in a channel, DM, group and auto-suggestion list for mention. For a stable production release, please download the latest version from the [Github Releases](https://github.com/Brightscout/mattermost-plugin-hide-guest-badge/releases) and follow the instructions to [install](#installation) the plugin.

## Features

This plugin hides the GUEST badges from the UI which are displayed as default for guest users in a channel, DM, group and auto-suggestion list for mention.

![image](https://github.com/Brightscout/mattermost-plugin-hide-guest-badge/assets/72438220/7de710d4-5195-4ad3-be69-ba792cde8c8c)

![image](https://github.com/Brightscout/mattermost-plugin-hide-guest-badge/assets/72438220/98c95e75-5a56-4dc5-aed6-d3f429df5355)

## Installation

1. Go to the [releases page of this GitHub repository](https://github.com/Brightscout/mattermost-plugin-hide-guest-badge/releases) and download the latest release for your Mattermost server.
2. Upload this file to the Mattermost **System Console > Plugins > Management** page to install the plugin. To learn more about how to upload a plugin, [see the documentation](https://docs.mattermost.com/administration/plugins.html#plugin-uploads).
3. Enable the plugin from **System Console > Plugins > Hide Guest Badge**.

## Setup

  - [Developer setup](./developer_docs.md)

## Development

### Setup

Make sure you have the following components installed:  

- Go - v1.16 - [Getting Started](https://golang.org/doc/install)
    > **Note:** If you have installed Go to a custom location, make sure the `$GOROOT` variable is set properly. Refer to [Installing to a custom location](https://golang.org/doc/install#install).
- Make

### Building the plugin

Run the following command in the plugin repo to prepare a compiled, distributable plugin zip:

```bash
make dist
```

After a successful build, a `.tar.gz` file in `/dist` folder will be created which can be uploaded to Mattermost. To avoid having to manually install your plugin, deploy your plugin using one of the following options.

### Deploying with Local Mode

If your Mattermost server is running locally, you can enable [local mode](https://docs.mattermost.com/administration/mmctl-cli-tool.html#local-mode) to streamline deploying your plugin. Edit your server configuration as follows:

```
{
    "ServiceSettings": {
        ...
        "EnableLocalMode": true,
        "LocalModeSocketLocation": "/var/tmp/mattermost_local.socket"
    },
}
```

and then deploy your plugin:

```bash
make deploy
```

You may also customize the Unix socket path:

```bash
export MM_LOCALSOCKETPATH=/var/tmp/alternate_local.socket
make deploy
```

If developing a plugin with a web app, watch for changes and deploy those automatically:

```bash
export MM_SERVICESETTINGS_SITEURL=http://localhost:8065
export MM_ADMIN_TOKEN=j44acwd8obn78cdcx7koid4jkr
make watch
```

### Deploying with credentials

Alternatively, you can authenticate with the server's API with credentials:

```bash
export MM_SERVICESETTINGS_SITEURL=http://localhost:8065
export MM_ADMIN_USERNAME=admin
export MM_ADMIN_PASSWORD=password
make deploy
```

or with a [personal access token](https://docs.mattermost.com/developer/personal-access-tokens.html):

```bash
export MM_SERVICESETTINGS_SITEURL=http://localhost:8065
export MM_ADMIN_TOKEN=j44acwd8obn78cdcx7koid4jkr
make deploy
```
Made with &#9829; by [Brightscout](https://www.brightscout.com)