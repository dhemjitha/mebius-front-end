import React, { useState, useEffect } from 'react';
import { toast } from "sonner";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CirclePlus, Trash2 } from 'lucide-react';

const TrendingProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState("");
    const [availableProducts, setAvailableProducts] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAvailableProducts = async () => {
            try {
                const mockProducts = [
                    {
                        id: 1,
                        name: "Sample Product 1",
                        price: 29.99,
                        image: "https://fed-2-frontend-pre.vercel.app/assets/images/2507976b1988e6d9a08599fcba5247bd.png",
                    },
                    {
                        id: 2,
                        name: "Sample Product 2",
                        price: 39.99,
                        image: "https://fed-2-frontend-pre.vercel.app/assets/images/5c482fd10ff96fad137ae5ca5aa7a561.png",
                    },
                ];
                setAvailableProducts(mockProducts);
            } catch (error) {
                toast.error("Failed to fetch available products");
            }
        };

        fetchAvailableProducts();
    }, []);

    useEffect(() => {
        const fetchTrendingProducts = async () => {
            try {
                setIsLoading(true);
                const mockTrendingProducts = [
                    {
                        id: 2,
                        name: "Sample Product 2",
                        price: 39.99,
                        image: "https://fed-2-frontend-pre.vercel.app/assets/images/5c482fd10ff96fad137ae5ca5aa7a561.png",
                    },
                ];
                setTrendingProducts(mockTrendingProducts);
            } catch (error) {
                toast.error("Failed to fetch trending products");
            } finally {
                setIsLoading(false);
            }
        };

        fetchTrendingProducts();
    }, []);

    const handleClick = async () => {
        if (!selectedProduct) {
            toast.error("Please select a product");
            return;
        }

        try {
            const productToAdd = availableProducts.find(p => p.id.toString() === selectedProduct);
            if (!productToAdd) return;

            if (trendingProducts.some(p => p.id === productToAdd.id)) {
                toast.error("This product is already exists in trending products");
                return;
            }

            setTrendingProducts(prev => [...prev, productToAdd]);
            setSelectedProduct("");
            toast.success("Product added to trending products");
        } catch (error) {
            toast.error("Failed to add trending product");
        }
    };

    const handleRemoveTrending = async (productId) => {
        try {
            setTrendingProducts(prev => prev.filter(p => p.id !== productId));
            toast.success("Product removed from trending products");
        } catch (error) {
            toast.error("Failed to remove trending product");
        }
    };

    return (
        <div className="container space-y-6">
            <div className="flex items-center gap-4">
                <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                    <SelectTrigger className="w-[300px]">
                        <SelectValue placeholder="Select a Product" />
                    </SelectTrigger>
                    <SelectContent>
                        {availableProducts.map((product) => (
                            <SelectItem key={product.id} value={product.id.toString()}>
                                {product.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button onClick={handleClick}>
                    <CirclePlus className="w-4 h-4 mr-2" />
                    Add</Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-10">
                                    Loading trending products...
                                </TableCell>
                            </TableRow>
                        ) : trendingProducts.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-muted-foreground">
                                    No trending products added yet.
                                </TableCell>
                            </TableRow>
                        ) : (
                            trendingProducts.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-12 w-12 object-cover rounded-md"
                                        />
                                    </TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>${product.price.toFixed(2)}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon"
                                            className="h-8 w-8 text-destructive hover:text-destructive"
                                            onClick={() => handleRemoveTrending(product.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default TrendingProducts;
