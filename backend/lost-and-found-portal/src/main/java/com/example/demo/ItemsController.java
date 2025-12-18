package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/item")
@CrossOrigin(origins="http://localhost:3000")

public class ItemsController {
	@Autowired
	ItemsRepo ir;
	
	@GetMapping("/")
	List<Items> getAllItem(){
		return ir.findAll();
	}
	
	@PostMapping("/save")
	Items saveItem(@RequestBody Items items) {
		return ir.save(items);
	}
	
	@PutMapping("/update/{id}")
	Items updateItem(@RequestBody Items i, @PathVariable int id) {
		Items items = ir.findById(id).orElse(null);
		if (items == null) return null;

		items.setItemType(i.getItemType());
		items.setQuantity(i.getQuantity());
		items.setLocationFound(i.getLocationFound());
		items.setCollectionPlace(i.getCollectionPlace());
		return ir.save(items);
	}
	
	@DeleteMapping("/delete/{id}")
	void deleteItem(@PathVariable int id) {
		ir.deleteById(id);
	}
	
}
