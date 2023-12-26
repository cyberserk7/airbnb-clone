"use client";

import Container from "../components/container";
import Heading from "../components/heading";
import ListingCard from "../components/listings/listingCard";
import { SafeUser, safeListing } from "../types";

interface FavoriteClientProps {
  favorites: safeListing[];
  currentUser?: SafeUser | null;
}

const FavoriteClient = ({ currentUser, favorites }: FavoriteClientProps) => {
  return (
    <Container>
      <Heading
        title="Favorited Properties"
        subtitle="Here are the properties which you've favorited"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {favorites.map((favorite) => (
          <ListingCard
            key={favorite.id}
            currentUser={currentUser}
            data={favorite}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoriteClient;
