import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Products } from "../../products";
import { Link } from "react-router-dom";
import { useState } from "react";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";
import { useStoreContext } from "../../app/contex/StoreContext";
import { currencyFormat } from "../../app/util/util";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync, setBasket } from "../basket/basketSlice";

interface Props{
    products: Products;
}
export default function KajakCard({products}:Props){
  const {status}=useAppSelector(state=>state.basket);
  const dispatch=useAppDispatch();
  
    return(
       
        <Card  >
        <CardHeader
        avatar={
            <Avatar sx={{bgcolor:'secondary.main'}} >
                {products.ime.charAt(0).toUpperCase()}
            </Avatar>
        }
        
        title={products.ime}
        titleTypographyProps={{
            sx: {fontWeight: 'bold', color: 'primary.main'}
        }}
        
        />
    <CardMedia
      sx={{ height: 150, backgroundSize:'contain'}}
      image={products.slika}
      title={products.ime}
    />
    <CardContent>
      <Typography gutterBottom variant="h5"  color='secondary'>
      {products.kolicinaNaStanju!>=0? currencyFormat(products.cijena) + "KM" : "Trenutno nedostupno"}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      
      </Typography>
    </CardContent>
    <CardActions>
    {products.kolicinaNaStanju!>=0? <LoadingButton loading={status.includes('pendingAddItem', products.id)} onClick={()=>dispatch(addBasketItemAsync({productId:products.id}))} size="small">Dodaj u korpu</LoadingButton>:null} 
      <Button component={Link} to={`/catalogKajak/${products.id}`}  size="small">Pregled</Button>
    </CardActions>
  </Card>
);
    

}