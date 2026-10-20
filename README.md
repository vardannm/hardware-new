This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Contact form email

Both contact forms POST to `/api/contact.php`. The PHP file is copied into
`out/api/` during the static build and must be deployed to PHP-enabled hosting
alongside the exported website. The Next.js development server does not execute
PHP; test sending on PHP-enabled staging or hosting.

The endpoint uses the hosting server's configured PHP `mail()` service, sending
to `info@hardwarehouses.com` from that same address. The visitor's email is set
as Reply-To. Ask the host to enable outbound mail and authorize this sender
(including SPF/DKIM) if it is not already configured. No email credentials belong
in browser code. Authenticated SMTP requires a separate server-side integration
if the host does not provide a mail transport.

The endpoint needs a writable PHP temporary directory for its per-IP request
limit. It validates input and restricts recipients server-side. Lead analytics
fire only after the mail service accepts a submission. Acceptance does not
guarantee inbox delivery; verify receipt on the deployed host before release.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
