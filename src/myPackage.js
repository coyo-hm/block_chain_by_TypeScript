//@ts-check : 타입스크립트 파일한테 자바스크립트 파일을 확인하라고 함
// 타입스크립트 바로 적용 x -> JSDoc 사용, 코드 위에 코멘트로 작성 /** */
// @ts-check
/**
 * Initializes the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */

export function init(config){
    return true;
}
/**
 * Exits the program
 * @param {number} code 
 * @returns {number}
 */
export function exit(code){
    return code + 1;
} 