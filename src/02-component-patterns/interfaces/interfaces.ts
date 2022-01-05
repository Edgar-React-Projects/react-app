import { ReactElement } from 'react';
import { ProductCardProps } from '../components/ProductCard';
import { ProductTitleProps } from '../components/ProductTitle';
import { ProductImageProps } from '../components/ProductImage';
import { ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: Product;
    
    increaseBy: ( value: number ) => void;
}

export interface ProductCardHOCProps {
    ( { children, product }: ProductCardProps ): JSX.Element,
    Title: ( TitleProps: ProductTitleProps ) => JSX.Element,
    Image: ( ImageProps: ProductImageProps ) => JSX.Element,
    Buttons: ( ButtonsProps: ProductButtonsProps ) => JSX.Element
}

export interface onChangeArgs {
    product: Product;
    count: number
}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: ( value: number ) => void;
    reset: () => void;
}