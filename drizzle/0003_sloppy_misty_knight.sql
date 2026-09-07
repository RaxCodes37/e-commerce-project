CREATE TABLE "cart" (
	"cart_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_on_cart_id" uuid,
	"product_on_cart_name" text,
	"product_on_cart_description" text,
	"product_on_cart_price" numeric,
	"potential_buyer_id" text
);
--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_product_on_cart_id_products_product_id_fk" FOREIGN KEY ("product_on_cart_id") REFERENCES "public"."products"("product_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_product_on_cart_name_products_product_name_fk" FOREIGN KEY ("product_on_cart_name") REFERENCES "public"."products"("product_name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_product_on_cart_description_products_product_description_fk" FOREIGN KEY ("product_on_cart_description") REFERENCES "public"."products"("product_description") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_product_on_cart_price_products_product_price_fk" FOREIGN KEY ("product_on_cart_price") REFERENCES "public"."products"("product_price") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_potential_buyer_id_user_id_fk" FOREIGN KEY ("potential_buyer_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;