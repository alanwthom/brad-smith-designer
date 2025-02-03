import { h } from 'preact';

const BlockQuadruple = ({ modifier, figure1modifier, figure2modifier, figure3modifier,  figure4modifier, image1, image2, image3, image4 }) => <div class={`block-quadruple ${modifier ? `${modifier}` : ''}`}>
{
    <div class="block-quadruple__container">
        <figure class={`block-quadruple__figure ${figure1modifier ? `${figure1modifier}` : ''}`}>
            <img class="block-quadruple__image" src={image1}></img>
        </figure>
        <figure class={`block-quadruple__figure ${figure2modifier ? `${figure2modifier}` : ''}`}>
            <img class="block-quadruple__image" src={image2}></img>
        </figure>
        <figure class={`block-quadruple__figure ${figure3modifier ? `${figure3modifier}` : ''}`}>
            <img class="block-quadruple__image" src={image3}></img>
        </figure>
        <figure class={`block-quadruple__figure ${figure4modifier ? `${figure4modifier}` : ''}`}>
            <img class="block-quadruple__image" src={image4}></img>
        </figure>
    </div>
}
</div>;

export default BlockQuadruple;