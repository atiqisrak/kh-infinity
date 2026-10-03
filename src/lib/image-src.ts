// Remote supplier images (e.g. dbx.com.cn) sit behind bot protection that the
// Next.js image optimizer can't pass, so they must be loaded by the browser
// directly. Pass this to next/image's `unoptimized` prop.
export const isRemoteImage = (src: string) => /^https?:\/\//.test(src)
