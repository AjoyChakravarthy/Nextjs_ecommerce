export interface Product {
   id: number;
   title: string;
   price: number;
   thumbnail: string;
   rating: number;
   index: number;
}

export interface ProductCardProps {
   id: number;
   title: string;
   price: number;
   thumbnail: string;
   index: number;
   rating: number;
   onClick: () => void;
}

export interface ProductGridLayoutProps {
   products: Product[];
   onProductClick: (id: number) => void;
}

export interface ProductImagesProps {
   thumbnail: string | null;
   images: string[] | null;
   title: string;
}

export interface ProductInfoProps {
   title: string;
   price: number;
   rating: number;
   category: string;
   description: string;
   selectQuantity: string | number;
   selectSize: string | number;
   quantityOptions: { value: string | number; label: string | number }[];
   sizeOptions: { value: string | number; label: string | number }[];
   onQuantityChange: (value: string | number) => void;
   onSizeChange: (value: string | number) => void;
}

export interface Review {
   rating: number;
   comment: string;
   date: string;
   reviewerName: string;
   reviewerEmail: string;
}

export interface ProductDetsailsProps {
   id: number;
   title: string;
   thumbnail: string;
   images: string[];
   price: number;
   description: string;
   rating: number;
   category: string;
   brand: string;
   warrantyInformation: string;
   returnPolicy: string;
   reviews: Review[];
}

export interface StarRatingProps {
   rating: number;
}

export interface SearchInputProps {
   searchQuery: string;
   setSearchQuery: (query: string) => void;
   handleSearch: (event: React.FormEvent) => void;
}

export interface SearchResultProps {
   searchResults: {
      id: number;
      index: number;
      title: string;
      thumbnail: string;
      price: string;
      rating: number;
   }[];
   onClose: () => void;
}

export interface ProductCardMIniProps {
   id: number;
   title: string;
   price: number;
   thumbnail: string;
   index: number;
   rating: number;
   onClick: () => void;
}

export interface UseProductProps {
   id: number;
   title: string;
   description: string;
   price: number;
   rating: number;
   stock: number;
   brand: string;
   category: string;
   thumbnail: string;
   images: string[];
   index: number;
}

export interface PaginationProps {
   page: number;
   setPage: React.Dispatch<React.SetStateAction<number>>;
   totalPages: number;
}

export interface ListCardProps {
   title: string;
   slug: string;
}

export interface StoreCardProps {
   name: string;
   image: string;
   description: string;
}

export interface BasicSelectProps {
   label: string | number;
   value: string | number;
   options: { value: string | number; label: string | number }[];
   onChange: (value: string | number) => void;
}

export interface Category {
   slug: string;
   name: string;
   url: string;
}
