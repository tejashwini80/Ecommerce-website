package com.example.Ecom.Service;

import com.example.Ecom.Model.Product;
import com.example.Ecom.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repo;
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    public Product getProduct(int pid) {
        return repo.findById(pid).orElse(new Product()) ;
    }

    public Product addProduct(Product product, MultipartFile imgFile) throws IOException {
        product.setImageName(imgFile.getOriginalFilename());
        product.setImageType(imgFile.getContentType());
        product.setImageData(imgFile.getBytes());
        return repo.save(product);
    }

    public Product updateproduct(int id, Product product, MultipartFile imageFile) throws IOException {
        product.setImageName(imageFile.getOriginalFilename());
        product.setImageType(imageFile.getContentType());
        product.setImageData(imageFile.getBytes());
        return repo.save(product);
    }

    public void deleteProduct(int pid) {
        repo.deleteById(pid);
    }

    public List<Product> searchProducts(String keyword) {
        return repo.searchProducts(keyword);
    }
}
