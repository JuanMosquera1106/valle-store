"use client";

import { Producto } from "@/types";
import IconButton from "@/components/ui/icon-button";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";


interface ProductCard {
    data: Producto;
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                {data.prdfoto ? (
                    <Image
                        src={data.prdfoto}
                        fill
                        alt="Image"
                        className="aspect-square object-cover rounded-md"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-500">
                        Sin imagen
                    </div>
                )}
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={() => {}}
                            icon={<Expand size={20} className="text-gray-600"/>}
                        />
                                        <IconButton
                            onClick={() => {}}
                            icon={<ShoppingCart size={20} className="text-gray-600"/>}
                        />
                    </div>
                </div>
            </div>
            {/*Descripcion*/}
            <div>
                <p className="font-semibold text-lg">
                    {data.prdnombre}
                </p>
                <p className="text-sm text-gray-500">
                    {data.tipo?.tipnombre}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;
