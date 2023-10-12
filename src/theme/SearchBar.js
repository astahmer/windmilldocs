import { InkeepSearchBar, InkeepShadow } from '@inkeep/widgets';
import { useColorMode } from '@docusaurus/theme-common';
import React from 'react';
import useInkeepSettings from '../utils/useInkeepSettings';

export default function InkeepSearch() {
	const { baseSettings, aiChatSettings } = useInkeepSettings();
	const { colorMode } = useColorMode();

	const searchBarProps = { baseSettings, aiChatSettings };

	// Force color mode to be dictated by the one from Docusaurus
	searchBarProps.baseSettings.theme = {
		...searchBarProps.baseSettings.theme,
		colorMode: {
			...searchBarProps.baseSettings.theme.colorMode,
			forcedColorMode: colorMode === 'dark' ? 'dark' : 'light'
		}
	};

	return (
		<div className="Inkeep-Search">
			<InkeepShadow>
				<InkeepSearchBar {...searchBarProps} />
			</InkeepShadow>
		</div>
	);
}
