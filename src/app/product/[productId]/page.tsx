import React from 'react'
import { Metadata } from 'next';

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product id ${params.productId}`,
        description: "Product page description",
    }
};

const productId = ({ params }: Props) => {
    return (
        <div>
            <h1>{params.productId}</h1>
        </div>
    );
};

export default productId;