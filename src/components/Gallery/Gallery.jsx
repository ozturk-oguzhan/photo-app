import React, { use, useEffect, useState } from "react";
import "./Gallery.css";
import GalleryItem from "../GalleryItem/GalleryItem";
import { useLazyGetPinsQuery } from "../../utils/fetchPins";
import InfiniteScroll from "react-infinite-scroll-component";
const Gallery = ({ search, userId }) => {
  const [items, setItems] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [fetchPins, { isFetching, isLoading }] = useLazyGetPinsQuery();

  async function fetchData() {
    if (isFetching) return;
    console.log("userId", userId);
    const data = await fetchPins({ skip, search, userId }).unwrap();

    if (!data || data.length < 21) {
      setHasMore(false);
    }
    setItems((prev) => [...prev, ...data]);
    setSkip((prev) => prev + 1);
  }
  useEffect(() => {
    console.log(skip);
    setItems([]);
    setSkip(0);
    setHasMore(true);
  }, []);

  useEffect(() => {
    setItems([]);
    setSkip(0);
    setHasMore(true);
    fetchData();
  }, [search]);

  if (isLoading) return;
  return (
    <InfiniteScroll
      dataLength={items.length}
      hasMore={hasMore}
      next={fetchData}
      loader={<h4>Others Loading</h4>}
      endMessage={<p>All Loaded</p>}
    >
      <div className="gallery">
        {items.map((item) => (
          <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
