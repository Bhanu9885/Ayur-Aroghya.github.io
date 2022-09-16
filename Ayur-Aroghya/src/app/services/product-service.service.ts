import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../common/category';
import { Contact } from '../common/contact';
import { Product } from '../common/product';
import { Usertype } from '../common/usertype';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  items:Product[]=[];

  productURL : string="http://localhost:8080/Ayur-Aroghya/product"
  categoryURL : string="http://localhost:8080/Ayur-Aroghya/category"
  usertypeURL : string="http://localhost:8080/Ayur-Aroghya/user"
  contactURL : string="http://localhost:8080/Ayur-Aroghya/contact"
  cartURL : string="http://localhost:8080/Ayur-Aroghya/cart"


  constructor(private httpClient: HttpClient) { }

addtocart(product:Product){
  this.items.push(product);
}

getitems(){
  return this.items;
}
  getAllProducts() : Observable<Product[]>{
    return this.httpClient.get<GetProductResponse>(this.productURL).
    pipe(map(response=>response._embedded.products))
  }

  getAllUsers() : Observable<Usertype[]>{
    return this.httpClient.get<GetUserResponse>(this.usertypeURL).
    pipe(map(response=>response._embedded.usertypes))
  }

  getAllCategories() : Observable<Category[]>{
    return this.httpClient.get<GetCategoryResponse>(this.categoryURL).
    pipe(map(response=>response._embedded.categories))
  }

  getAllContacts() : Observable<Contact[]>{
    return this.httpClient.get<GetContactResponse>(this.contactURL).
    pipe(map(response=>response._embedded.contacts))
  }

  getProductById(PId:number):Observable<Product>
 {
    const productURL=this.productURL+"/"+PId;
   return this.httpClient.get<Product>(productURL);
 }

//get employees by Dept id
getProductByCatId(catId:number):Observable<Product[]>{
  const productBycatIdUrl= "http://localhost:8080/Ayur-Aroghya/product/search/findBycatId?id="+ catId;
  return this.httpClient.get<GetProductResponse>(productBycatIdUrl).pipe(map(response=> response._embedded.products));
 }
 //search 
 getProductByName(name: string) : Observable<Product[]>
   {
    const searchUrl="http://localhost:8080/Ayur-Aroghya/product/search/findByName?name="+name;
      return this.httpClient.get<GetProductByname>(searchUrl).
      pipe(map(response=>response._embedded.products));
  }
 
 saveProduct(product: Product):Observable<Product>
 {
 const httpOptions=
 {
   headers:new HttpHeaders({
     'content-type':'application/json',
     'Authorization' :'auth-token',
     'Access-Control-Allow-origin':'*'
   })
 };

 return this.httpClient.post<Product>(this.productURL,product,httpOptions);
 }

 updateProduct(product:Product):Observable<Product>
 {
   const httpOptions=
   {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization' :'auth-token',
       'Access-Control-Allow-origin':'*'
     })
   };
   return this.httpClient.put<Product>(this.productURL+`/${product.id}`,product,httpOptions);
 }

 deleteProduct(productId:number):Observable<Product>
 {
   const httpOptions=
   {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization' :'auth-token',
       'Access-Control-Allow-origin':'*'
     })
   };
   return this.httpClient.delete<Product>(this.productURL+`/${productId}`,httpOptions);
 }

 getUserById(UId:number):Observable<Usertype>
 {
    const usertypeURL=this.usertypeURL+"/"+UId;
   return this.httpClient.get<Usertype>(usertypeURL);
 }

saveUser(usertype: Usertype):Observable<Usertype>
 {
 const httpOptions=
 {
   headers:new HttpHeaders({
     'content-type':'application/json',
     'Authorization' :'auth-token',
     'Access-Control-Allow-origin':'*'
   })
 };
 
 return this.httpClient.post<Usertype>(this.usertypeURL,usertype,httpOptions);
 }

 updateUser(usertype:Usertype):Observable<Usertype>
 {
   const httpOptions=
   {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization' :'auth-token',
       'Access-Control-Allow-origin':'*'
     })
   };
   return this.httpClient.put<Usertype>(this.usertypeURL+`/${usertype.id}`,usertype,httpOptions);
 }

 deleteUser(userId:number):Observable<Usertype>
 {
   const httpOptions=
   {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization' :'auth-token',
       'Access-Control-Allow-origin':'*'
     })
   };
   return this.httpClient.delete<Usertype>(this.usertypeURL+`/${userId}`,httpOptions);
 }

 saveContact(contact: Contact):Observable<Contact>
 {
 const httpOptions=
 {
   headers:new HttpHeaders({
     'content-type':'application/json',
     'Authorization' :'auth-token',
     'Access-Control-Allow-origin':'*'
   })
 };
 return this.httpClient.post<Contact>(this.contactURL,contact,httpOptions);
 }

 
}

interface GetProductResponse{
  _embedded :{
    products : Product[]
  }
}
interface GetCategoryResponse{
  _embedded :{
    categories : Category[]
  }
}
interface GetProductByname
{
 _embedded : {
   products :Product[]
 }
}
interface GetUserResponse{
  _embedded :{
    usertypes : Usertype[]
  }
}
interface GetContactResponse{
  _embedded :{
    contacts : Contact[]
  }
}
  
