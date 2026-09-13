ALTER TABLE "products" ALTER COLUMN "product_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "product_id" SET DEFAULT gen_random_uuid();