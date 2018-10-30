/**
 * Do not modify this file, it is auto-generated.
 */
import { Observable } from 'rxjs';
import { ImageWithInformationType } from './../../elements/image-with-information/imageWithInformationType';
import { LeadImageWithInformationType } from './../../elements/lead-image-with-information/leadImageWithInformationType';
import {
	DesignArticleRenderingContext,
	assertDesignArticleRenderingContext,
	isDesignArticleRenderingContext,
} from './designArticleRenderingContext';
import {
	AbstractRenderingComponent,
	RenderingContext,
	RenderingContextBinding,
} from '@ibm-wch-sdk/ng';

/*
 * @name Design article
 * @id a8fa51a3-4919-4308-a0b3-6cd31ae15d7e
 */
abstract class AbstractDesignArticleComponent extends AbstractRenderingComponent {
	/**
	 * Strongly typed stream of the rendering contexts
	 */
	readonly onRenderingContext: Observable<RenderingContext>;

	/**
	 * Strongly typed rendering context
	 */
	renderingContext: RenderingContext;

	/*
     * {
     *   "elementType": "text",
     *   "fieldLabel": "Text",
     *   "key": "heading",
     *   "label": "Topic title",
     *   "minLength": 1,
     *   "required": true
     * }
     */
	@RenderingContextBinding('text.heading')
	readonly onHeading: Observable<string>;

	/*
     * @see #onHeading
     */
	@RenderingContextBinding()
	readonly heading: string;

	/*
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
	@RenderingContextBinding('group.mainImage')
	readonly onMainImage: Observable<LeadImageWithInformationType>;

	/*
     * @see #onMainImage
     */
	@RenderingContextBinding()
	readonly mainImage: LeadImageWithInformationType;

	/*
     * {
     *   "elementType": "text",
     *   "fieldLabel": "Text",
     *   "helpText": "",
     *   "key": "author",
     *   "label": "Author name"
     * }
     */
	@RenderingContextBinding('text.author', '')
	readonly onAuthor: Observable<string>;

	/*
     * @see #onAuthor
     */
	@RenderingContextBinding()
	readonly author: string;

	/*
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
	@RenderingContextBinding('datetime.date')
	readonly onDate: Observable<Date>;

	/*
     * @see #onDate
     */
	@RenderingContextBinding()
	readonly date: Date;

	/*
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
	@RenderingContextBinding('formattedtexts.body')
	readonly onBody: Observable<string[]>;

	/*
     * @see #onBody
     */
	@RenderingContextBinding()
	readonly body: string[];

	/*
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
	@RenderingContextBinding('groups.bodyImage')
	readonly onBodyImage: Observable<ImageWithInformationType[]>;

	/*
     * @see #onBodyImage
     */
	@RenderingContextBinding()
	readonly bodyImage: ImageWithInformationType[];

	/*
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
	@RenderingContextBinding('reference.authorBio')
	readonly onAuthorBio: Observable<RenderingContext>;

	/*
     * @see #onAuthorBio
     */
	@RenderingContextBinding()
	readonly authorBio: RenderingContext;

	protected constructor() {
		super();
	}
}

/**
 * 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
 */
export {
	DesignArticleRenderingContext,
	isDesignArticleRenderingContext,
	assertDesignArticleRenderingContext,
	AbstractDesignArticleComponent,
};
