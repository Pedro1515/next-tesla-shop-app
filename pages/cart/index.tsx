import { Typography, Grid, CardContent, Card, Divider, Button } from '@mui/material';
import { ShopLayout } from '@/components/layouts/ShopLayout';
import { CartList } from '../../components/cart/CartLint';
interface Props {}

export const CardPage = ({}: Props) => {
    const n = 4
    return (
        <ShopLayout containerWidth={1150} pageTitle={`Carrito - ${n}`} pageDescription='Carrito de compras de la tienda'>

            <Grid container sx={{ maxWidth: { sm: '550px', md: '100%'}, margin: { sm: 'auto', md: 'auto', lg: 'none' } }}>
                <Grid item xs={12}>
                    <Typography variant='h1' component='h1' pb={5}>
                        Carrito
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <Card >
                        <CardContent>
                            <Typography variant='h2' component='h2'>
                                Orden
                            </Typography>
                            <Divider sx={{ my: 2 }} />

                            {/* Order Summary */}

                            <Button sx={{ height: 40, mt: 2 }} fullWidth>
                                Checkout
                            </Button>

                        </CardContent>
                    </Card>

                </Grid>
                
            </Grid>
        </ShopLayout>
    )
}

export default CardPage;