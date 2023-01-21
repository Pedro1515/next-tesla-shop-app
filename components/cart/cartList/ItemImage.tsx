import NextLink from "next/link";
import Link from "@mui/material/Link";
import { CardActionArea, CardMedia } from "@mui/material";

export const ItemImage = ({ img }: { img: string }) => (
    <NextLink href="/product/slug" legacyBehavior passHref>
        <Link underline="none">
            <CardActionArea>
                <CardMedia
                    image={`/products/${img}`}
                    component="img"
                    sx={{
                        borderRadius: " 3px",
                        width: 100,
                        height: 100,
                    }}
                />
            </CardActionArea>
        </Link>
    </NextLink>
);
