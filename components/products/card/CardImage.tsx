import NextLink from "next/link";
import Image from "next/image";

import Link from "@mui/material/Link";

interface Props {
    images: string[];
    title: string;
    isHover: boolean;
    index: number;
    slug: string;
}

export const CardImage = ({ images, title, isHover, index, slug }: Props) => {
    return (
        <>
            <NextLink
                href={`/product/${slug}`}
                prefetch={false}
                legacyBehavior
                passHref
            >
                <Link underline="none">
                    <>
                        <Image
                            src={"/products/" + images[0]}
                            alt={title}
                            priority={index < 6}
                            width={650}
                            height={650}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: `2px`,
                            }}
                        />
                        <Image
                            src={"/products/" + images[1]}
                            alt={title}
                            width={650}
                            height={650}
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                borderRadius: `2px`,
                                display: isHover ? "block" : "none",
                            }}
                        />
                    </>
                </Link>
            </NextLink>
        </>
    );
};
