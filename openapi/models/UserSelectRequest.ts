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

/**
 * @export
 * @interface UserSelectRequest
 */
export interface UserSelectRequest {
    /**
     * @type {string}
     * @memberof UserSelectRequest
     */
    name: string;
    /**
     * @type {Array<number>}
     * @memberof UserSelectRequest
     */
    sectors: Array<number>;
    /**
     * @type {boolean}
     * @memberof UserSelectRequest
     */
    agreedWithTerms?: boolean;
}
