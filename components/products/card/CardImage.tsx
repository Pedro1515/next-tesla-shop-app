import NextLink from "next/link";
import Image from "next/image";

import Link from "@mui/material/Link";

interface Props {
    images: string[];
    title: string;
    isHover: boolean;
    index: number;
    slug: string;
    radius: number;
}

export const CardImage = ({
    images,
    title,
    isHover,
    index,
    slug,
    radius,
}: Props) => {
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
                            width={1000}
                            height={1000}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: `${radius}px`,
                            }}
                        />
                        <Image
                            src={"/products/" + images[1]}
                            alt={title}
                            width={1000}
                            height={1000}
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                borderRadius: `${radius}px`,
                                display: isHover ? "block" : "none",
                            }}
                        />
                    </>
                </Link>
            </NextLink>
        </>
    );
};
