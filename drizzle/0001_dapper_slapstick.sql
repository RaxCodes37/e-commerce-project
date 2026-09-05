CREATE INDEX "title_search_index" ON "products" USING gin (to_tsvector('english',
    "product_name"));