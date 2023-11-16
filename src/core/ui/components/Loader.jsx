
/**
 * Renders a loader component.
 *
 * @returns {JSX.Element} The rendered loader component.
 *
 * @example
 * import React from 'eact';
 * import { Loader } from './Loader';
 *
 * const loader = (
 *   <Loader />
 * );
 *
 * export default loader;
 */
import 'src/styles/loader.scss'
export const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    );
};
