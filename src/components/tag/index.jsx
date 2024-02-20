/**
 * Composant Tag
 * @description Un composant représentant un tag affiché dans une liste.
 * @props {string} tag - Le libellé du tag à afficher.
 */
function Tag({ tag }) {
    return (
        <li className="tag">
            <p className="tag-text">{tag}</p>
        </li>
    );
}

export default Tag;
