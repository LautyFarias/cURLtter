# cURLtter

![cURLtter Icon](./public/favicon.svg "cURLtter - Yet another URL s̶h̶o̶r̶t̶e̶n̶e̶r̶ cutter.")

Yet another URL s̶h̶o̶r̶t̶e̶n̶e̶r̶ cutter.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

cURLtter uses [Turso](https://turso.tech/) as database provider.

To run locally this project you need create a database in it a create a `.env` file with the next variables:

```bash
TURSO_AUTH_TOKEN=ey***
TURSO_DATABASE_URL="libsql://***.turso.io"
```

Then, apply the last Prisma migration:

```bash
turso db shell $DATABASE_NAME < ./prisma/migrations/$LAST_MIGRATION/migration.sql
```

Finally, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Turso Quickstart](https://docs.turso.tech/quickstart) - learn about how to start with Turso.
- [Prisma + Turso](https://www.prisma.io/docs/orm/overview/databases/turso) - how to integrate Prisma ORM with Turso database.

## Inspiration

cURLtter tries replicate the functionalities of common URL shorteners and [Slug by pheralb](https://github.com/pheralb/slug)
