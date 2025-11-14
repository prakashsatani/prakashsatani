/* eslint-disable id-length */

/**
 * bem.js:
 *
 * Provides functions / utilities for generating BEM className strings
 *
 * Allows you to build single BEM classes as well as generate multiple classes
 * using one module ('Util/bem')
 *
 * 1. classname      - Generates a single classname in the BEM format.
 * @see https://github.com/bem/bem-react/tree/master/packages/classname
 *
 *
 * 2. classnames|cns - This is just the 'classnames' library that most are
 *                     already familiar with. Useful for generating lists
 *                     of classes and adding conditions.
 * @see (classnames|cns) https://github.com/JedWatson/classnames
 *
 * @example ```
 *  import { classname, cns } from 'src/util/bem';
 *
 *  // classname
 *  // ----------------------------------
 *  const cn = classname('block');
 *  cn()                             // -> 'block'
 *  cn('elem')                       // -> 'block__elem'
 *  cn('elem', { mod: false })       // -> 'block__elem'
 *  cn('elem', { mod: true })        // -> 'block__elem block__elem--mod'
 *  cn('elem', { color: 'red' })     // -> 'block__elem block__elem--color-red'
 *
 *  // classnames/cns
 *  // ----------------------------------
 *  cns(
 *      cn(),
 *      'another-block',
 *      { 'conditional-block': true }
 *  )
 *  //  -> 'block another-block conditional-block'
 *
 * ```
 */
import { withNaming } from '@bem-react/classname';
import classnames from 'classnames';

// @see https://github.com/bem/bem-react/tree/master/packages/classname
// @see https://github.com/bem/bem-react/blob/master/packages/classname/classname.tsx
const classname = withNaming({
    n: '',    // Global namespace (prefixes all classes)
    e: '__',  // Element delimiter
    m: '--',  // Modifier delimiter
    v: '-'    // Modifier value delimiter
});

export { classname, classnames };

// Shortform
export { classnames as cns };
