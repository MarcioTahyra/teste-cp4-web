import React from 'react';
import imagem1 from '../assets/images/pexels-denys-mikhalevych-11935611.jpg';
import imagem2 from '../assets/images/pexels-denys-mikhalevych-11935633.jpg';
import imagem3 from '../assets/images/pexels-harper-sunday-5658858.jpg';
import imagem4 from '../assets/images/pexels-vilvah-store-17656719.jpg';

function Produtos() {
    return (
        <>
            <h3>Produto 1</h3>
            <img src={imagem1} alt="Vidros de creme para o rosto" />
            
            <h3>Produto 2</h3>
            <img src={imagem2} alt="Protetor solar Sun Block" />

            <h3>Produto 3</h3>
            <img src={imagem3} alt="Produtos de Skin Care" />

            <h3>Produto 4</h3>
            <img src={imagem4} alt="Produtos para o rosto e protetor solar" />
        </>
    );
}

export default Produtos;
