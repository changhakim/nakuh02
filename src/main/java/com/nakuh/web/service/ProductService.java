package com.nakuh.web.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.nakuh.web.domain.Product;

@Component
public interface ProductService {
	public void createProduct(Product param);
	public List<Product> findAllProduct(HashMap<String, String> paramMap);
	public List<Product> findSomeProducts(HashMap<String, String> paramMap);
	public Product findProduct(Product param);
	public int countProduct();
	public void modifyProduct(Product param);
	public void removeProduct(Product param);
}
