import React from 'react';

import PageLayout from '../layouts/page/page.layout';
import ImagePreviewContent from '../components/image-preview-content/image-preview-content.comp';
import { useIsMobile } from '../utils/hooks/use-is-mobile';

const ImagePreview = () => {
	const isMobile = useIsMobile();

	return (
		<PageLayout subTopic={isMobile ? 'Guided Face Placement' : ''}>
			<ImagePreviewContent />
		</PageLayout>
	);
};

export default ImagePreview;
