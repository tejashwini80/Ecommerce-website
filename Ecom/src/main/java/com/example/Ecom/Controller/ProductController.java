package com.example.Ecom.Controller;

import com.example.Ecom.Model.Product;
import com.example.Ecom.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProductController {
    @Autowired
   private ProductService service;

  @GetMapping("/products")
  public ResponseEntity< List<Product>> getAllProducts(){
        return new ResponseEntity<>(service.getAllProducts(),HttpStatus.OK);
  }
  @GetMapping("/products/{pid}")
  public ResponseEntity<Product> getProduct(@PathVariable int pid){
      Product product= service.getProduct(pid);
      if(product!=null) return new ResponseEntity<>(product,HttpStatus.OK);
      else return new ResponseEntity<>(HttpStatus.NOT_FOUND);

  }
//getting data from user
    @PostMapping("/add")
    public  ResponseEntity<?>addProduct(@RequestPart Product product, @RequestPart MultipartFile imgFile){
        try{
            Product newProduct = service.addProduct(product,imgFile);
            return new ResponseEntity<>(newProduct,HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/products/{id}/image")
    public ResponseEntity<byte[]>getImageByproductId(@PathVariable int pid){
      Product product= service.getProduct(pid);
      byte[] imageFile=product.getImageData();
      return ResponseEntity.ok().contentType(MediaType.valueOf(product.getImageType())).body(imageFile);
    }

    @PutMapping("/update/{pid}")
    public ResponseEntity<String> updateProduct(@PathVariable int id,@RequestPart Product product,@RequestPart MultipartFile imageFile) throws IOException {
         Product product1=service.updateproduct(id,product,imageFile);
         if(product1!=null)return new ResponseEntity<>("updated",HttpStatus.OK);
         else return new ResponseEntity<>("Failed to update",HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete/{pid}")
    public ResponseEntity<String> deleteProduct(@PathVariable int pid){
      Product product= service.getProduct(pid);
        if(product!=null) {
            service.deleteProduct(pid);
            return new ResponseEntity<>("deleted", HttpStatus.OK);
        }
        else return new ResponseEntity<>("Product not found",HttpStatus.BAD_REQUEST);
    }

    @GetMapping("search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String keyword){
     List<Product> products=service.searchProducts(keyword);
     return new ResponseEntity<>(products,HttpStatus.OK);
    }



}
