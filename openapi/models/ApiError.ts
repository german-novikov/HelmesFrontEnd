// tslint:disable
/**
 * Test Work Helmes
 * Test Work for Helmes
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ApiErrorItem,
} from './';

/**
 * @export
 * @interface ApiError
 */
export interface ApiError {
    /**
     * @type {Array<ApiErrorItem>}
     * @memberof ApiError
     */
    generic?: Array<ApiErrorItem>;
    /**
     * @type {{ [key: string]: Array<ApiErrorItem>; }}
     * @memberof ApiError
     */
    fields?: { [key: string]: Array<ApiErrorItem>; };
    /**
     * @type {string}
     * @memberof ApiError
     */
    errorMessageKey?: string;
}