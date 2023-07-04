import React from 'react';

// eslint-disable-next-line import/no-unresolved
import {PluginRegistry} from 'types/mattermostWebapp';

import {HideGuestBadge} from 'components/hideGuestBadge'

import {pluginId} from './manifest';

export default class Plugin {
    public async initialize(registry: PluginRegistry) {
        // @see https://developers.mattermost.com/extend/plugins/webapp/reference/
        registry.registerRootComponent(HideGuestBadge);

    }
}

declare global {
    interface Window {
        registerPlugin(id: string, plugin: Plugin): void
    }
}

window.registerPlugin(pluginId, new Plugin());
