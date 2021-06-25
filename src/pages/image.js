import React from 'react';

import PageLayout from '../layouts/page/page.layout';
import ImageContent from '../components/image-content/image-content.comp';
import { useIsMobile } from '../utils/hooks/use-is-mobile';

const ImagePreview = () => {
	const isMobile = useIsMobile();

	return (
		<PageLayout
			subTopic={
				isMobile
					? 'Let’s verify that it’s all good!'
					: 'Let’s see if it’s all good!'
			}
			title='Image Manipulation'
		>
			<ImageContent />
		</PageLayout>
	);
};

export default ImagePreview;
