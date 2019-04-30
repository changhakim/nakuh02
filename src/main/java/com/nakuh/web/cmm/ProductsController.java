package com.nakuh.web.cmm;

import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.domain.Product;
import com.nakuh.web.service.ProductServiceImpl;

@RestController
public class ProductsController {
	private static final Logger logger = LoggerFactory.getLogger(ProductsController.class);
	
	@Autowired Product product;
	@Autowired ProductServiceImpl productService;
	@Autowired HashMap<String, Object> map;
	@Autowired List<Product> list;
	
	//상품 전체목록 
	@GetMapping("/products")
	public List<Product> prolist(){
		 logger.info("=======  ProductController prolist:상품전체목록  진입 ======");
		 list = productService.findAllProduct();
		 System.out.println("ProductController ::: " + list.toString());
		 return list;
		 
	}
}
