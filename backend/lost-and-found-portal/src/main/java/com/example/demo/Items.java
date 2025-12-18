package com.example.demo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "items")
public class Items {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name = "item_id")
	private int itemId;
	
	@Column(name = "item_type", nullable = false)
	private String itemType;
	
	@Column(nullable = false)
	private int quantity;
	
	@Column(name = "location_found", nullable = false)
	private String locationFound;
	
	@Column(name = "collection_place", nullable = false)
	private String collectionPlace;
	
	public int getItemId() {
		return itemId;
	}
	public void setItemId(int itemId) {
		this.itemId = itemId;
	}
	public String getItemType() {
		return itemType;
	}
	public void setItemType(String itemType) {
		this.itemType = itemType;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getLocationFound() {
		return locationFound;
	}
	public void setLocationFound(String locationFound) {
		this.locationFound = locationFound;
	}
	public String getCollectionPlace() {
		return collectionPlace;
	}
	public void setCollectionPlace(String collectionPlace) {
		this.collectionPlace = collectionPlace;
	}
}
