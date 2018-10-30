/**
 * Do not modify this file, it is auto-generated.
 */
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { Generator } from '@ibm-wch-sdk/utils';

import { RenderingContext } from '@ibm-wch-sdk/ng';
import {
	DesignArticle,
	KEY_AUTHOR,
	KEY_AUTHOR_BIO,
	KEY_BODY,
	KEY_BODY_IMAGE,
	KEY_DATE,
	KEY_HEADING,
	KEY_MAIN_IMAGE,
	isDesignArticle,
} from './../../elements/design-article/designArticleType';
import { ImageWithInformationType } from './../../elements/image-with-information/imageWithInformationType';
import { LeadImageWithInformationType } from './../../elements/lead-image-with-information/leadImageWithInformationType';

/*
 * @name Design article
 * @id a8fa51a3-4919-4308-a0b3-6cd31ae15d7e
 */
export interface DesignArticleRenderingContext extends RenderingContext {
	/*
     * The ID of the content type this item belongs to.
     */
	typeId: 'a8fa51a3-4919-4308-a0b3-6cd31ae15d7e';

	/*
     * this is the link to the content type document this content is based on.
     */
	type: 'Design article';

	/*
     * The classification defines the document type. For content items, all documents are classified as \"content\".
     */
	classification: 'content';

	/*
     * Defined by the type and capture in the schema given by the type,
     *  in a real content, this property will be filled with more information.
     */
	elements: DesignArticle;

	text: {
		/**
		 * {
		 *   "elementType": "text",
		 *   "fieldLabel": "Text",
		 *   "key": "heading",
		 *   "label": "Topic title",
		 *   "minLength": 1,
		 *   "required": true
		 * }
		 */
		['heading']: string;
		/**
		 * {
		 *   "elementType": "text",
		 *   "fieldLabel": "Text",
		 *   "helpText": "",
		 *   "key": "author",
		 *   "label": "Author name"
		 * }
		 */
		['author']?: string;
	};

	group: {
		/**
		 * {
		 *   "elementType": "group",
		 *   "key": "mainImage",
		 *   "label": "Lead image",
		 *   "required": true,
		 *   "typeRef": {
		 *     "id": "fe31fbf4-4bc4-4ffa-9b27-615af51d23fe"
		 *   }
		 * }
		 */
		['mainImage']: LeadImageWithInformationType;
	};

	datetime: {
		/**
		 * {
		 *   "elementType": "datetime",
		 *   "fieldLabel": "Date",
		 *   "fieldType": "date-time",
		 *   "helpText": "Date and time is used when ordering a list of design articles.  The time will not display in the website.",
		 *   "key": "date",
		 *   "label": "Date",
		 *   "required": true
		 * }
		 */
		['date']: Date;
	};

	formattedtexts: {
		/**
		 * {
		 *   "allowMultipleValues": true,
		 *   "elementType": "formattedtext",
		 *   "fieldLabel": "Text chunk",
		 *   "helpText": "The design topic, when displayed in the website, will interleave the text chunks and images to create a fluid layout.",
		 *   "key": "body",
		 *   "label": "Text for body section",
		 *   "minimumValues": 1,
		 *   "required": true
		 * }
		 */
		['body']: string[];
	};

	groups: {
		/**
		 * {
		 *   "allowMultipleValues": true,
		 *   "elementType": "group",
		 *   "fieldLabel": "Design article image",
		 *   "key": "bodyImage",
		 *   "label": "images for body sections",
		 *   "minimumValues": 3,
		 *   "required": true,
		 *   "typeRef": {
		 *     "id": "f9e7f0b9-f57d-4d91-a257-54a64c1ff52f"
		 *   }
		 * }
		 */
		['bodyImage']: ImageWithInformationType[];
	};

	reference: {
		/**
		 * {
		 *   "elementType": "reference",
		 *   "fieldLabel": "Content item",
		 *   "key": "authorBio",
		 *   "label": "Author bio",
		 *   "restrictTypes": [
		 *     {
		 *       "id": "b0b91aad-8a9a-4d46-9aff-e35d004f0a1f"
		 *     }
		 *   ]
		 * }
		 */
		['authorBio']?: RenderingContext;
	};
}

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link DesignArticleRenderingContext } else false
 */
export function isDesignArticleRenderingContext(
	aContext: RenderingContext
): aContext is DesignArticleRenderingContext {
	return !!aContext && isDesignArticle(aContext.elements);
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link DesignArticleRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link DesignArticleRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.map(assertDesignArticleRenderingContext);
 */
export function assertDesignArticleRenderingContext(
	aContext: RenderingContext
): DesignArticleRenderingContext {
	// test if the context is as expected
	if (isDesignArticleRenderingContext(aContext)) {
		return aContext;
	}
	// type failure
	throw new TypeError('DesignArticleRenderingContext');
}

/** Operator to convert a {@link RenderingContext} into a {@link DesignArticleRenderingContext } using a pipe.
 *
 * @example this.onRenderingContext.pipe(opDesignArticleRenderingContext());
 */
export const opDesignArticleRenderingContext: Generator<
	OperatorFunction<RenderingContext, DesignArticleRenderingContext>
> = () =>
	map<RenderingContext, DesignArticleRenderingContext>(
		assertDesignArticleRenderingContext
	);
