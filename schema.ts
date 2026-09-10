import { relations, sql } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  boolean,
  index,
  uniqueIndex,
  primaryKey,
  uuid,
  decimal,
  integer,
} from "drizzle-orm/pg-core";

export const cartTable = pgTable("cart", {
  cartId: uuid("cart_id").primaryKey().defaultRandom(),
  productOnCartId: uuid("product_on_cart_id").references(() => productsTable.productId).notNull(),
  productOnCartName: text("product_on_cart_name").references(() => productsTable.productName).notNull(),
  productOnCartDesc: text("product_on_cart_description").references(() => productsTable.productDesc).notNull(),
  productOnCartPrice: decimal("product_on_cart_price").references(() => productsTable.productPrice).notNull(),
  productCount: integer("product_on_cart_count").default(1).notNull(),
  potentialBuyerId: text("potential_buyer_id").references(() => user.id).notNull(),
});

export const productsTable = pgTable(
  "products",
  {
    productId: uuid("product_id").defaultRandom().primaryKey(),
    productName: text("product_name").notNull(),
    productDesc: text("product_description").notNull(),
    productPrice: decimal("product_price").notNull(),
    //Will add productImage later.
  },
  (table) => [
    index("title_search_index").using(
      "gin",
      sql`to_tsvector('english',
    ${table.productName})`,
    ),
  ],
);

export const ordersTable = pgTable("orders", {
  orderId: uuid("order_id").defaultRandom().primaryKey(),
  buyerId: text("buyer_id")
    .references(() => user.id)
    .notNull(),
  productBought: uuid("orderec_item").references(() => productsTable.productId),
  productBoughtName: text("ordered_item_name").references(
    () => productsTable.productName,
  ),
});

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    issuer: text("issuer").notNull(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [
    uniqueIndex("account_issuer_accountId_uidx").on(
      table.issuer,
      table.accountId,
    ),
    index("account_userId_idx").on(table.userId),
  ],
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));
